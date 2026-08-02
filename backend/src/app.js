

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const budgetRoutes = require("./routes/budget.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/budget", budgetRoutes);

module.exports = app;