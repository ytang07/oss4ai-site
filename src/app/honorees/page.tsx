import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Honorees from "@/components/Honorees";
import { getHonorees } from "@/lib/honorees";

export const revalidate = 86400;
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Honorees | OSS4AI",
  description: "Celebrating the people moving open source AI forward.",
};

export default async function HonoreesPage() {
  const honorees = await getHonorees();

  return <div className="site-shell flex min-h-screen flex-col">
    <Header />
    <main className="flex-grow">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:px-10">
        <p className="eyebrow mb-5">Recognition</p>
        <h1 className="display-face max-w-4xl text-6xl font-bold sm:text-8xl">Meet the <span className="text-[var(--primary-color)]">honorees.</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">A living record of the people whose work, ideas, and generosity are shaping open source AI.</p>
      </section>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="section-rule" /></div>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10"><Honorees honorees={honorees} /></div>
    </main>
    <Footer />
  </div>;
}
