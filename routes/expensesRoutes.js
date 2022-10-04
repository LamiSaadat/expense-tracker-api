const express = require("express");
const router = express.Router();
const expensesController = require("../controllers/expensesController.js");

router
  .route("/")
  .get(expensesController.index)
  .post(expensesController.addExpenseItem);

router.route("/:id").delete(expensesController.deleteExpenseItem);

module.exports = router;
