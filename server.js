const express = require("express");
const path = require("path");

const app = express();

const PORT =
  process.env.PORT || 3000;


/* public 폴더 제공 */
app.use(
  express.static(
    path.join(__dirname, "public")
  )
);


/* 메인 페이지 */
app.get("/", (req, res) => {

  res.sendFile(
    path.join(
      __dirname,
      "public",
      "index.html"
    )
  );

});


/* Render 상태 확인 */
app.get("/health", (req, res) => {

  res.json({
    status: "ok"
  });

});


/* 서버 시작 */
app.listen(
  PORT,
  "0.0.0.0",
  () => {

    console.log(
      `MONEYTI running on port ${PORT}`
    );

  }
);
