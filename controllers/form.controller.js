const { default: mongoose } = require("mongoose");
const FormModel = require("../models/Form.Model");

exports.createForm = async (req, res) => {
  try {
    const form = await FormModel.create({});
    return res.status(200).json({
      status: 200,
      data: {
        form,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.fetchForms = async (req, res) => {
  try {
    const forms = await FormModel.aggregate([
      {
        $lookup: {
          from: "questions",
          localField: "_id",
          foreignField: "formId",
          as: "questions",
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          published: 1,
          questions: { $size: "$questions" },
          responses: 0,
          createdAt: 1,
        },
      },
    ]);
    return res.status(200).json({
      status: "success",
      data: {
        forms,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateForm = async (req, res) => {
  try {
    await FormModel.updateOne({ _id: req.params.formId }, req.body);
    return res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    await FormModel.deleteOne({ _id: req.params.formId });
    return res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
