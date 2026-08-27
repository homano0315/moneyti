const questions = [

  {
    category: "소비 습관",
    text: "용돈이나 사용할 수 있는 돈이 생기면 가장 먼저 무엇을 하나요?",
    axis: "ID",
    answers: [
      ["사고 싶었던 것을 바로 산다.", -2],
      ["일단 마음에 드는 것을 찾아본다.", -1],
      ["앞으로 필요한 것을 생각해본다.", 1],
      ["소비와 저축 계획부터 세운다.", 2]
    ]
  },

  {
    category: "소비 습관",
    text: "사고 싶은 물건이 생겼을 때 나는?",
    axis: "ID",
    answers: [
      ["돈이 있다면 바로 사는 편이다.", -2],
      ["조금 고민하고 구매한다.", -1],
      ["며칠 정도 필요성을 생각한다.", 1],
      ["예산과 앞으로의 지출까지 확인한 뒤 결정한다.", 2]
    ]
  },

  {
    category: "소비 습관",
    text: "평소보다 큰 돈이 갑자기 생겼다면 어떻게 사용할 것 같나요?",
    axis: "ID",
    answers: [
      ["평소 사고 싶었던 것을 한꺼번에 산다.", -2],
      ["평소보다 자유롭게 소비한다.", -1],
      ["필요한 만큼 조금씩 나누어 사용한다.", 1],
      ["저축, 소비 등 목적별로 나누어 관리한다.", 2]
    ]
  },

  {
    category: "소비 습관",
    text: "평소 돈을 사용하는 방식과 가장 가까운 것은?",
    axis: "ID",
    answers: [
      ["필요하거나 사고 싶을 때마다 사용한다.", -2],
      ["대략적인 금액만 생각하며 사용한다.", -1],
      ["며칠 또는 일주일 단위로 사용할 돈을 나눈다.", 1],
      ["처음부터 사용할 목적과 한도를 정해놓는다.", 2]
    ]
  },

  {
    category: "소비 습관",
    text: "평소보다 큰 돈을 한 번에 써야 하는 상황이라면?",
    axis: "ID",
    answers: [
      ["마음에 들면 크게 고민하지 않는다.", -2],
      ["잠깐 고민한 후 결정한다.", -1],
      ["앞으로 쓸 돈에 문제가 없는지 확인한다.", 1],
      ["지출 후 남는 돈까지 계산한 뒤 결정한다.", 2]
    ]
  },

  {
    category: "저축 습관",
    text: "용돈이나 사용할 돈을 받았을 때 저축은 어떻게 하나요?",
    axis: "SC",
    answers: [
      ["거의 하지 않는다.", -2],
      ["쓰고 남는 돈이 있다면 저축한다.", -1],
      ["일정 부분은 저축하려고 한다.", 1],
      ["저축할 돈을 먼저 빼놓고 남은 돈을 사용한다.", 2]
    ]
  },

  {
    category: "저축 습관",
    text: "사고 싶은 물건을 사기 위해 큰 돈이 필요하다면?",
    axis: "SC",
    answers: [
      ["가능하면 바로 살 방법을 찾는다.", -2],
      ["조금 모아보고 부족하면 다른 방법을 생각한다.", -1],
      ["필요한 돈이 모일 때까지 기다린다.", 1],
      ["목표를 정하고 일정 기간 동안 계획적으로 모은다.", 2]
    ]
  },

  {
    category: "저축 습관",
    text: "예상하지 못했던 큰 돈이 생겼다면?",
    axis: "SC",
    answers: [
      ["대부분 원하는 것을 사는 데 사용한다.", -2],
      ["소비에 더 많이 사용한다.", -1],
      ["저축에 더 많이 사용한다.", 1],
      ["대부분 저축하거나 미래에 필요한 돈으로 보관한다.", 2]
    ]
  },

  {
    category: "저축 습관",
    text: "현재의 즐거움과 미래를 위한 준비 중 더 중요한 것은?",
    axis: "SC",
    answers: [
      ["현재의 즐거움이 훨씬 중요하다.", -2],
      ["현재의 즐거움이 조금 더 중요하다.", -1],
      ["미래를 위한 준비가 조금 더 중요하다.", 1],
      ["미래를 위해 현재의 소비를 줄일 수도 있다.", 2]
    ]
  },

  {
    category: "저축 습관",
    text: "작은 돈이 꾸준히 남는다면 어떻게 하는 편인가요?",
    axis: "SC",
    answers: [
      ["그때그때 사용한다.", -2],
      ["쓸 일이 생길 때 사용한다.", -1],
      ["모아두려고 한다.", 1],
      ["따로 모아 저축이나 목표 자금으로 관리한다.", 2]
    ]
  },

  {
    category: "투자 성향",
    text: "큰 돈을 투자한다고 가정하면 어떤 선택이 더 마음에 드나요?",
    axis: "AT",
    answers: [
      ["큰 손실 가능성이 있어도 큰 수익을 기대할 수 있는 선택", -2],
      ["어느 정도 위험이 있지만 수익 가능성이 높은 선택", -1],
      ["수익은 조금 낮아도 비교적 안정적인 선택", 1],
      ["수익보다 돈을 지키는 것을 우선하는 선택", 2]
    ]
  },

  {
    category: "투자 성향",
    text: "투자한 돈의 가치가 갑자기 크게 떨어졌다면 어떻게 할 것 같나요?",
    axis: "AT",
    answers: [
      ["다시 크게 오를 수도 있으니 계속 유지한다.", -2],
      ["걱정되지만 조금 더 지켜본다.", -1],
      ["추가 손실 가능성을 먼저 생각한다.", 1],
      ["처음부터 이렇게 변동이 큰 투자는 피하고 싶다.", 2]
    ]
  },

  {
    category: "투자 성향",
    text: "경제적으로 선택할 때 더 중요하게 생각하는 것은?",
    axis: "AT",
    answers: [
      ["큰 성공 가능성", -2],
      ["높은 성장 가능성", -1],
      ["안정적인 결과", 1],
      ["돈을 잃지 않는 것", 2]
    ]
  },

  {
    category: "투자 성향",
    text: "주변에서 최근 크게 오른 투자 상품이 화제가 된다면?",
    axis: "AT",
    answers: [
      ["기회를 놓치기 전에 투자해보고 싶다.", -2],
      ["작은 돈 정도는 투자해보고 싶다.", -1],
      ["위험성과 정보를 먼저 확인한다.", 1],
      ["이미 크게 오른 상품이라면 신중하게 접근한다.", 2]
    ]
  },

  {
    category: "경제 판단",
    text: "물건을 구매할 때 가격을 어떻게 확인하나요?",
    axis: "PF",
    answers: [
      ["가격 비교를 거의 하지 않는다.", -2],
      ["비싸다고 느껴질 때만 비교한다.", -1],
      ["여러 곳의 가격을 비교한다.", 1],
      ["가격, 품질, 후기까지 함께 비교한다.", 2]
    ]
  },

  {
    category: "경제 판단",
    text: "SNS에서 친구들이 많이 사용하는 상품을 발견했다면?",
    axis: "PF",
    answers: [
      ["나도 바로 사고 싶어진다.", -2],
      ["관심이 많이 생긴다.", -1],
      ["왜 인기 있는지 찾아본다.", 1],
      ["유행과 상관없이 나에게 필요한지 먼저 판단한다.", 2]
    ]
  },

  {
    category: "경제 판단",
    text: "잘 모르는 금융상품이나 투자 방법을 알게 되었다면?",
    axis: "PF",
    answers: [
      ["주변 사람들이 좋다고 하면 관심을 갖는다.", -2],
      ["수익이 높다고 하면 관심이 생긴다.", -1],
      ["기본적인 정보를 찾아본다.", 1],
      ["수익뿐 아니라 위험, 구조, 수수료까지 알아본다.", 2]
    ]
  },

  {
    category: "경제 판단",
    text: "큰 돈을 사용하거나 중요한 경제적 결정을 해야 할 때 나는?",
    axis: "PF",
    answers: [
      ["내 느낌을 믿고 빠르게 결정한다.", -2],
      ["주변 사람의 의견을 참고해 결정한다.", -1],
      ["여러 정보를 찾아보고 결정한다.", 1],
      ["여러 선택지를 비교하고 장단점을 분석한 뒤 결정한다.", 2]
    ]
  }

];


