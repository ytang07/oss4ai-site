import Image from "next/image";
import enkayNoelle from "@/assets/enkay_noelle.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventImages from "@/components/EventImages";
import PartnerLogos from "@/components/PartnerLogos";
import georgeFahmy from "@/assets/george_fahmy.jpg";
import rakshandaReddyBijjam from "@/assets/rakshanda_reddy_bijjam.jpeg";
import seanLee from "@/assets/sean_lee.jpeg";
import yujianTang from "@/assets/yujian_tang.jpeg";

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
              <Image src="/images/oss4ai_aug_2026_logo_square.png" alt="OSS4AI network logo" fill className="rounded-full object-cover p-5 sm:p-10" priority />
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

        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
          <div className="section-rule pt-16 sm:pt-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow mb-4">The people behind it</p>
                <h2 className="display-face text-5xl font-bold sm:text-6xl">Our <span className="text-[var(--secondary-color)]">team.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">Building an open, welcoming home for the people shaping AI in public.</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <article className="group overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
                <div className="aspect-[5/4] overflow-hidden bg-[var(--surface-light)]">
                  <Image src={yujianTang} alt="Yujian Tang" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold">Yujian Tang</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[.14em] text-[var(--primary-color)]">Founder</p>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">01</span>
                </div>
              </article>

              <article className="group overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
                <div className="aspect-[5/4] overflow-hidden bg-[var(--surface-light)]">
                  <Image src={seanLee} alt="Sean Lee" className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold">Sean Lee</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[.14em] text-[var(--primary-color)]">Advisor</p>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">02</span>
                </div>
              </article>

              <article className="group overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
                <div className="aspect-[5/4] overflow-hidden bg-[var(--surface-light)]">
                  <Image src={georgeFahmy} alt="George Fahmy" className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold">George Fahmy</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[.14em] text-[var(--primary-color)]">Volunteer</p>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">03</span>
                </div>
              </article>

              <article className="group overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
                <div className="aspect-[5/4] overflow-hidden bg-[var(--surface-light)]">
                  <Image src={rakshandaReddyBijjam} alt="Rakshanda Reddy Bijjam" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold">Rakshanda Reddy Bijjam</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[.14em] text-[var(--primary-color)]">Volunteer</p>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">04</span>
                </div>
              </article>

              <article className="group overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]">
                <div className="aspect-[5/4] overflow-hidden bg-[var(--surface-light)]">
                  <Image src={enkayNoelle} alt="Enkay Noelle" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold">Enkay Noelle</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[.14em] text-[var(--primary-color)]">Volunteer</p>
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">05</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
