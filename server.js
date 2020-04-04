const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);

var PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"));
});
app.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, function () {
  console.log("High Fever listening on PORT " + PORT);
});
