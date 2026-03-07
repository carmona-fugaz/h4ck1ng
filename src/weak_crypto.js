const express = require("express");
const crypto = require("crypto");

const app = express();

app.get("/hash", (req, res) => {
  const password = req.query.password;

  // Uso inseguro de MD5 para contraseñas
  const hash = crypto.createHash("md5").update(password).digest("hex");

  res.send(hash);
});

app.listen(3000);