const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");

router.route("/").get(incomeController.index).put(incomeController.addIncome);

module.exports = router;
