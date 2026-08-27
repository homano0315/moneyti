const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


/* =========================================================
   PostgreSQL 연결
========================================================= */

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL 환경변수가 없습니다.");
}

const isLocal =
  !process.env.DATABASE_URL ||
  process.env.DATABASE_URL.includes("localhost");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  ssl: isLocal
    ? false
    : {
        rejectUnauthorized: false
      }
});


/* =========================================================
   기본 설정
========================================================= */

app.use(express.json());

app.use(
  express.static(
    path.join(__dirname, "public")
  )
);


/* =========================================================
   18문항의 성향 축

   1~5   소비 성향
   6~10  저축 성향
   11~14 투자 위험 성향
   15~18 경제 판단 성향
========================================================= */

const questionAxes = [

  "ID",
  "ID",
  "ID",
  "ID",
  "ID",

  "SC",
  "SC",
  "SC",
  "SC",
  "SC",

  "AT",
  "AT",
  "AT",
  "AT",

  "PF",
  "PF",
  "PF",
  "PF"

];


/*
선택지별 점수

첫 번째 답  = -2
두 번째 답  = -1
세 번째 답  = +1
네 번째 답  = +2
*/

const answerScores = [
  -2,
  -1,
  1,
  2
];


/* =========================================================
   데이터베이스 테이블 자동 생성
========================================================= */

async function initializeDatabase() {

  await pool.query(`
    CREATE TABLE IF NOT EXISTS moneyti_results (

      id BIGSERIAL PRIMARY KEY,

      result_type VARCHAR(4) NOT NULL,

      id_score INTEGER NOT NULL,
      sc_score INTEGER NOT NULL,
      at_score INTEGER NOT NULL,
      pf_score INTEGER NOT NULL,

      answers JSONB NOT NULL,

      created_at TIMESTAMPTZ
        NOT NULL
        DEFAULT NOW()

    );
  `);


  await pool.query(`
    CREATE INDEX IF NOT EXISTS
    idx_moneyti_result_type
    ON moneyti_results(result_type);
  `);


  await pool.query(`
    CREATE INDEX IF NOT EXISTS
    idx_moneyti_created_at
    ON moneyti_results(created_at);
  `);


  console.log(
    "MONEYTI database initialized."
  );
}


/* =========================================================
   답안 검증
========================================================= */

function validateAnswers(answers) {

  if (!Array.isArray(answers)) {
    return false;
  }

  if (answers.length !== 18) {
    return false;
  }

  return answers.every(
    answer =>
      Number.isInteger(answer) &&
      answer >= 0 &&
      answer <= 3
  );
}


/* =========================================================
   서버에서 점수 다시 계산
========================================================= */

function calculateResult(answers) {

  const scores = {

    ID: 0,
    SC: 0,
    AT: 0,
    PF: 0

  };


  answers.forEach(
    (answerIndex, questionIndex) => {

      const axis =
        questionAxes[questionIndex];

      const score =
        answerScores[answerIndex];

      scores[axis] += score;

    }
  );


  let type = "";

  type +=
    scores.ID >= 0
      ? "D"
      : "I";

  type +=
    scores.SC >= 0
      ? "S"
      : "C";

  type +=
    scores.AT >= 0
      ? "T"
      : "A";

  type +=
    scores.PF >= 0
      ? "P"
      : "F";


  return {
    type,
    scores
  };
}


/* =========================================================
   테스트 결과 저장 API

   POST /api/results
========================================================= */

app.post(
  "/api/results",

  async (req, res) => {

    try {

      const { answers } =
        req.body;


      if (!validateAnswers(answers)) {

        return res.status(400).json({

          success: false,

          message:
            "올바른 18개 답변이 필요합니다."

        });

      }


      const result =
        calculateResult(answers);


      const query = `

        INSERT INTO moneyti_results (

          result_type,

          id_score,
          sc_score,
          at_score,
          pf_score,

          answers

        )

        VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6
        )

        RETURNING id, created_at;

      `;


      const values = [

        result.type,

        result.scores.ID,
        result.scores.SC,
        result.scores.AT,
        result.scores.PF,

        JSON.stringify(answers)

      ];


      const saved =
        await pool.query(
          query,
          values
        );


      res.json({

        success: true,

        id:
          saved.rows[0].id,

        createdAt:
          saved.rows[0].created_at,

        type:
          result.type,

        scores:
          result.scores

      });

    }

    catch (error) {

      console.error(
        "결과 저장 오류:",
        error
      );


      res.status(500).json({

        success: false,

        message:
          "결과 저장 중 오류가 발생했습니다."

      });

    }

  }
);


