import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* HERO SECTION */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ssenkungu Mugemwa Denis
          </h1>

          <p className="mt-4 text-xl text-muted">
            Full-Stack Developer • UX Engineer • Systems Builder
          </p>

          <p className="mt-6 text-muted leading-relaxed max-w-2xl">
            I build enterprise-grade web systems including SACCO platforms, NGO
            management tools, dashboards, and data-driven applications. My focus
            is on turning complex operational workflows into simple, usable digital systems.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/work"
              className="px-6 py-3 rounded-lg bg-foreground text-background hover:opacity-90 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition"
            >
              Hire / Contact Me
            </Link>
          </div>
        </section>

        {/* VALUE SUMMARY */}
        <section className="mb-20">
          <h2 className="text-lg font-semibold mb-6">What I specialize in</h2>

          <div className="space-y-3 text-muted">
            <p>
              • Building <span className="text-foreground">full-stack systems</span> using React, Next.js, and backend APIs
            </p>
            <p>
              • Designing <span className="text-foreground">SACCO & financial platforms</span> (loans, savings, member systems)
            </p>
            <p>
              • Developing <span className="text-foreground">NGO & development tools</span> for reporting and field operations
            </p>
            <p>
              • Creating <span className="text-foreground">dashboards & MIS systems</span> for decision-making
            </p>
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section className="mb-20">
          <h2 className="text-lg font-semibold mb-6">Focus areas</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="p-5 border border-border rounded-lg hover:bg-muted/10 transition">
              <p className="font-medium text-foreground">Full-Stack Web Applications</p>
              <p className="text-sm text-muted mt-1">
                End-to-end systems with React, Next.js, and backend integrations.
              </p>
            </div>

            <div className="p-5 border border-border rounded-lg hover:bg-muted/10 transition">
              <p className="font-medium text-foreground">SACCO & Financial Systems</p>
              <p className="text-sm text-muted mt-1">
                Loan tracking, savings management, member accounts, and reporting tools.
              </p>
            </div>

            <div className="p-5 border border-border rounded-lg hover:bg-muted/10 transition">
              <p className="font-medium text-foreground">NGO & Development Platforms</p>
              <p className="text-sm text-muted mt-1">
                Data collection, program monitoring, and humanitarian workflows.
              </p>
            </div>

            <div className="p-5 border border-border rounded-lg hover:bg-muted/10 transition">
              <p className="font-medium text-foreground">Dashboards & MIS Systems</p>
              <p className="text-sm text-muted mt-1">
                Analytics and operational dashboards for decision support.
              </p>
            </div>

            <div className="p-5 border border-border rounded-lg hover:bg-muted/10 transition">
              <p className="font-medium text-foreground">Mobile-Integrated Solutions</p>
              <p className="text-sm text-muted mt-1">
                Web systems optimized for mobile access and field usage.
              </p>
            </div>

            <div className="p-5 border border-border rounded-lg hover:bg-muted/10 transition">
              <p className="font-medium text-foreground">UX for Complex Systems</p>
              <p className="text-sm text-muted mt-1">
                Simplifying complex workflows into usable enterprise interfaces.
              </p>
            </div>

          </div>
        </section>

        {/* CLOSING SECTION */}
        <section className="border-t border-border pt-10">
          <h2 className="text-lg font-semibold mb-4">
            Let’s build something useful
          </h2>

          <p className="text-muted max-w-2xl">
            I’m currently open to freelance work, consultancy roles, and
            full-time opportunities in systems development, especially in
            fintech, NGO, and enterprise platforms.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-foreground text-background hover:opacity-90 transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}