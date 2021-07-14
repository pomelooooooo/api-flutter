module.exports = function () {
  var express = require("express");
  var bodyParser = require("body-parser");
  var path = require("path");
  global.appRoot = path.resolve(__dirname);
  var v1 = express.Router();
  var fs = require("fs");
  global.__fs = fs;
  var app = express();

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  fs.readdirSync(appRoot + "/../routes/v1").forEach(function (file) {
    require(appRoot + "/../routes/v1/" + file + "/" + file + ".route")(v1);
  });
  app.use("/v1", v1);

  return app;
};
