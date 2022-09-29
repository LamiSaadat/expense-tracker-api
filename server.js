const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

const expensesRoutes = require("./routes/expensesRoutes");

app.use(cors());
app.use(express.json());

//ROUTES
app.use("/", expensesRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀`);
});
