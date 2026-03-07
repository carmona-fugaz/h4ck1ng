const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.cookie("session", "123456");
  res.send("Logged in");
});

app.listen(3000);