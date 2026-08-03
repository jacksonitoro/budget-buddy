

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const budgetRoutes = require("./routes/budget.routes");
const expenseRoutes = require("./routes/expense.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/expense", expenseRoutes);

module.exports = app;