"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "I got into super high quality opportunities that I would never have otherwise found, this was a great opportunity for me to showcase my AI expertise as a judge at hackathons and demo days among many infrastructure level companies. They also provided documentation that I used for my EB1A approval.",
    attribution: "Technical Lead, NVIDIA",
  },
  {
    quote:
      "These are some of the highest quality hackathons I've seen. The hackers are real industry professionals and they're there to truly build something. It was a super fun experience to judge among not just other tech professionals but VC partners and founders.",
    attribution: "Head of Product, TinyFish",
  },
  {
    quote:
      "Maybe one of the most valuable investments I've made in my professional career. I got more opportunities through this program than I expected and I was able to save time looking for them online. I was able to speak at a huge industry conference, judge multiple hackathons, and get involved in multiple other reviews. The publicity really helped me showcase my expertise that I've built over years of work.",
    attribution: "Senior Engineering Manager, Oracle",
  },
];

export default function AcademyTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(rotation);
  }, []);

  const testimonial = testimonials[activeIndex];

  const showTestimonial = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10" aria-labelledby="academy-testimonials-heading">
      <div className="grid gap-8 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-light)] p-7 sm:p-10 md:grid-cols-[.7fr_1.3fr] md:gap-14">
        <div>
          <p className="eyebrow mb-4" style={{ color: "var(--accent-color)" }}>Member stories</p>
          <h2 id="academy-testimonials-heading" className="display-face max-w-xs text-4xl font-bold sm:text-5xl">Built for your <span className="text-[var(--accent-color)]">next move.</span></h2>
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => showTestimonial(activeIndex - 1)}
              className="button-ghost px-4"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => showTestimonial(activeIndex + 1)}
              className="button-ghost px-4"
              aria-label="Next testimonial"
            >
              →
            </button>
            <span className="ml-2 font-mono text-xs text-[var(--muted)]" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <figure key={activeIndex} className="flex flex-col justify-center border-t border-[var(--line)] pt-8 md:border-l md:border-t-0 md:pl-14 md:pt-0">
          <blockquote className="text-lg italic leading-7 text-[var(--foreground)] sm:text-xl sm:leading-8">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-8 font-mono text-xs font-bold uppercase tracking-[.12em] text-[var(--primary-color)]">— {testimonial.attribution}</figcaption>
        </figure>
      </div>
    </section>
  );
}
