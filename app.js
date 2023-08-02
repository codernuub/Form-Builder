const express = require("express");
//API routes
const formRoutes = require("./routes/apis/form.routes");

const app = express();

app.use(express.json());
app.use("/public", express.static("public"));
//mounting app routes
app.use("/api/v1/forms", formRoutes);

app.use("*", (req, res, next) => {
  return res
    .status(404)
    .json({
      status: "fail",
      message: `Requested url not found ${req.originalUrl}`,
    });
});

module.exports = app;
