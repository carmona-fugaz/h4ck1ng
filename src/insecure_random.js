const express = require("express");

const app = express();

app.get("/token", (req, res) => {
  // Token de sesión generado con Math.random()
  const token = Math.random().toString(36).substring(2);

  res.send("Session token: " + token);
});

app.listen(3000);