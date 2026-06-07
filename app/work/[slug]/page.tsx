import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import BackButton from "@/components/BackButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const projects: Record<string, any> = {
    "ticketing-system": {
      title: "Football Ticketing & QR Access System",
      description:
        "A digital platform for football clubs to sell tickets, manage seasonal passes, and validate stadium entry using QR codes.",
      overview:
        "Built to replace manual ticketing with a secure digital system enabling online ticket sales, QR verification at stadium gates, and mobile fan access.",
      stack: "React.js • ASP.NET Core • Entity Framework • MSSQL",
      features: [
        "Online match and season ticket sales",
        "QR code generation and validation",
        "Mobile ticket wallet for fans",
        "Club admin dashboard for ticket management",
        "Real-time entry validation system",
      ],
      improvements: [
        "Mobile Money & card payment integration",
        "Seat selection system",
        "Offline QR validation mode",
      ],
      images: [
        // {
        //   src: "/projects/ticketing/dashboard.png",
        //   alt: "Ticketing dashboard",
        // },
        // {
        //   src: "/projects/ticketing/qr-scan.png",
        //   alt: "QR code scanner at stadium gate",
        // },
        // {
        //   src: "/projects/ticketing/mobile.png",
        //   alt: "Mobile ticket view",
        // },
      ],
    },

    "hr-system": {
      title: "Human Resource & Payroll System",
      description:
        "Enterprise HR system for managing employees, payroll, statutory deductions, leave, and performance tracking.",
      overview:
        "Automates HR operations including payroll processing, PAYE/NSSF calculations, employee records, and reporting workflows.",
      stack: "React.js • ASP.NET Core • Entity Framework • MSSQL",
      features: [
        "Employee onboarding and management",
        "Automated PAYE & NSSF calculations",
        "Payroll processing and payslips",
        "Leave management system",
        "Performance tracking and reporting",
      ],
      improvements: [
        "Biometric attendance integration",
        "Employee self-service portal",
        "Advanced HR analytics dashboard",
      ],
      images: [
        // {
        //   src: "/projects/hr/dashboard.png",
        //   alt: "HR dashboard",
        // },
        // {
        //   src: "/projects/hr/payroll.png",
        //   alt: "Payroll processing screen",
        // },
        // {
        //   src: "/projects/hr/employees.png",
        //   alt: "Employee management screen",
        // },
      ],
    },

    "sacco-system": {
      title: "SACCO Management System",
      description:
        "Financial system for managing savings, loans, shares, and cooperative member accounts.",
      overview:
        "Digitizes SACCO operations including member contributions, loan processing, repayments, and financial reporting.",
      stack: "C# • DevExpress • MSSQL | Next.js • Prisma • PostgreSQL",
      features: [
        "Member savings and shares management",
        "Loan application and approval system",
        "Guarantor-based lending workflow",
        "Repayment tracking",
        "Financial reporting and audits",
      ],
      improvements: [
        "Mobile money integration",
        "SMS notifications",
        "Credit scoring system",
      ],
      images: [
        {
          src: "/images/projects/sacco/dashboard.png",
          alt: "SACCO dashboard",
        },
        {
          src: "/images/projects/sacco/cs.png",
          alt: "Loan management screen",
        },
        {
          src: "/images/projects/sacco/loans.png",
          alt: "Financial reports screen",
        },
        {
          src: "/images/projects/sacco/loans_schedule.png",
          alt: "Financial reports screen",
        },
      ],
    },

    "school-system": {
      title: "School & Higher Institution Management System",
      description:
        "Academic system for managing students, exams, grading, GPA/CGPA, transcripts, and institutional operations.",
      overview:
        "Digital transformation of academic workflows including grading, student records, and automated transcript generation.",
      stack: "ASP.NET Core • MSSQL",
      features: [
        "Student registration system",
        "Exam and grading management",
        "Automatic GPA & CGPA calculation",
        "Transcript generation",
        "Finance module for tuition tracking",
      ],
      improvements: [
        "Student online portal",
        "E-learning integration",
        "Automated graduation eligibility checks",
      ],
      images: [
        // {
        //   src: "/projects/school/results.png",
        //   alt: "Student results screen",
        // },
        // {
        //   src: "/projects/school/transcript.png",
        //   alt: "Transcript generation",
        // },
      ],
    },

    "competition-system": {
      title: "Football Competition Management System",
      description:
        "System for managing football leagues, fixtures, teams, and standings.",
      overview:
        "Centralized platform for managing football competitions from registration to league completion.",
      stack: "React.js • ASP.NET Core • PostgreSQL",
      features: [
        "Team registration",
        "Fixture scheduling",
        "League table automation",
        "Match result tracking",
      ],
      improvements: [
        "Live match updates",
        "Public standings portal",
        "Referee management system",
      ],
      images: [
        // {
        //   src: "/projects/competition/fixtures.png",
        //   alt: "Fixtures screen",
        // },
      ],
    },

    "ngo-system": {
      title: "NGO Program Management System",
      description:
        "Platform for managing NGO programs, beneficiaries, field operations, and reporting.",
      overview:
        "Designed to improve accountability and efficiency in NGO field operations and reporting.",
      stack: "Next.js • Prisma • PostgreSQL",
      features: [
        "Beneficiary tracking",
        "Field data collection",
        "Program monitoring dashboards",
        "Donor reporting system",
      ],
      improvements: [
        "Offline mobile data capture",
        "Geo-tagging support",
        "Automated impact reports",
      ],
      images: [
        {
          src: "/projects/ngo/dashboard.png",
          alt: "NGO dashboard",
        },
      ],
    },
  };

  const project = projects[slug];

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="mb-6">
          <BackButton />
        </div>

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-muted">
          {project.description}
        </p>

        {/* OVERVIEW */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 text-muted">{project.overview}</p>
        </section>

        {/* GALLERY */}
        {project.images?.length > 0 && (
          <ProjectGallery images={project.images} />
        )}

        {/* FEATURES */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="mt-3 space-y-2 text-muted">
            {project.features.map((f: string, i: number) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
        </section>

        {/* IMPROVEMENTS */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Possible Improvements</h2>
          <ul className="mt-3 space-y-2 text-muted">
            {project.improvements.map((i: string, idx: number) => (
              <li key={idx}>• {i}</li>
            ))}
          </ul>
        </section>

        {/* STACK */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <p className="mt-3 text-muted">{project.stack}</p>
        </section>

        <div className="mt-6">
          <BackButton />
        </div>

      </div>
    </main>
  );
}