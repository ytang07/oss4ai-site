import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms and Conditions | OSS4AI Professional Development",
  description: "Terms and conditions for the OSS4AI Professional Development membership.",
};

export default function ProfessionalDevelopmentTermsPage() {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <article className="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-10">
          <p className="eyebrow mb-6">OSS4AI Professional Development</p>
          <h1 className="display-face max-w-3xl text-6xl font-bold sm:text-8xl">Terms and <span className="text-[var(--primary-color)]">conditions.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">These terms explain what the Professional Development membership includes and what members are responsible for.</p>

          <div className="mt-16 space-y-10 text-base leading-8 text-[var(--muted)]">
            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">1. Membership access</h2>
              <p>Professional Development is a membership program. Your membership gives you access to the resources, communications, and opportunities that OSS4AI makes available to members during the applicable membership period. Membership is personal and may not be transferred without our written permission.</p>
            </section>

            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">2. Opportunities are not guaranteed</h2>
              <p>We may notify members about opportunities such as events, talks, courses, applications, reviews, discounts, consultations, or other professional development activities. Membership does not guarantee that any particular opportunity will be offered, remain available, be suitable for you, or result in acceptance, selection, employment, advancement, recognition, or any other outcome. Availability, eligibility, timing, and selection may vary and may be determined by OSS4AI or an independent third party.</p>
            </section>

            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">3. Your responsibilities</h2>
              <p>You are responsible for reviewing communications, meeting deadlines, completing applications and other required steps, attending scheduled activities, participating professionally, and completing any developmental tasks or preparation necessary to benefit from an opportunity. We are not responsible for a missed opportunity resulting from your failure to respond, attend, apply, prepare, or complete required tasks.</p>
            </section>

            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">4. Fees and 30-day money-back guarantee</h2>
              <p>Membership fees are stated at the time of purchase. If you are not satisfied with your membership, you may request a full refund within 30 days of your purchase by contacting <a href="mailto:yujian@oss4.ai" className="text-[var(--primary-color)] underline underline-offset-4">yujian@oss4.ai</a>. Refund requests should include the name and email address used for the purchase. Approved refunds will be returned to the original payment method. After the 30-day period, refunds are generally not available except where required by law or at our discretion.</p>
            </section>

            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">5. Acceptable conduct</h2>
              <p>You agree to provide accurate information, respect other participants and organizers, follow applicable event and community rules, and use membership materials and opportunities only for lawful purposes. We may suspend or end access if you engage in abusive, discriminatory, fraudulent, disruptive, or otherwise harmful conduct.</p>
            </section>

            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">6. Disclaimer</h2>
              <p>The program and its materials are provided on an “as available” basis. We do not promise that the program will be uninterrupted, error-free, or that participation will produce a particular professional result. You are responsible for deciding whether an opportunity or developmental activity is appropriate for your circumstances.</p>
            </section>

            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">7. Indemnification</h2>
              <p>To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless OSS4AI and its organizers, officers, directors, team members, partners, contributors, and agents from and against claims, liabilities, damages, losses, costs, and expenses, including reasonable attorneys’ fees, arising out of or related to your use of the program, your participation in an opportunity, your breach of these terms, or your violation of another person’s rights or applicable law.</p>
            </section>

            <section>
              <h2 className="display-face mb-3 text-3xl font-bold text-[var(--foreground)]">8. Changes and contact</h2>
              <p>We may update these terms when the program changes. The updated version will be posted on this page and will apply prospectively. Questions about these terms may be sent to <a href="mailto:yujian@oss4.ai" className="text-[var(--primary-color)] underline underline-offset-4">yujian@oss4.ai</a>.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