const typeNames = {
  ISAF: "자유로운 도전자",
  ISAP: "분석하는 도전자",
  ISTF: "안전 중심 실속형",
  ISTP: "현실적인 관리형",

  ICAF: "자유로운 소비형",
  ICAP: "전략적 소비형",
  ICTF: "감성적 소비형",
  ICTP: "신중한 현실형",

  DSAF: "미래형 도전자",
  DSAP: "전략적 성장형",
  DSTF: "안전 저축형",
  DSTP: "계획형 자산관리자",

  DCAF: "계획적 경험형",
  DCAP: "목표 소비형",
  DCTF: "안정적 생활형",
  DCTP: "균형 경제형"
};


let currentQuestion = 0;

let userAnswers =
  new Array(questions.length).fill(null);


/* =========================
   시작
========================= */

function startTest() {

  document
    .getElementById("startScreen")
    .classList.add("hidden");

  document
    .getElementById("questionScreen")
    .classList.remove("hidden");

  showQuestion();
}


/* =========================
   질문 표시
========================= */

function showQuestion() {

  const q =
    questions[currentQuestion];

  const percent =
    Math.round(
      ((currentQuestion + 1) /
      questions.length) * 100
    );


  document
    .getElementById("progressText")
    .textContent =
    `${currentQuestion + 1} / ${questions.length}`;


  document
    .getElementById("progressPercent")
    .textContent =
    `${percent}%`;


  document
    .getElementById("progress")
    .style.width =
    `${percent}%`;


  document
    .getElementById("category")
    .textContent =
    q.category;


  document
    .getElementById("question")
    .textContent =
    q.text;


  const area =
    document.getElementById("answers");

  area.innerHTML = "";


  q.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "answer-button";

      button.textContent =
        answer[0];


      if (
        userAnswers[currentQuestion]
        === index
      ) {

        button.classList.add(
          "selected"
        );

      }


      button.onclick =
        () => selectAnswer(index);


      area.appendChild(button);

    }
  );


  document
    .getElementById("backButton")
    .style.display =
    currentQuestion === 0
      ? "none"
      : "block";
}


