const fs = require("fs");
const expensesFilePath = "./data/expensesData.json";

const getExpenses = () => {
  return JSON.parse(fs.readFileSync(expensesFilePath));
};

exports.index = (req, res) => {
  let expenses = getExpenses();

  res.send(expenses);
};

exports.addExpenseItem = (req, res) => {
  let expenses = getExpenses();

  let newExpense = req.body;

  expenses.push(newExpense);

  res.send(fs.writeFileSync(expensesFilePath, JSON.stringify(expenses)));
};
