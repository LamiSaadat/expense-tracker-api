const fs = require("fs");
const expensesFilePath = "./data/expensesData.json";

const getExpenses = () => {
  return JSON.parse(fs.readFileSync(expensesFilePath));
};

exports.index = (req, res) => {
  let expenses = getExpenses();

  res.send(expenses);
};