/* =========================================================
   전체 통계 API

   GET /api/statistics
========================================================= */

app.get(
  "/api/statistics",

  async (req, res) => {

    try {

      const result =
        await pool.query(`
          SELECT
            result_type,
            id_score,
            sc_score,
            at_score,
            pf_score,
            answers,
            created_at
          FROM moneyti_results
          ORDER BY created_at DESC;
        `);


      const rows =
        result.rows;


      const total =
        rows.length;


      /* 유형별 인원 */

      const typeCounts = {

        ISAF: 0,
        ISAP: 0,
        ISTF: 0,
        ISTP: 0,

        ICAF: 0,
        ICAP: 0,
        ICTF: 0,
        ICTP: 0,

        DSAF: 0,
        DSAP: 0,
        DSTF: 0,
        DSTP: 0,

        DCAF: 0,
        DCAP: 0,
        DCTF: 0,
        DCTP: 0

      };


      /* 성향별 인원 */

      const traits = {

        I: 0,
        D: 0,

        C: 0,
        S: 0,

        A: 0,
        T: 0,

        F: 0,
        P: 0

      };


      /*
      18문항 × 4선택지
      */

      const questionCounts =
        Array.from(
          { length: 18 },
          () => [0, 0, 0, 0]
        );


      const scoreTotals = {

        ID: 0,
        SC: 0,
        AT: 0,
        PF: 0

      };


      rows.forEach(row => {

        const type =
          row.result_type;


        if (
          typeCounts[type] !== undefined
        ) {

          typeCounts[type]++;

        }


        /*
        4글자 결과를 기준으로
        전체 성향 인원 계산
        */

        traits[type[0]]++;
        traits[type[1]]++;
        traits[type[2]]++;
        traits[type[3]]++;


        scoreTotals.ID +=
          row.id_score;

        scoreTotals.SC +=
          row.sc_score;

        scoreTotals.AT +=
          row.at_score;

        scoreTotals.PF +=
          row.pf_score;


        let answers =
          row.answers;


        if (
          typeof answers === "string"
        ) {

          answers =
            JSON.parse(answers);

        }


        if (
          Array.isArray(answers)
        ) {

          answers.forEach(
            (answer, index) => {

              if (
                questionCounts[index] &&
                answer >= 0 &&
                answer <= 3
              ) {

                questionCounts[index][answer]++;

              }

            }
          );

        }

      });


      /* 평균 점수 */

      const averages = {

        ID:
          total
            ? scoreTotals.ID / total
            : 0,

        SC:
          total
            ? scoreTotals.SC / total
            : 0,

        AT:
          total
            ? scoreTotals.AT / total
            : 0,

        PF:
          total
            ? scoreTotals.PF / total
            : 0

      };


      /* 가장 많은 유형 */

      let mostCommonType = null;
      let mostCommonCount = 0;


      Object.entries(
        typeCounts
      ).forEach(
        ([type, count]) => {

          if (
            count > mostCommonCount
          ) {

            mostCommonType =
              type;

            mostCommonCount =
              count;

          }

        }
      );


      res.json({

        total,

        typeCounts,

        traits,

        averages,

        mostCommonType,

        mostCommonCount,

        questionCounts

      });

    }

    catch (error) {

      console.error(
        "통계 조회 오류:",
        error
      );


      res.status(500).json({

        success: false,

        message:
          "통계를 불러오는 중 오류가 발생했습니다."

      });

    }

  }
);


/* =========================================================
   /statistics 페이지
========================================================= */

app.get(
  "/statistics",

  (req, res) => {

    res.sendFile(
      path.join(
        __dirname,
        "public",
        "statistics.html"
      )
    );

  }
);


/* =========================================================
   Render 확인용 주소

   /health
========================================================= */

app.get(
  "/health",

  async (req, res) => {

    try {

      await pool.query(
        "SELECT 1"
      );


      res.json({
        status: "ok"
      });

    }

    catch (error) {

      console.error(error);


      res.status(500).json({

        status:
          "database error"

      });

    }

  }
);


/* =========================================================
   서버 실행
========================================================= */

initializeDatabase()

  .then(() => {

    app.listen(
      PORT,
      "0.0.0.0",

      () => {

        console.log(
          `MONEYTI running on port ${PORT}`
        );

      }
    );

  })

  .catch(error => {

    console.error(
      "Database initialization failed:",
      error
    );


    process.exit(1);

  });
