"use client";

import { useState } from "react";
import { saveBudget } from "../services/api";

export default function BudgetForm({ onSaved }) {

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

            // Notify parent component to refresh data
            if (onSaved) {
                onSaved();
            }

            // Clear form
            setMonth("");
            setAmount("");

        } catch (error) {

            alert(error.message);

        } finally {

            setLoading(false);

        }

    };

    return (

        <section
            className="
                bg-white
                rounded-lg
                shadow
                p-6
                h-full
            "
        >

            <h2 className="text-2xl font-bold mb-6">Monthly Budget</h2>

            <form onSubmit={handleSubmit}
                  className="space-y-5"
            >

                <div>

                    <label className="block mb-2 font-medium">
                        Month
                    </label>

                    <input
                        type="number"
                        min="1"
                        max="12"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <div>

                    <label>Year</label>

                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <div>

                    <label>Budget Amount (€)</label>

                    <input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="
                    w-full
                    bg-blue-600
                    text-white
                    py-3
                    rounded-md
                    hover:bg-blue-700
                    transition
                    disabled:bg-gray-100
                    "
                >
                    {loading ? "Saving..." : "Save Budget"}
                </button>

            </form>

        </section>

    );

}