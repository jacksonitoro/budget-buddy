"use client";

import { useState } from "react";

import Header from "../components/layout/Header";
import Dashboard from "../components/dashboard/Dashboard";
import BudgetForm from "../components/forms/BudgetForm";
import ExpenseForm from "../components/forms/ExpenseForm";
import ExpenseList from "../components/expenses/ExpenseList";

export default function Home() {

    const [refreshKey, setRefreshKey] = useState(0);

    function refreshData() {
        setRefreshKey((previous) => previous + 1);
    }

    return (

        <main className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto p-8">


                <Header/>


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