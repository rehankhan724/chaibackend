const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("rehankhancom");
});

app.listen(process.env.PORT, () => {
  console.log(`EXAMPLE app listening on port ${port}`);
});
