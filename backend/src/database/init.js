const db = require("./connection");

function initializeDatabase() {

db.serialize(() => {

    // Create Budget table
    db.run(`
        CREATE TABLE IF NOT EXISTS budget (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            month INTEGER NOT NULL,
            year INTEGER NOT NULL,
            amount REAL NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(month, year)
        );
    `);

    // Create Category table
    db.run(`
        CREATE TABLE IF NOT EXISTS category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            icon TEXT
        );
    `);

    // Create Expense table
    db.run(`
        CREATE TABLE IF NOT EXISTS expense (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            amount REAL NOT NULL,
            expense_date DATE NOT NULL,
            note TEXT,
            category_id INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (category_id) REFERENCES category(id)
        );
    `);

    const defaultCategories = [
    ["Grocery", "🛒"],
    ["Transport", "🚗"],
    ["Housing", "🏠"],
    ["Utilities", "💡"],
    ["Shopping", "🛍"],
    ["Entertainment", "🎮"],
    ["Family Support", "👨‍👩‍👧‍👦"],
    ["Other", "📦"]
    ];

    defaultCategories.forEach(([name, icon]) => {
    db.run(
        `INSERT OR IGNORE INTO category (name, icon) VALUES (?, ?)`,
        [name, icon]
    );
    });

});



    console.log("✅ Database initialized");
}

module.exports = initializeDatabase;