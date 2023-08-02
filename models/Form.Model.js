const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Untitled Form",
  },
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: Date,
});

module.exports = new mongoose.model("forms", formSchema);
