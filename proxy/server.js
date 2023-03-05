const express = require("express");
const app = express();
const axios = require("axios");
var config = require('./config.js');


app.get("/", async (req, res) => {
      var api_v = await axios.get(`//${config.get("URL")}`);
      console.log(api_v.data);
      res.send("Get from port 3000: " + api_v.data);
  });


module.exports = app;