/* =========================
   답 선택
========================= */

function selectAnswer(index) {

  userAnswers[currentQuestion] =
    index;


  if (
    currentQuestion <
    questions.length - 1
  ) {

    currentQuestion++;

    showQuestion();

  } else {

    showResult();

  }
}


/* =========================
   이전 질문
========================= */

function previousQuestion() {

  if (currentQuestion > 0) {

    currentQuestion--;

    showQuestion();

  }
}


/* =========================
   점수 계산
========================= */

function calculateScores() {

  const scores = {
    ID: 0,
    SC: 0,
    AT: 0,
    PF: 0
  };


  questions.forEach(
    (question, index) => {

      const selected =
        userAnswers[index];

      if (selected !== null) {

        scores[question.axis] +=
          question.answers[selected][1];

      }

    }
  );


  return scores;
}


function makeType(scores) {

  return (
    (scores.ID >= 0 ? "D" : "I") +
    (scores.SC >= 0 ? "S" : "C") +
    (scores.AT >= 0 ? "T" : "A") +
    (scores.PF >= 0 ? "P" : "F")
  );
}


/* =========================
   서버 저장
========================= */

async function saveResult() {

  try {

    const response =
      await fetch(
        "/api/results",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({
              answers: userAnswers
            })
        }
      );


    if (!response.ok) {

      console.error(
        "결과 저장 실패"
      );

      return;
    }


    const result =
      await response.json();

    console.log(
      "익명 결과 저장 완료:",
      result.id
    );

  }

  catch (error) {

    console.error(
      "서버 연결 오류:",
      error
    );

  }
}


/* =========================
   결과
========================= */

function showResult() {

  const scores =
    calculateScores();

  const type =
    makeType(scores);


  saveResult();


  document
    .getElementById("questionScreen")
    .classList.add("hidden");

  document
    .getElementById("resultScreen")
    .classList.remove("hidden");


  document
    .getElementById("resultCode")
    .textContent =
    type;


  document
    .getElementById("resultName")
    .textContent =
    typeNames[type];


  const planned =
    type[0] === "D";

  const saving =
    type[1] === "S";

  const stable =
    type[2] === "T";

  const analytical =
    type[3] === "P";


  document
    .getElementById("resultSummary")
    .textContent =

    `당신은 ${
      planned
        ? "돈을 비교적 계획적으로 사용하는"
        : "상황과 필요에 따라 돈을 자유롭게 사용하는"
    } 편이며, ${
      saving
        ? "현재의 소비보다 미래를 위한 저축을 중요하게 생각하는"
        : "저축보다 현재의 소비와 경험에 더 높은 가치를 두는"
    } 성향이 있습니다. ${
      stable
        ? "투자에서는 수익보다 손실 위험을 관리하는 것을 중요하게 생각하고"
        : "투자에서는 어느 정도 위험을 감수하면서 성장 가능성을 찾는 것을 중요하게 생각하며"
    }, ${
      analytical
        ? "정보와 근거를 비교해 판단하려는 성향이 강합니다."
        : "복잡한 분석보다는 직관과 상황을 활용해 판단하는 편입니다."
    }`;


  createStrengths(
    planned,
    saving,
    stable,
    analytical
  );


  createWeaknesses(
    planned,
    saving,
    stable,
    analytical
  );


  createInvestmentResult(
    stable,
    analytical
  );


  createGraphs(scores);


  window.scrollTo(
    0,
    0
  );
}


