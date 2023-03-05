require('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req, res) => {
  console.log("Log from 3000")
  res.send("Hello World!");
  res.end();
});

module.exports = app;