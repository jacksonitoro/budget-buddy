const BudgetModel = require("../models/budget.model");

const BudgetService = {};

/**
 * Create or update a monthly budget.
 */
BudgetService.saveBudget = (month, year, amount, callback) => {

    // Business validation
    if (!Number.isInteger(month) || month < 1 || month > 12) {
        return callback(new Error("Month must be between 1 and 12."));
    }

    if (!Number.isInteger(year) || year < 2020) {
        return callback(new Error("Year must be 2020 or later."));
    }

    if (typeof amount !== "number" || amount <= 0) {
        return callback(new Error("Budget amount must be greater than zero."));
    }

    BudgetModel.saveBudget(month, year, amount, (err, result) => {

        if (err) {
            return callback(err);
        }

        // If a new budget was inserted
        if (result.operation === "insert") {
            return BudgetModel.getBudgetById(result.id, callback);
        }

        // If an existing budget was updated
        BudgetModel.getBudget(month, year, callback);

    });
};

/**
 * Retrieve a monthly budget.
 */
BudgetService.getBudget = (month, year, callback) => {

    if (!Number.isInteger(month) || month < 1 || month > 12) {
        return callback(new Error("Month must be between 1 and 12."));
    }

    if (!Number.isInteger(year) || year < 2020) {
        return callback(new Error("Year must be 2020 or later."));
    }

    BudgetModel.getBudget(month, year, callback);
};

module.exports = BudgetService;