const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = 8080;
const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} 🚀`);
});
