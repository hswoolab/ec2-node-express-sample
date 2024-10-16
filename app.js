const express = require("express");

const app = express();

const port = 3000;

app.set("port", port);

app.get("/", (req, res) => {
  res.send("Hello EC2!");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
