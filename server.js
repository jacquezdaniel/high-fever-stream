const cv = require("opencv4nodejs");
const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
// const record = require("./app/stream/record");
// const play = require("./app/stream/play");

const wCap = new cv.VideoCapture(0);

var PORT = process.env.PORT || 3000;
const FPS = 30;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/home.html"));
});
app.use(express.static(path.join(__dirname, "public")));
// app.use(record);
// app.use(play);

setInterval(() => {
  const frame = wCap.read();
  const video = cv.imencode(".jpg", frame).toString("base64");

  io.emit("image", video);
}, 1000 / FPS);

server.listen(PORT, function () {
  console.log("High Fever listening on PORT " + PORT);
});
