const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

const expensesRoutes = require("./routes/expensesRoutes");
const incomeRoutes = require("./routes/incomeRoutes");

app.use(cors());
app.use(express.json());

//ROUTES
app.use("/", expensesRoutes);
app.use("/income", incomeRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀`);
});
