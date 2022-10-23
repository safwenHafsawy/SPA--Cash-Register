const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT} ...`);
});
