module.exports = function (router) {
  var indexCtrl = require("../../../controllers/index.controller");

  router.get("/testService", indexCtrl.testService);
};
