const express = require("express");
const ExpenseController = require("../controllers/expense.controller");

const router = express.Router();

// Create a new expense
router.post("/", ExpenseController.saveExpense);

// Retrieve all expenses
router.get("/", ExpenseController.getExpenses);

// Retrieve a single expense
router.get("/:id", ExpenseController.getExpenseById);

// Delete an expense
router.delete("/:id", ExpenseController.deleteExpense);

module.exports = router;