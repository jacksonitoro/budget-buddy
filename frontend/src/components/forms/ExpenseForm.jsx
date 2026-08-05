"use client";

import { useState } from "react";

import { saveExpense } from "../../services/api";
import Select from "../ui/Select";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function ExpenseForm({onSaved}) {
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

            if (onSaved) {
                onSaved();
            }

            setAmount("");
            setExpenseDate(new Date().toISOString().split("T")[0]);
            setCategoryId("");
            setNote("");

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
            <h2 className="text-2xl font-bold mb-6">Add Expense</h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>
                    <label className="block mb-2 font-medium">
                        Amount (€)
                    </label>

                    <Input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Date
                    </label>

                    <Input
                        type="date"
                        value={expenseDate}
                        onChange={(e) => setExpenseDate(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Category
                    </label>

                    <Select
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
                    </Select>
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Note
                    </label>

                    <Input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>

                <Button
                    type="submit"
                    variant="success"
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Save Expense"}
                </Button>

            </form>
        </section>
    );
}