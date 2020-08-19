var orm = require("../config/orm.js");

// Controller calls model functions which will pass data to ORM, then callback results to Controller

var burger = {
    // CRUD: Read
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // CRUD: Create
    insertOne: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },

    // CRUD: Update
    updateOne: function (id, cb) {
        orm.updateOne("burgers", "devoured", "1", "id", id, function (res) {
            cb(res);
        });
    },

    // CRUD: Delete
    deleteOne: function (id, cb) {
        orm.deleteOne("burgers", "id", id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;