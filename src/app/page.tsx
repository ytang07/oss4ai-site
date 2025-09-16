import Header from "@/components/Header"; // Assuming Header is in src/components/Header.tsx
import Footer from "@/components/Footer"; // Assuming Footer is in src/components/Footer.tsx
import EventImages from '@/components/EventImages'; // Import the new component
import PartnerLogos from '@/components/PartnerLogos'; // Import the PartnerLogos component

export default function Home() {
  return (
    <div className="font-sans antialiased flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
          {/* Removed background overlay to ensure global background is visible */}
          <div className="relative z-10 text-[var(--foreground)] px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Open Source for AI</h1>
            <p className="text-xl md:text-2xl mb-8">
              Join our community and shape the future of AI together.
            </p>
            <a
              href="https://lu.ma/oss4ai"
            className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-[var(--foreground)] font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
          >
              Explore Events
          </a>
        </div>
      </section>

        {/* Event Images Section */}
        <EventImages />

      {/* Partner Logos Section */}
      <PartnerLogos />

        {/* Event Calendar Link */}
        <section className="py-16 px-4 md:px-8 bg-[var(--background)] text-center">
          <h2 className="text-4xl font-bold mb-8">View Full Event Calendar</h2>
          <a
          href="https://lu.ma/oss4ai"
          className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-[var(--foreground)] font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Explore Events
        </a>
        </section>

      </main>
      <Footer />
    </div>
  );
}
