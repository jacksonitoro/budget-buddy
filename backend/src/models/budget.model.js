const db = require("../database/connection");

const BudgetModel = {};

/**
 * Save a monthly budget.
 * If a budget already exists for the specified month and year,
 * update it; otherwise, insert a new record.
 */
BudgetModel.saveBudget = (month, year, amount, callback) => {
    db.get(
        `
        SELECT id
        FROM budget
        WHERE month = ? AND year = ?
        `,
        [month, year],
        (err, row) => {
            if (err) {
                return callback(err);
            }

            // Budget exists → Update
            if (row) {
                db.run(
                    `
                    UPDATE budget
                    SET amount = ?
                    WHERE month = ? AND year = ?
                    `,
                    [amount, month, year],
                    function (err) {
                        if (err) {
                            return callback(err);
                        }

                        callback(null, {
                            operation: "update",
                            changes: this.changes,
                        });
                    }
                );
            }

            // Budget does not exist → Insert
            else {
                db.run(
                    `
                    INSERT INTO budget (month, year, amount)
                    VALUES (?, ?, ?)
                    `,
                    [month, year, amount],
                    function (err) {
                        if (err) {
                            return callback(err);
                        }

                        callback(null, {
                            operation: "insert",
                            id: this.lastID,
                        });
                    }
                );
            }
        }
    );
};


/**
 * Retrieve a budget by its ID.
 */
BudgetModel.getBudgetById = (id, callback) => {
    db.get(
        `
        SELECT *
        FROM budget
        WHERE id = ?
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
 * Retrieve a budget for a given month and year.
 */
BudgetModel.getBudget = (month, year, callback) => {
    db.get(
        `
        SELECT *
        FROM budget
        WHERE month = ? AND year = ?
        `,
        [month, year],
        (err, row) => {
            if (err) {
                return callback(err);
            }

            callback(null, row || null);
        }
    );
};

module.exports = BudgetModel;