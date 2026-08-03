import BudgetForm from "../components/BudgetForm";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Home() {
    return (
        <main>

            <header>
                <h1>Budget Buddy</h1>
            </header>

            <BudgetForm />

            <ExpenseForm />

            <ExpenseList />

        </main>
    );
}