"use client";

import { useState } from "react";

import Dashboard from "../components/Dashboard";
import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Home() {

    const [refreshKey, setRefreshKey] = useState(0);

    const refreshData = () => {
        setRefreshKey((previous) => previous + 1);
    };

    return (

        <main>

            <header>
                <h1>Budget Buddy</h1>
            </header>

            <Dashboard refreshKey={refreshKey} />

            <BudgetForm onSaved={refreshData} />

            <ExpenseForm onSaved={refreshData} />

            <ExpenseList refreshKey={refreshKey} />

        </main>

    );

}