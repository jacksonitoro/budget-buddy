"use client";

import { useState } from "react";
import { saveBudget } from "../../services/api";
import Input from "../ui/Input";
import Button from "../ui/Button";

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

                    <Input
                        type="number"
                        min="1"
                        max="12"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />

                </div>

                <div>

                    <label>Year</label>

                    <Input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />

                </div>

                <div>

                    <label>Budget Amount (€)</label>

                    <Input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                </div>

                <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Save Budget"}
                </Button>

            </form>

        </section>

    );

}