const express = require("express");
const orm = require("./config/orm");
const app = express();
const PORT = 3000;

// do I need an orm in this project/would I call some orm methods here?


app.listen(PORT, () => {
  console.log(`Employee Tracker is currently listening at
  http://localhost:${PORT}`)
})