var mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "	dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "loqzeqetcmsgt08w",
        password: "iwbhn2lo23bvzdwk",
        database: "n5u85sdcfz3izlcy",
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