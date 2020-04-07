const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

require("./routing/htmlRoutes")(app);
require("./routing/nodeserver")(app);

app.listen(PORT, () => {
  console.log(`High Fever is listening on port ${PORT}`);
});
