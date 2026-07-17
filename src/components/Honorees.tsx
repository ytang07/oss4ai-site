import type { Honoree } from "@/lib/honorees";

const sections = [
  { key: "STAR", title: "STARs", subtitle: "Standout Technology Achievement Recognition" },
  { key: "Pioneer", title: "Pioneers", subtitle: "Technologists moving the field forward through significant contribution" },
  { key: "Catalyst", title: "Catalysts", subtitle: "Early career professionals pushing boundaries of innovation" },
];

export default function Honorees({ honorees }: { honorees: Honoree[] }) {
  return <div className="space-y-24">
    {sections.map((section) => {
      const entries = honorees.filter((honoree) => honoree.recognition === section.key);
      return <section key={section.key}>
        <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-5">
          <div>
            <h2 className="display-face text-4xl font-bold sm:text-6xl">{section.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">{section.subtitle}</p>
          </div>
          <span className="font-mono text-xs text-[var(--muted)]">{String(entries.length).padStart(2, "0")}</span>
        </div>
        {entries.length === 0 ? <p className="text-[var(--muted)]">No honorees listed yet.</p> :
          <div className="grid gap-4 md:grid-cols-2">
            {entries.map((honoree) => <article key={honoree.id} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <h3 className="text-2xl font-bold">{honoree.name}</h3>
              {honoree.fields.length > 0 && <dl className="mt-5 space-y-3 border-t border-[var(--line)] pt-4">
                {honoree.fields.map((field) => <div key={field.label} className="flex flex-col gap-1 text-sm sm:flex-row sm:justify-between sm:gap-5">
                  <dt className="font-mono text-[.65rem] uppercase tracking-[.12em] text-[var(--muted)]">{field.label}</dt>
                  <dd className="text-right text-[var(--foreground)]">{field.url ? <a href={field.url} target="_blank" rel="noreferrer" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)]">{field.value} ↗</a> : field.value}</dd>
                </div>)}
              </dl>}
            </article>)}
          </div>}
      </section>;
    })}
  </div>;
}
