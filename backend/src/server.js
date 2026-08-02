const app = require("./app");
const initializeDatabase = require("./database/init");

initializeDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Budget Buddy API running on port ${PORT}`);
});