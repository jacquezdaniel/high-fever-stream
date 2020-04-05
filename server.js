const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "https://mighty-gorge-82269.herokuapp.com/",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("High Fever Stream listening on PORT " + PORT);
});
