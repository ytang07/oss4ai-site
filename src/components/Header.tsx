import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[var(--primary-color)] text-[var(--foreground)] p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">Open Source for AI</Link>
      </div>
      <nav>
        <Link href="#events" className="ml-6 hover:text-[var(--accent-color)]">Past Events</Link>
        <Link href="https://lu.ma/oss4ai" className="ml-6 hover:text-[var(--foreground)]">Calendar</Link>
      </nav>
    </header>
  );
}
