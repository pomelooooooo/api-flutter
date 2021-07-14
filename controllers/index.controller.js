exports.testService = function (req, res) {
  var knex = require("knex");
  var env = require("../config/env/developer.js");
  var db_config = env.db.defaultRead;
  const instance = knex(db_config);

  instance
    .raw("select 1+1 as result")
    .then((data) => {
      res.send("ApiOK");
    })
    .catch((err) => {
      res.send(err);
    });
};
