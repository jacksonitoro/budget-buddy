const API_BASE_URL = "http://localhost:5000/api";

/**
 * Save a monthly budget.
 */
export async function saveBudget(month, year, amount) {
    const response = await fetch(`${API_BASE_URL}/budget`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            month,
            year,
            amount,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}


/**
 * Save a new expense.
 */
export async function saveExpense(
    amount,
    expenseDate,
    note,
    categoryId
) {
    const response = await fetch(`${API_BASE_URL}/expense`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            amount,
            expenseDate,
            note,
            categoryId,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}

/**
 * Retrieve all expenses.
 */
export async function getExpenses() {
    const response = await fetch(`${API_BASE_URL}/expense`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}