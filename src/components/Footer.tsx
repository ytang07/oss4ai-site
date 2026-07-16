import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-rule mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      <p className="font-mono">© {new Date().getFullYear()} OSS4AI</p>
      <div className="flex gap-6 font-bold uppercase tracking-[.12em]">
        <Link href="https://lu.ma/oss4ai" className="hover:text-[var(--primary-color)]">Events</Link>
        <a href="mailto:hello@oss4.ai" className="hover:text-[var(--primary-color)]">Contact</a>
      </div>
    </footer>
  );
}
