const ExpenseService = require("../services/expense.service");

const ExpenseController = {};

/**
 * Create a new expense.
 */
ExpenseController.saveExpense = (req, res) => {

    const {
        amount,
        expenseDate,
        note,
        categoryId
    } = req.body;

    ExpenseService.saveExpense(
        amount,
        expenseDate,
        note,
        categoryId,
        (err, expense) => {

            if (err) {
                return res.status(400).json({
                    success: false,
                    message: err.message,
                    data: null,
                });
            }

            return res.status(201).json({
                success: true,
                message: "Expense created successfully.",
                data: expense,
            });

        }
    );

};

/**
 * Retrieve all expenses.
 */
ExpenseController.getExpenses = (req, res) => {

    ExpenseService.getExpenses((err, expenses) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
                data: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Expenses retrieved successfully.",
            data: expenses,
        });

    });

};

/**
 * Retrieve an expense by its ID.
 */
ExpenseController.getExpenseById = (req, res) => {

    const id = parseInt(req.params.id, 10);

    ExpenseService.getExpenseById(id, (err, expense) => {

        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message,
                data: null,
            });
        }

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found.",
                data: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Expense retrieved successfully.",
            data: expense,
        });

    });

};

/**
 * Delete an expense.
 */
ExpenseController.deleteExpense = (req, res) => {

    const id = parseInt(req.params.id, 10);

    ExpenseService.deleteExpense(id, (err, result) => {

        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message,
                data: null,
            });
        }

        if (!result.deleted) {
            return res.status(404).json({
                success: false,
                message: "Expense not found.",
                data: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Expense deleted successfully.",
            data: result,
        });

    });

};

module.exports = ExpenseController;