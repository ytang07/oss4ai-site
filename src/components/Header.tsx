import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      <Link href="/" className="flex items-center gap-3" aria-label="OSS4AI home">
        <Image src="/images/oss4ai_logo_clarified_transparent.png" alt="" width={38} height={38} className="h-9 w-9 object-contain" priority />
        <span className="font-mono text-sm font-bold tracking-[.12em]">OSS4AI<span className="text-[var(--primary-color)]">/</span></span>
      </Link>
      <nav className="flex items-center gap-5 text-xs font-bold tracking-[.08em] text-[var(--muted)] uppercase sm:gap-8">
        <Link href="#events" className="hover:text-[var(--foreground)]">Archive</Link>
        <Link href="#partners" className="hidden hover:text-[var(--foreground)] sm:block">Community</Link>
        <Link href="https://oss4.ai/selfies" className="button-primary !px-4 !py-2.5 !text-[.68rem]">Selfies</Link>
        <Link href="https://lu.ma/oss4ai" className="button-ghost !px-4 !py-2.5 !text-[.68rem] !text-[var(--foreground)]">Calendar</Link>
      </nav>
    </header>
  );
}
