var MemberUser = require("../modules/member_user.model");
var MemberUserRead = MemberUser.read;

var Joi = require("joi");

const registerSchema = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    userName: Joi.string().required(),
    tel: Joi.string().required(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    position_job: Joi.string().required(),
  });
  return schema.validate(data);
};
module.exports.registerSchema = registerSchema;

exports.insert = async function (savedata) {
  var result = {};
  var data = MemberUserRead.forge()
    .save(savedata)
    .then(function (data) {
      result["status"] = true;
      result["result"] = data;

      return result;
    })
    .catch(function (error) {
      result["status"] = false;
      result["error"] = error;

      return result;
    });

  return data;
};

exports.get_member_user = async function (where) {
  var result = {};

  var data = await MemberUserRead.query(function (query) {
    query.where(where);
  })
    .fetchAll()
    .then(function (data) {
      result["data"] = data;
      result["result"] = true;

      return result;
    })
    .catch(function (error) {
      result["result"] = false;

      return result;
    });
  return data;
};
