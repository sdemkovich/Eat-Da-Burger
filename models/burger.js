var orm = require("../config/orm.js");

// Controller calls model functions which will pass data to ORM, then callback results to Controller

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (names, cb) {
        orm.insertOne("burgers", "burger_name", names, function (res) {
            cb(res);
        });
    },

    // updateOne: function (id, cb) {
    //     orm.updateOne("burgers", "devoured", "1", "id", id, function (res) {
    //         cb(res);
    //     });
    // },

    deleteOne: function (id, cb) {
        orm.deleteOne("burgers", "id", id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;