module.exports = function (router) {
  //   var memberLogin = require("./member");
  var memberRegisters = require("../../../controllers/member.controller");

  router.post("/member/register", memberRegisters.register);
  // router.post("/member/");
};
