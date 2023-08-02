require("dotenv").config({});
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3001;
const MONGOURI =
  process.env.MONGOURI || "mongodb://127.0.0.1:27017/formbuilder";

mongoose
  .connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To Database");
    app.listen(PORT, () => console.log(`Up and running on port ${PORT}!`));
  })
  .catch((err) => console.log(err.message));
