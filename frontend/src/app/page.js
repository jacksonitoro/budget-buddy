"use client";

import { useState } from "react";

import Dashboard from "../components/Dashboard";
import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Home() {

    const [refreshKey, setRefreshKey] = useState(0);

    function refreshData() {
        setRefreshKey((previous) => previous + 1);
    }

    return (

        <main className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto p-8">

                <header className="mb-10">

                    <h1 className="text-4xl font-bold">
                        Budget Buddy
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your monthly budget and expenses.
                    </p>

                </header>

                <Dashboard refreshKey={refreshKey} />

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

                    <BudgetForm onSaved={refreshData} />

                    <ExpenseForm onSaved={refreshData} />

                </div>

                <ExpenseList refreshKey={refreshKey} />

            </div>

        </main>

    );

}