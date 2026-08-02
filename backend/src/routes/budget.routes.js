

const express = require("express");
const BudgetController = require("../controllers/budget.controller");

const router = express.Router();

// Create or update a monthly budget
router.post("/", BudgetController.saveBudget);

// Retrieve a monthly budget
router.get("/", BudgetController.getBudget);

module.exports = router;