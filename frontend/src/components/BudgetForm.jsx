"use client";

import { useState } from "react";
import { saveBudget } from "../services/api";

export default function BudgetForm() {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {
            const result = await saveBudget(
                Number(month),
                Number(year),
                Number(amount)
            );

            alert(result.message);

            setMonth("");
            setAmount("");

        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <h2>Monthly Budget</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Month</label>

                    <input
                        type="number"
                        min="1"
                        max="12"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                </div>

                <div>
                    <label>Year</label>

                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>

                <div>
                    <label>Budget Amount (€)</label>

                    <input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Save Budget"}
                </button>

            </form>
        </section>
    );
}