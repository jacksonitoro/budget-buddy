import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Budget Buddy Logo */}
        <Image
          className="dark:invert"
          src="/budget-buddy-logo.svg" //  create my logo
          alt="Budget Buddy logo"
          width={180}
          height={38}
          priority
        />

        {/* Welcome Message */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Welcome to{" "}
            <span className="font-bold text-primary">Budget Buddy</span>{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Track your expenses effortlessly.</li>
        </ol>

        {/* Dashboard and View Expenses Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/dashboard" className="btn-primary">
            Go to Dashboard
          </Link>
          <Link href="/expenses" className="btn-secondary">
            View Expenses
          </Link>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          <Image
            aria-hidden
            src="/file.svg" // add file icon
            alt="About icon"
            width={16}
            height={16}
          />
          About
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/window.svg" //  my window icon
            alt="Contact icon"
            width={16}
            height={16}
          />
          Contact
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy"
        >
          <Image
            aria-hidden
            src="/globe.svg" // my global icon
            alt="Privacy icon"
            width={16}
            height={16}
          />
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}