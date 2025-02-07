import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Budget Buddy
        </Link>
        <div className="flex gap-4">
          <Link href="/dashboard" className="hover:text-primary-hover">
            Dashboard
          </Link>
          <Link href="/expenses" className="hover:text-primary-hover">
            Expenses
          </Link>
          <Link href="/about" className="hover:text-primary-hover">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary-hover">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}