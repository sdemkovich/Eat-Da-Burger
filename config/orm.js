var connection = require("../config/connection.js");

// ORM will make SQL queries and callback results to Model

var orm = {
    // CRUD: Read
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // CRUD: Create
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // CRUD: Update
    // updateOne: function (table, col, val, condition, value, cb) {
    //     var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?" ;

    //     connection.query(queryString, [table, col, val, condition, value], function (err, result) {
    //         if (err) {
    //             throw err;
    //         }

    //         cb(result);
    //     });
    // },

    // CRUD: Delete
    deleteOne: function (table, condition, value, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?";

        connection.query(queryString, [table, condition, value], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;