/* =========================
   장점
========================= */

function createStrengths(
  planned,
  saving,
  stable,
  analytical
) {

  const strengths = [];


  strengths.push(
    planned
      ? "돈을 사용할 때 목적과 우선순위를 생각하고 계획을 세우는 능력이 좋습니다."
      : "상황 변화에 유연하게 대응하며 필요한 곳에 빠르게 돈을 사용할 수 있습니다."
  );


  strengths.push(
    saving
      ? "당장의 소비를 조절해 미래에 사용할 자금을 만들어가는 능력이 있습니다."
      : "현재의 경험과 만족에도 경제적 가치를 두며 돈을 적극적으로 활용하는 편입니다."
  );


  strengths.push(
    stable
      ? "투자에서 예상 수익뿐 아니라 손실 가능성도 중요하게 생각합니다."
      : "새로운 기업이나 성장 가능성이 높은 분야에서 투자 기회를 발견하는 데 적극적인 편입니다."
  );


  strengths.push(
    analytical
      ? "경제적 결정을 할 때 가격과 정보, 위험을 비교하려는 성향이 있습니다."
      : "복잡한 상황에서도 빠르게 판단하고 행동으로 옮길 수 있습니다."
  );


  document
    .getElementById("strength")
    .textContent =
    strengths.join(" ");
}


/* =========================
   단점
========================= */

function createWeaknesses(
  planned,
  saving,
  stable,
  analytical
) {

  const weaknesses = [];


  weaknesses.push(
    planned
      ? "계획을 지나치게 중요하게 생각하면 필요한 소비나 새로운 경험까지 망설일 수 있습니다."
      : "계획하지 않은 소비가 반복되면 예상보다 돈을 빠르게 사용하게 될 수 있습니다."
  );


  if (!saving) {

    weaknesses.push(
      "현재의 소비를 계속 우선하면 장기적으로 필요한 자금을 만드는 속도가 느려질 수 있습니다."
    );

  }


  if (!stable) {

    weaknesses.push(
      "높은 성장 가능성에 집중하다 보면 실제 손실 가능성을 낮게 평가할 수 있습니다."
    );

  }


  if (!analytical) {

    weaknesses.push(
      "최근 가격 상승이나 주변 사람의 의견, SNS의 유행을 투자 가치와 혼동할 가능성이 있습니다."
    );

  }


  document
    .getElementById("weakness")
    .textContent =
    weaknesses.join(" ");
}


/* =========================
   투자 방식
========================= */

