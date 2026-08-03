"use client";

import { useState } from "react";

import { saveExpense } from "../services/api";

export default function ExpenseForm() {
    const [amount, setAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [categoryId, setCategoryId] = useState("");
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {
            const result = await saveExpense(
                Number(amount),
                expenseDate,
                note,
                Number(categoryId)
            );

            alert(result.message);

            setAmount("");
            setCategoryId("");
            setNote("");

        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <h2>Add Expense</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Amount (€)</label>

                    <input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div>
                    <label>Date</label>

                    <input
                        type="date"
                        value={expenseDate}
                        onChange={(e) => setExpenseDate(e.target.value)}
                    />
                </div>

                <div>
                    <label>Category</label>

                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <option value="">Select category</option>

                        <option value="1">🛒 Grocery</option>
                        <option value="2">🚗 Transport</option>
                        <option value="3">🏠 Housing</option>
                        <option value="4">💡 Utilities</option>
                        <option value="5">🛍 Shopping</option>
                        <option value="6">🎮 Entertainment</option>
                        <option value="7">👨‍👩‍👧‍👦 Family Support</option>
                        <option value="8">📦 Other</option>
                    </select>
                </div>

                <div>
                    <label>Note</label>

                    <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Save Expense"}
                </button>

            </form>
        </section>
    );
}