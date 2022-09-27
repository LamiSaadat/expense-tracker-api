const express = require("express");
const router = express.Router();
const expensesController = require("../controllers/expensesController.js");

router.route("/").get(expensesController.index);

module.exports = router;
