const fs = require("fs");
const incomeFilePath = "./data/incomeData.json";

const getIncome = () => {
  return JSON.parse(fs.readFileSync(incomeFilePath));
};

exports.index = (_req, res) => {
  let income = getIncome();

  res.send(income);
};

exports.addIncome = (req, res) => {
  let newIncomeAmount = req.body;

  res.send(fs.writeFileSync(incomeFilePath, JSON.stringify(newIncomeAmount)));
};
