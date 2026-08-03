const db = require("../database/connection");

const ExpenseModel = {};

/**
 * Save a new expense.
 */
ExpenseModel.saveExpense = (
    amount,
    expenseDate,
    note,
    categoryId,
    callback
) => {
    db.run(
        `
        INSERT INTO expense (
            amount,
            expense_date,
            note,
            category_id
        )
        VALUES (?, ?, ?, ?)
        `,
        [
            amount,
            expenseDate,
            note,
            categoryId
        ],
        function (err) {
            if (err) {
                return callback(err);
            }

            callback(null, {
                id: this.lastID,
            });
        }
    );
};

/**
 * Retrieve all expenses.
 */
ExpenseModel.getExpenses = (callback) => {
    db.all(
        `
        SELECT
            expense.id,
            expense.amount,
            expense.expense_date,
            expense.note,
            expense.category_id,
            category.name AS category_name,
            category.icon AS category_icon,
            expense.created_at
        FROM expense
        LEFT JOIN category
            ON expense.category_id = category.id
        ORDER BY expense.expense_date DESC,
                 expense.created_at DESC
        `,
        [],
        (err, rows) => {
            if (err) {
                return callback(err);
            }

            callback(null, rows);
        }
    );
};

/**
 * Retrieve an expense by its ID.
 */
ExpenseModel.getExpenseById = (id, callback) => {
    db.get(
        `
        SELECT
            expense.id,
            expense.amount,
            expense.expense_date,
            expense.note,
            expense.category_id,
            category.name AS category_name,
            category.icon AS category_icon,
            expense.created_at
        FROM expense
        LEFT JOIN category
            ON expense.category_id = category.id
        WHERE expense.id = ?
        `,
        [id],
        (err, row) => {
            if (err) {
                return callback(err);
            }

            callback(null, row || null);
        }
    );
};

/**
 * Delete an expense by its ID.
 */
ExpenseModel.deleteExpense = (id, callback) => {
    db.run(
        `
        DELETE
        FROM expense
        WHERE id = ?
        `,
        [id],
        function (err) {
            if (err) {
                return callback(err);
            }

            callback(null, {
                deleted: this.changes > 0,
                changes: this.changes,
            });
        }
    );
};

module.exports = ExpenseModel;