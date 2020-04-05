var path = require("path");
//***********************
// Routing
//***********************
module.exports = (app) => {
  // If no matching route is found default to home
  app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../../public/home.html"));
  });
};
