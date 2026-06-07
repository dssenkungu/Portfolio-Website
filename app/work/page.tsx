import ProjectCard from "@/components/ProjectCard";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* HEADER */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Selected Systems I’ve Worked On
          </h1>

          <p className="mt-4 text-muted max-w-3xl">
            A curated selection of enterprise and institutional systems I have
            built over the years, including financial platforms, HR systems,
            education software, and sports management applications.
          </p>

          <p className="mt-4 text-sm text-muted max-w-3xl">
            Note: These are selected projects, not a full list. My work also includes
            various websites built using WordPress, PHP, HTML/CSS, Tailwind,
            and modern Next.js applications.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="space-y-8 md:space-y-10">

            <ProjectCard
                title="SACCO Management System"
                description="A cooperative financial system for managing savings, loans, shares, and member financial operations."
                highlights={[
                  "Loan processing & repayment tracking",
                  "Member savings & shares management",
                  "Guarantor-based loan system",
                  "Financial reports & audit tracking",
                ]}
                stack="Version 1: C# • DevExpress • MSSQL | Version 2: Next.js • Prisma • PostgreSQL"
                slug="sacco-system"
            />

            <ProjectCard
                title="Football Ticketing & QR Access System"
                description="A ticketing platform for football clubs to sell match tickets, seasonal passes, and validate stadium entry using QR codes."
                highlights={[
                  "Match & seasonal ticket sales",
                  "QR code validation at entry gates",
                  "Mobile-friendly fan access",
                  "Club client dashboards for ticket management",
                ]}
                stack="React.js (Frontend) • ASP.NET Core • Entity Framework • MSSQL"
                slug="ticketing-system"
            />

            <ProjectCard
                title="Human Resource & Payroll Management System"
                description="A full HRIS system for managing employee records, payroll processing, statutory deductions, and performance tracking."
                highlights={[
                  "Employee lifecycle management",
                  "Automated PAYE & NSSF calculations",
                  "Leave management workflows",
                  "Payroll & reporting system",
                ]}
                stack="React.js (Frontend) • ASP.NET Core • Entity Framework • MSSQL"
                slug="hr-system"
            />

            <ProjectCard
                title="School & Higher Institution Management System"
                description="Academic system for managing students, examinations, results, GPA/CGPA calculations, transcripts, and certificates."
                highlights={[
                  "Student registration & academic records",
                  "Automated GPA & CGPA computation",
                  "Transcript generation",
                  "Examination & grading system",
                  "Institution finance module",
                ]}
                stack="ASP.NET Core • MSSQL"
                slug="school-system"
            />

            <ProjectCard
                title="Football Competition Management System"
                description="System for managing football leagues, teams, fixtures, and competition standings."
                highlights={[
                  "Team registration & management",
                  "Fixture scheduling system",
                  "Automated league standings",
                  "Competition lifecycle management",
                ]}
                stack="React.js • ASP.NET Core • Entity Framework • PostgreSQL"
                slug="competition-system"
            />

            <ProjectCard
                title="NGO Program Management System"
                description="A digital platform for managing NGO programs, beneficiaries, field operations, and reporting."
                highlights={[
                  "Beneficiary tracking system",
                  "Field data collection workflows",
                  "Program reporting dashboards",
                  "Donor reporting tools",
                ]}
                stack="Next.js • Prisma • PostgreSQL"
                slug="ngo-system"
            />

        </section>

        {/* CLOSING */}
        <section className="mt-20 border-t border-border pt-10">
          <h2 className="text-xl font-semibold">
            Building systems that support real operations
          </h2>

          <p className="mt-2 text-muted max-w-3xl">
            My experience spans enterprise systems, financial platforms, education software,
            sports management tools, and modern web applications. I also have experience
            building websites using WordPress, PHP, HTML/CSS, Tailwind CSS, and modern React/Next.js stacks.
          </p>
        </section>

      </div>
    </main>
  );
}