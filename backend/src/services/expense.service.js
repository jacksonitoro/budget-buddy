const ExpenseModel = require("../models/expense.model");

const ExpenseService = {};

/**
 * Create a new expense.
 */
ExpenseService.saveExpense = (
    amount,
    expenseDate,
    note,
    categoryId,
    callback
) => {

    // Validate amount
    if (typeof amount !== "number" || amount <= 0) {
        return callback(
            new Error("Expense amount must be greater than zero.")
        );
    }

    // Validate expense date
    if (!expenseDate) {
        return callback(
            new Error("Expense date is required.")
        );
    }

    // Validate category
    if (!Number.isInteger(categoryId) || categoryId <= 0) {
        return callback(
            new Error("A valid category is required.")
        );
    }

    ExpenseModel.saveExpense(
        amount,
        expenseDate,
        note,
        categoryId,
        (err, result) => {

            if (err) {
                return callback(err);
            }

            ExpenseModel.getExpenseById(
                result.id,
                callback
            );

        }
    );

};


/**
 * Retrieve all expenses.
 */
ExpenseService.getExpenses = (callback) => {

    ExpenseModel.getExpenses((err, expenses) => {

        if (err) {
            return callback(err);
        }

        callback(null, expenses);

    });

};

/**
 * Retrieve an expense by its ID.
 */
ExpenseService.getExpenseById = (id, callback) => {

    if (!Number.isInteger(id) || id <= 0) {
        return callback(
            new Error("Invalid expense ID.")
        );
    }

    ExpenseModel.getExpenseById(id, callback);

};

/**
 * Delete an expense.
 */
ExpenseService.deleteExpense = (id, callback) => {

    if (!Number.isInteger(id) || id <= 0) {
        return callback(
            new Error("Invalid expense ID.")
        );
    }

    ExpenseModel.deleteExpense(id, callback);

};

module.exports = ExpenseService;