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

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
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
   18문항 성향 축
========================================================= */

const questionAxes = [
  "ID", "ID", "ID", "ID", "ID",

  "SC", "SC", "SC", "SC", "SC",

  "AT", "AT", "AT", "AT",

  "PF", "PF", "PF", "PF"
];


const answerScores = [
  -2,
  -1,
  1,
  2
];


/* =========================================================
   DB 테이블 자동 생성
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
   답 검증
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
   서버에서 결과 계산
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


  const type =
    (scores.ID >= 0 ? "D" : "I") +
    (scores.SC >= 0 ? "S" : "C") +
    (scores.AT >= 0 ? "T" : "A") +
    (scores.PF >= 0 ? "P" : "F");


  return {
    type,
    scores
  };
}


/* =========================================================
   결과 저장
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
          message: "올바른 18개 답변이 필요합니다."
        });

      }


      const result =
        calculateResult(answers);


      const saved =
        await pool.query(
          `
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
          `,
          [
            result.type,
            result.scores.ID,
            result.scores.SC,
            result.scores.AT,
            result.scores.PF,
            JSON.stringify(answers)
          ]
        );


      res.json({
        success: true,
        id: saved.rows[0].id,
        createdAt:
          saved.rows[0].created_at,
        type:
          result.type
      });

    }

    catch (error) {

      console.error(
        "결과 저장 오류:",
        error
      );


      res.status(500).json({
        success: false,
        message: "결과 저장 중 오류가 발생했습니다."
      });

    }

  }
);


/* =========================================================
   전체 통계
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


      const questionCounts =
        Array.from(
          { length: 18 },
          () => [0, 0, 0, 0]
        );


      rows.forEach(row => {

        const type =
          row.result_type;


        if (
          typeCounts[type] !== undefined
        ) {

          typeCounts[type]++;

        }


        traits[type[0]]++;
        traits[type[1]]++;
        traits[type[2]]++;
        traits[type[3]]++;


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


      let mostCommonType = null;
      let mostCommonCount = 0;


      Object.entries(typeCounts)
        .forEach(
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
        message: "통계를 불러오지 못했습니다."
      });

    }

  }
);


/* =========================================================
   통계 페이지
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
   상태 확인
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

      res.status(500).json({
        status: "database error"
      });

    }

  }
);


/* =========================================================
   서버 시작
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
