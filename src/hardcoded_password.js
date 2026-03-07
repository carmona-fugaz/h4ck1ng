const express = require("express");
const fs = require("fs");

const app = express();

app.get("/file", (req, res) => {
  const filename = req.query.name;
  const data = fs.readFileSync("./files/" + filename);
  res.send(data);
});