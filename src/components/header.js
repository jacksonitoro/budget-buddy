import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Budget Buddy
        </Link>
        <div className="flex items-center">
          <Link href="/dashboard" className="px-4 py-2 mx-2 hover:bg-primary-dark rounded">
            Dashboard
          </Link>
          <Link href="/expenses" className="px-4 py-2 mx-2 hover:bg-primary-dark rounded">
            Expenses
          </Link>
          <Link href="/saving-goals" className="px-4 py-2 mx-2 hover:bg-primary-dark rounded">
            Saving Goals
          </Link>
          <Link href="/financial-summary" className="px-4 py-2 mx-2 hover:bg-primary-dark rounded">
            Financial Summary
          </Link>
        </div>
      </nav>
    </header>
  );
}
