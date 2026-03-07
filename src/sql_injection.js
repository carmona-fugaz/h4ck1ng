const mysql = require('mysql');
const connection = mysql.createConnection({});

function getUser(username) {
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  connection.query(query, function(err, results) {
    if (err) throw err;
    console.log(results);
  });
}