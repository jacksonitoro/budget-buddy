import Image from "next/image";
import Link from "next/link";
import Header from "../components/header"; // Import the Header component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Include the Header component at the top */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8 flex flex-col items-center justify-center text-center">
        {/* Budget Buddy Logo */}
        <div className="mb-8">
          <Image
            className="dark:invert"
            src="/budget-buddy-logo.svg" // Add your logo
            alt="Budget Buddy logo"
            width={180}
            height={38}
            priority
          />
        </div>

        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to <span className="text-primary">Budget Buddy</span>
          </h1>
          <p className="text-muted">
            Track your expenses effortlessly and take control of your finances.
          </p>
        </div>

        {/* Dashboard and View Expenses Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link href="/dashboard" className="btn-primary">
            Go to Dashboard
          </Link>
          <Link href="/expenses" className="btn-secondary">
            View Expenses
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-4 mt-auto">
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          <Link
            href="/about"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              aria-hidden
              src="/file.svg" // Add your file icon
              alt="About icon"
              width={16}
              height={16}
            />
            About
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              aria-hidden
              src="/window.svg" // Add your window icon
              alt="Contact icon"
              width={16}
              height={16}
            />
            Contact
          </Link>
          <Link
            href="/privacy"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image
              aria-hidden
              src="/globe.svg" // Add your global icon
              alt="Privacy icon"
              width={16}
              height={16}
            />
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}