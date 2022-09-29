const fs = require("fs");
const { v4: uuid } = require("uuid");
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

  let newExpense = {
    id: uuid(),
    item: req.body.item,
    amount: req.body.amount,
  };

  expenses.push(newExpense);

  res.send(fs.writeFileSync(expensesFilePath, JSON.stringify(expenses)));
};
