"use client";

import { useEffect, useState } from "react";
import { getBudget, getExpenses } from "../services/api";

export default function Dashboard({refreshKey}) {

    const [budget, setBudget] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [remainingBudget, setRemainingBudget] = useState(0);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // useEffect will be added next.
    useEffect(() => {

        async function loadDashboard() {
            setLoading(true);
            setError("");

            try {

                const month = new Date().getMonth() + 1;
                const year = new Date().getFullYear();

                // Retrieve budget
                const budgetResult = await getBudget(month, year);

                const monthlyBudget = budgetResult.data
                    ? budgetResult.data.amount
                    : 0;

                setBudget(monthlyBudget);

                // Retrieve expenses
                const expenseResult = await getExpenses();

                const total = expenseResult.data.reduce(
                    (sum, expense) => sum + Number(expense.amount),
                    0
                );

                setTotalExpenses(total);

                setRemainingBudget(
                    monthlyBudget - total
                );

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        }

        loadDashboard();

    }, [refreshKey]);

    if (loading) {
        return <p>Loading dashboard...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (

        <section className="mb-8">

            <h2 className="text-3xl font-bold mb-6">
                Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="border rounded-lg p-6 shadow">

                    <h3 className="text-lg font-semibold text-gray-600">
                        Monthly Budget
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        €{budget.toFixed(2)}
                    </p>

                </div>

                <div className="border rounded-lg p-6 shadow">

                    <h3 className="text-lg font-semibold text-gray-600">
                        Total Expenses
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        €{totalExpenses.toFixed(2)}
                    </p>

                </div>

                <div className="border rounded-lg p-6 shadow">

                    <h3 className="text-lg font-semibold text-gray-600">
                        Remaining Budget
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        €{remainingBudget.toFixed(2)}
                    </p>

                </div>

            </div>

        </section>

    );
}