function createInvestmentResult(
  stable,
  analytical
) {

  const box =
    document.getElementById(
      "investmentDetail"
    );


  if (stable && analytical) {

    box.innerHTML = `

      <h4>🛡 안정적·분석형 투자</h4>

      <span class="asset-tag">채권</span>
      <span class="asset-tag">주식</span>

      <div class="asset-box">
        <b>① 채권 중심 투자</b>

        <p>
          채권 비중을 비교적 높게 두고
          만기가 다른 채권이나 여러 채권에
          분산하는 방식이 적합합니다.
        </p>
      </div>

      <div class="asset-box">
        <b>② 분산형 주식 투자</b>

        <p>
          특정 기업 하나보다 여러 기업과 산업에 나누어
          장기간 투자하는 방식이 잘 맞습니다.
        </p>
      </div>

      <div class="strategy-box">
        <b>추천 투자 전략</b><br>
        채권 중심 + 분산 주식 장기투자
      </div>
    `;

  }


  else if (!stable && analytical) {

    box.innerHTML = `

      <h4>🚀 성장 추구·분석형 투자</h4>

      <span class="asset-tag">주식</span>
      <span class="asset-tag">채권</span>

      <div class="asset-box">
        <b>① 주식 중심 장기 투자</b>

        <p>
          기업의 성장성과 경쟁력을 분석하고
          여러 기업에 나누어 장기간 투자하는 방식입니다.
        </p>
      </div>

      <div class="asset-box">
        <b>② 채권으로 위험 조절</b>

        <p>
          주식 비중을 높게 가져가면서
          일부 채권을 함께 보유해
          전체 변동성을 낮추는 방식입니다.
        </p>
      </div>

      <div class="strategy-box">
        <b>추천 투자 전략</b><br>
        분산 주식 중심 + 일부 채권
      </div>
    `;

  }


  else if (stable && !analytical) {

    box.innerHTML = `

      <h4>🌿 안정 중심 투자</h4>

      <span class="asset-tag">예금</span>
      <span class="asset-tag">채권</span>

      <div class="asset-box">
        <b>① 예금 중심 관리</b>

        <p>
          가까운 시기에 사용할 돈은
          예금으로 분리해 관리하는 방식이 적합합니다.
        </p>
      </div>

      <div class="asset-box">
        <b>② 채권 분산 투자</b>

        <p>
          장기간 사용할 계획이 없는 일부 자금을
          여러 채권이나 만기가 다른 채권으로
          분산하는 방식입니다.
        </p>
      </div>

      <div class="strategy-box">
        <b>추천 투자 전략</b><br>
        예금 중심 + 채권 분산
      </div>
    `;

  }


  else {

    box.innerHTML = `

      <h4>⚡ 적극적·직관형 투자</h4>

      <span class="asset-tag">주식</span>
      <span class="asset-tag">예금</span>

      <div class="asset-box">
        <b>① 분산 주식 투자</b>

        <p>
          한 종목과 한 시점에 집중하기보다
          여러 기업과 여러 투자 시점으로 나누어
          투자하는 방식이 적합합니다.
        </p>
      </div>

      <div class="asset-box">
        <b>② 예금과 투자금 분리</b>

        <p>
          필요한 자금은 예금으로 남겨두고
          장기간 사용하지 않을 돈만
          주식에 투자하는 방식입니다.
        </p>
      </div>

      <div class="strategy-box">
        <b>추천 투자 전략</b><br>
        분산 주식 + 예금 안전자금
      </div>
    `;

  }
}


/* =========================
   그래프
========================= */

function createGraphs(scores) {

  const area =
    document.getElementById(
      "traitGraphs"
    );

  area.innerHTML = "";


  const graphs = [

    {
      axis: "ID",
      left: "즉흥 소비",
      right: "계획 소비"
    },

    {
      axis: "SC",
      left: "소비 중심",
      right: "저축 중심"
    },

    {
      axis: "AT",
      left: "도전형",
      right: "안정형"
    },

    {
      axis: "PF",
      left: "직관형",
      right: "분석형"
    }

  ];


  graphs.forEach(graph => {

    const count =
      questions.filter(
        q => q.axis === graph.axis
      ).length;


    const max =
      count * 2;


    let rightPercent =
      Math.round(
        (
          (scores[graph.axis] + max)
          /
          (max * 2)
        )
        * 100
      );


    rightPercent =
      Math.max(
        0,
        Math.min(
          100,
          rightPercent
        )
      );


    let name;
    let percent;


    if (rightPercent >= 50) {

      name =
        graph.right;

      percent =
        rightPercent;

    }

    else {

      name =
        graph.left;

      percent =
        100 - rightPercent;

    }


    const row =
      document.createElement(
        "div"
      );


    row.className =
      "trait";


    row.innerHTML = `

      <div class="trait-head">

        <span>
          ${graph.left}
        </span>

        <span>
          ${graph.right}
        </span>

      </div>

      <div class="trait-bar">

        <div
          class="trait-fill"
          style="width:${percent}%"
        ></div>

      </div>

      <div class="trait-result">
        ${name} ${percent}%
      </div>
    `;


    area.appendChild(row);

  });
}


/* =========================
   다시 시작
========================= */

function restartTest() {

  currentQuestion = 0;

  userAnswers =
    new Array(
      questions.length
    ).fill(null);


  document
    .getElementById("resultScreen")
    .classList.add("hidden");


  document
    .getElementById("startScreen")
    .classList.remove("hidden");


  window.scrollTo(
    0,
    0
  );
}
