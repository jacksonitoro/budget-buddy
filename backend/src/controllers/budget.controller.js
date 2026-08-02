const BudgetService = require("../services/budget.service");

const BudgetController = {};

/**
 * Create or update a monthly budget.
 */
BudgetController.saveBudget = (req, res) => {
    const { month, year, amount } = req.body;

    BudgetService.saveBudget(month, year, amount, (err, result) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message,
                data: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Budget saved successfully.",
            data: result,
        });
    });
};

/**
 * Retrieve a monthly budget.
 */
BudgetController.getBudget = (req, res) => {
    const month = parseInt(req.query.month, 10);
    const year = parseInt(req.query.year, 10);

    BudgetService.getBudget(month, year, (err, budget) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: err.message,
                data: null,
            });
        }

        if (!budget) {
            return res.status(404).json({
                success: false,
                message: "Budget not found.",
                data: null,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Budget retrieved successfully.",
            data: budget,
        });
    });
};

module.exports = BudgetController;