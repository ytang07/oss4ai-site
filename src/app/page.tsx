import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventImages from "@/components/EventImages";
import PartnerLogos from "@/components/PartnerLogos";

export default function Home() {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.08fr_.92fr] md:pb-28 md:pt-24 lg:px-10">
          <div>
            <p className="eyebrow mb-6">A living network for builders</p>
            <h1 className="display-face max-w-3xl text-6xl font-bold sm:text-8xl lg:text-[8.6rem]">Open source<br /><span className="text-[var(--primary-color)]">for AI.</span></h1>
            <p className="mt-8 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg">A community building the resources, conversations, and shared direction that make AI open to everyone.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://lu.ma/oss4ai" className="button-primary">Explore events <span aria-hidden="true">↗</span></a>
              <a href="#events" className="button-ghost">See the archive</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[28rem] md:ml-auto">
            <div className="absolute -inset-5 rounded-full bg-[var(--primary-color)]/10 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-10">
              <Image src="/images/oss4ai_logo_clarified_transparent.png" alt="OSS4AI network logo" fill className="object-contain p-5 sm:p-10" priority />
              <span className="absolute left-6 top-6 font-mono text-[.62rem] tracking-[.16em] text-[var(--muted)]">01 / CONNECT</span>
              <span className="absolute bottom-6 right-6 font-mono text-[.62rem] tracking-[.16em] text-[var(--primary-color)]">OPEN BY DEFAULT</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="section-rule" /></div>
        <EventImages />
        <PartnerLogos />

        <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 text-center sm:px-8 lg:px-10">
          <p className="eyebrow mb-5">Keep showing up</p>
          <h2 className="display-face mx-auto max-w-2xl text-5xl font-bold sm:text-7xl">The next chapter is <span className="text-[var(--secondary-color)]">yours.</span></h2>
          <a href="https://lu.ma/oss4ai" className="button-primary mt-9">View the full calendar <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
