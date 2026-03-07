const fs = require("fs");
const express = require("express");

const app = express();

app.get("/read", (req, res) => {
  const file = req.query.file;
  const data = fs.readFileSync(file);
  res.send(data);
});

app.listen(3000);