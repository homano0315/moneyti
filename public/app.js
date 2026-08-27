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
              answers:
                userAnswers
            })
        }
      );

    if (!response.ok) {
      console.error("결과 저장 실패");
      return;
    }

    const result =
      await response.json();

    console.log(
      "익명 결과 저장 완료:",
      result.id
    );

  } catch (error) {

    console.error(
      "서버 연결 오류:",
      error
    );

  }
}
