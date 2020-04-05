const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("High Fever Stream listening on PORT " + PORT);
});
