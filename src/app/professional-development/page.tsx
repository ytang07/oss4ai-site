import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Academy | OSS4AI",
  description: "Grow your career and your contribution to open source AI with the OSS4AI Academy.",
};

const tiers = [
  {
    number: "01",
    name: "Launch",
    experience: "Typically 2–6 years of experience",
    price: "$1,500",
    accent: "var(--primary-color)",
    benefits: [
      "Submit talks to any OSS4AI event",
      "Submit papers to our exclusive journal",
      "Access to all OSS4AI first-party courses",
    ],
  },
  {
    number: "02",
    name: "Fly",
    experience: "Typically 4–12 years of experience",
    price: "$3,000",
    accent: "var(--secondary-color)",
    benefits: [
      "Everything in Launch",
      "Expedited review",
      "Be considered for judging, peer review, and committee positions",
      "Access to OSS4AI partner discounts",
    ],
  },
  {
    number: "03",
    name: "Soar",
    experience: "Typically 10+ years of experience",
    price: "$4,500",
    accent: "var(--accent-color)",
    benefits: [
      "Everything in Fly",
      "Exclusive membership benefits",
      "Free applications to all award programs",
    ],
  },
];

export default function AcademyPage() {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-10">
          <div className="grid gap-10 md:grid-cols-[1.08fr_.92fr] md:items-end">
            <div>
              <p className="eyebrow mb-6">OSS4AI Academy</p>
              <h1 className="display-face max-w-4xl text-6xl font-bold sm:text-8xl">Make your next <span className="text-[var(--primary-color)]">move.</span></h1>
            </div>
            <p className="max-w-md text-lg leading-8 text-[var(--muted)]">A professional development program for people shaping the future of technology — at every stage of the journey.</p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="section-rule" /></div>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow mb-4">Choose your altitude</p>
              <h2 className="display-face text-4xl font-bold sm:text-6xl">Find your <span className="text-[var(--secondary-color)]">tier.</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">Each level is designed to match where you are—and help you get where you want to go.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.name} className="flex min-h-[29rem] flex-col rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8" style={{ borderTopColor: tier.accent }}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[.15em]" style={{ color: tier.accent }}>{tier.number}</span>
                  <span className="font-mono text-xs text-[var(--muted)]">/ YEAR</span>
                </div>
                <h3 className="display-face mt-12 text-5xl font-bold">{tier.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-[var(--muted)]">{tier.experience}</p>
                <div className="mt-7 border-t border-[var(--line)] pt-6">
                  <p className="font-mono text-3xl font-bold" style={{ color: tier.accent }}>{tier.price}<span className="ml-1 text-sm font-normal text-[var(--muted)]">/ year</span></p>
                </div>
                <ul className="mt-7 space-y-4 text-sm leading-6 text-[var(--foreground)]">
                  {tier.benefits.map((benefit) => <li key={benefit} className="flex gap-3"><span style={{ color: tier.accent }} aria-hidden="true">✦</span><span>{benefit}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-light)] p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow mb-4" style={{ color: "var(--accent-color)" }}>Need a little lift?</p>
              <h2 className="display-face text-4xl font-bold sm:text-5xl">Booster</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">One hour career-boosting consult. Bring a question, a decision, or a next step you want to make clearer.</p>
            </div>
            <div className="md:text-right">
              <p className="font-mono text-3xl font-bold text-[var(--accent-color)]">$250<span className="ml-1 text-sm font-normal text-[var(--muted)]">/ each</span></p>
              <p className="mt-2 text-xs text-[var(--muted)]">Maximum one per month</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 text-center sm:px-8 lg:px-10">
          <p className="eyebrow mb-5">Ready when you are</p>
          <h2 className="display-face mx-auto max-w-3xl text-5xl font-bold sm:text-7xl">Your next chapter starts <span className="text-[var(--primary-color)]">here.</span></h2>
          <a href="mailto:yujian@oss4.ai?subject=Professional%20development%20program" className="button-primary mt-9">Talk to OSS4AI <span aria-hidden="true">↗</span></a>
          <p className="mt-6 text-sm text-[var(--muted)]"><Link href="/professional-development/terms-and-conditions" className="underline underline-offset-4 hover:text-[var(--foreground)]">Terms and Conditions</Link></p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
