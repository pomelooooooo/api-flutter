var config = require("./config");

var knexDefaultRead = require("knex")(config.db.defaultRead);
var bookshelfDefaultRead = require("bookshelf")(knexDefaultRead);

exports.knexDefaultRead = knexDefaultRead;

exports.defaultRead = bookshelfDefaultRead;
