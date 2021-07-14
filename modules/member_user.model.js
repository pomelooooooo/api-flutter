var bookshelf = require("../config/bookshelf");
var dbDefaultRead = bookshelf.defaultRead;

var MemberUserRead = dbDefaultRead.Model.extend({
  tableName: "fluttertest",
  idAttribute: "id",
});

exports.read = dbDefaultRead.model("MemberUserRead", MemberUserRead);
