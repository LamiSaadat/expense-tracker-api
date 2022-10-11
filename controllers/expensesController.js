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

  fs.writeFileSync(expensesFilePath, JSON.stringify(expenses));

  res.send(expenses);
};

exports.editExpenseItem = (req, res) => {
  let expenses = getExpenses();

  let editedExpenseItem = {
    id: req.params.id,
    item: req.body.item,
    amount: req.body.amount,
  };

  let editedList = expenses.map((item) => {
    if (item.id === editedExpenseItem.id) {
      return (item = editedExpenseItem);
    } else {
      return item;
    }
  });

  fs.writeFileSync(expensesFilePath, JSON.stringify(editedList));

  res.send(editedList);
};

exports.deleteExpenseItem = (req, res) => {
  let expenses = getExpenses();

  const expenseItemId = req.params.id;

  //check if expense item is in the file
  const foundExpenseItem = expenses.find((item) => {
    return item.id === expenseItemId;
  });

  if (!foundExpenseItem) {
    res.send("Expense not found.");
  }

  //remove expense item from the list
  const filteredExpenses = expenses.filter((item) => item.id !== expenseItemId);

  fs.writeFileSync(expensesFilePath, JSON.stringify(filteredExpenses));

  res.send(filteredExpenses);
};
