const mysql = require('mysql');

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Galodoido84",
  database: "blogposts",

})

module.exports = db