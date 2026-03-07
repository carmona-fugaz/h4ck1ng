const express = require("express");
const app = express();

app.get("/run", (req, res) => {
  const code = req.query.code;
  eval(code);
  res.send("Executed");
});

app.listen(3000);