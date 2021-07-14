var memberRegisters = require("../models/memberRegister.model");

exports.register = async function (req, res) {
  const { error } = memberRegisters.registerSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  var member_user_data = {};
  if (req.body.hasOwnProperty("email")) {
    member_user_data.email = req.body.email;
  }
  if (req.body.hasOwnProperty("password")) {
    member_user_data.password = req.body.password;
  }
  if (req.body.hasOwnProperty("userName")) {
    member_user_data.userName = req.body.userName;
  }
  if (req.body.hasOwnProperty("tel")) {
    member_user_data.tel = req.body.tel;
  }
  if (req.body.hasOwnProperty("name")) {
    member_user_data.name = req.body.name;
  }
  if (req.body.hasOwnProperty("surname")) {
    member_user_data.surname = req.body.surname;
  }
  if (req.body.hasOwnProperty("position_job")) {
    member_user_data.position_job = req.body.position_job;
  }

  let is_email = await memberRegisters.get_member_user({
    email: member_user_data.email,
  });
  if (is_email.data.length > 0) {
    let result = {};
    result["status"] = false;
    result["result"] = "Email ซ้ำ";
    res.send(result);
    return false;
  }
  let is_user = await memberRegisters.get_member_user({
    username: member_user_data.userName,
  });
  if (is_user.data.length > 0) {
    let result = {};
    result["status"] = false;
    result["result"] = "Username ซ้ำ";
    res.send(result);
    return false;
  }
  if (is_email.data.length == 0 && is_user.data.length == 0) {
    var result = await memberRegisters.insert(member_user_data);
    res.send(result);
  }
};
