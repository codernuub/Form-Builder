const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  formId: {
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
  },
  questionImage: String,
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("questions", questionSchema);
