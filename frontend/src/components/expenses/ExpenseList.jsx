"use client";

import { useEffect, useState } from "react";
import {
    getExpenses,
    deleteExpense,
} from "../../services/api";

export default function ExpenseList({ refreshKey }) {

    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function handleDelete(id) {

        if (!confirm("Delete this expense?")) {
            return;
        }

        try {

            await deleteExpense(id);

            setExpenses(previousExpenses =>
                previousExpenses.filter(
                    expense => expense.id !== id
                )
            );

        } catch (err) {

            alert(err.message);

        }

    }

    useEffect(() => {

        async function loadExpenses() {

            setLoading(true);
            setError("");

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

    }, [refreshKey]);

    if (loading) {
        return <p>Loading expenses...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (

        <section className="bg-white rounded-lg shadow p-6">

            <h2 className="text-2xl font-bold mb-6">
                Expense History
            </h2>

            {expenses.length === 0 ? (

                <p className="text-gray-500">
                    No expenses recorded yet.
                </p>

            ) : (

                <ul>

                    {expenses.map((expense) => (

                        <li
                            key={expense.id}
                            className="
                                border
                                rounded-lg
                                p-4
                                mb-3
                                flex
                                justify-between
                                items-center
                                transition
                                hover:shadow-md
                                hover:border-blue-300
                            "
                        >

                            <div className="space-y-1">

                                <p className="font-semibold">
                                    {expense.category_icon} {expense.category_name}
                                </p>

                                <p className="text-xl font-bold text-gray-900">
                                    €{Number(expense.amount).toFixed(2)}
                                </p>

                            </div>

                            <div className="text-right flex flex-col items-end gap-2">

                                <p className="text-sm text-gray-500 font-medium">
                                    {expense.note || "No note"}
                                </p>

                                <button
                                    onClick={() => handleDelete(expense.id)}
                                    className="
                                        text-red-600
                                        text-sm
                                        font-semibold
                                        hover:text-red-800
                                "
                                >
                                    🗑 Delete
                                </button>

                            </div>

                        </li>

                    ))}

                </ul>

            )}

        </section>

    );

}