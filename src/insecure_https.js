const http = require("http");

http.createServer((req, res) => {
  const password = req.url;
  console.log("Password received:", password);
  res.end("OK");
}).listen(8080);