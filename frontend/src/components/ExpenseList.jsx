"use client";

import { useEffect, useState } from "react";
import { getExpenses } from "../services/api";

export default function ExpenseList() {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadExpenses() {
            try {
                const result = await getExpenses();
                setExpenses(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadExpenses();
    }, []);

    if (loading) {
        return <p>Loading expenses...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section>
            <h2>Expense History</h2>

            {expenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id}>
                            {expense.category_icon} {expense.category_name}
                            {" • "}
                            €{expense.amount}
                            {" • "}
                            {expense.note}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}