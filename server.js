process.env.NODE_ENV = process.env.NODE_ENV || "developer";
const express = require("./config/express");
const app = express();
const config = require("./config/config");

app.listen(config.server.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect success");
  }
});
