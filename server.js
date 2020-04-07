const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", () => {});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

require("./routing/htmlRoutes")(app);

server.listen(PORT, () => {
  console.log(`High Fever is listening on port ${PORT}`);
});
