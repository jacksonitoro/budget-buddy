const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database file location
const dbPath = path.join(__dirname, "../../data/budget-buddy.db");

// Create or connect to the SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("❌ Failed to connect to SQLite:", err.message);
    } else {
        console.log("✅ Connected to SQLite database");
    }
});

module.exports = db;