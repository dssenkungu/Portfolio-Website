import Link from "next/link";

export default function AboutPage() {
    
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* HEADER */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold">
            About Me
          </h1>

          <p className="mt-6 text-lg text-muted leading-relaxed">
            I am a full-stack software developer with a strong focus on building
            scalable, real-world systems across finance, NGOs, education, and
            enterprise operations. I specialize in turning complex workflows
            into clean, usable digital solutions.
          </p>
        </section>

        {/* BACKGROUND */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Background</h2>

          <p className="mt-4 text-muted leading-relaxed">
            I hold a Bachelor’s degree in Computer Science and have been working
            across both structured environments and freelance/consultancy roles.
            My experience includes building systems for NGOs, financial
            institutions, and organizations requiring robust data handling and
            reporting.
          </p>

          <p className="mt-4 text-muted leading-relaxed">
            Over time, I have developed a strong ability to understand business
            needs and translate them into reliable, maintainable software.
          </p>
        </section>

        {/* WHAT I DO */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">What I Do</h2>

          <ul className="mt-4 space-y-3 text-muted">
            <li>• Build full-stack web applications (React, Next.js, ASP.NET)</li>
            <li>• Design and implement financial systems (SACCOs, loan management)</li>
            <li>• Develop HR, payroll, and MIS systems</li>
            <li>• Create dashboards and reporting tools for decision-making</li>
            <li>• Work on NGO and development-focused platforms</li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Tech Stack</h2>

          <p className="mt-4 text-muted leading-relaxed">
            I work across both frontend and backend technologies:
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-2 text-muted">
            <li>• React / Next.js</li>
            <li>• TypeScript / JavaScript</li>
            <li>• ASP.NET Core (C#)</li>
            <li>• Node.js</li>
            <li>• Prisma ORM</li>
            <li>• MSSQL / PostgreSQL</li>
          </ul>
        </section>

        {/* APPROACH */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">My Approach</h2>

          <p className="mt-4 text-muted leading-relaxed">
            I focus on building systems that are not just functional, but also
            practical in real-world environments. This means prioritizing
            reliability, clarity, and usability — especially for systems used in
            operations, finance, and fieldwork.
          </p>

          <p className="mt-4 text-muted leading-relaxed">
            I aim to deliver solutions that simplify processes, improve
            accountability, and support better decision-making.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-semibold">Let’s Work Together</h2>

          <p className="mt-4 text-muted">
            I’m open to freelance work, consulting, and full-time opportunities
            where I can contribute to meaningful systems and impactful projects.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
                href="/contact"
                className="px-5 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
            >
                Contact Me
            </Link>

            <Link
                href="/work"
                className="px-5 py-2 rounded-md border border-border text-sm hover:bg-muted transition"
            >
                View My Work
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}