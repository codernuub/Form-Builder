const router = require("express").Router();

const formController = require("../../controllers/form.controller");

router
  .route("/")
  .post(formController.createForm)
  .get(formController.fetchForms);

router
  .route("/:formId")
  .patch(formController.updateForm)
  .delete(formController.deleteForm);

module.exports = router;
