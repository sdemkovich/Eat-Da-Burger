var mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "us-cdbr-east-02.cleardb.com",
        port: 3306,
        user: "b950e1dc9c2d41",
        password: process.env.MYSQL_PASSWORD,
        database: "heroku_be40004ea77aed5",
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;