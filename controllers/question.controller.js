const QuestionModel = require("../models/Question.Model");

exports.saveQuestions = async (req, res) => {
  try {
    const questions = await QuestionModel.insertMany(req.body.questions, {
      unordered: true,
    });
    return res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.fetchQuestions = async (req, res) => {
  try {
    const questions = await QuestionModel.find({
      formId: req.params.formId,
    }).lean();
    return res.status(200).json({
      status: "success",
      data: {
        questions,
      },
    });
  } catch (err) {
    return res.status(200).json({
      status: "fail",
      message: err.message,
    });
  }
};
