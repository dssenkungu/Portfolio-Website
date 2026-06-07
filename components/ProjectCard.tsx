import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  highlights: string[];
  stack: string;
  slug: string;
};

export default function ProjectCard({
  title,
  description,
  highlights,
  stack,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <div
        className="
          p-6
          border border-border
          rounded-xl
          transition-all duration-200
          
          hover:bg-foreground/5
          hover:border-foreground/20
          group-hover:-translate-y-0.5
        "
      >
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="mt-2 text-muted">
          {description}
        </p>

        <div className="mt-4 text-sm text-muted space-y-1">
          {highlights.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted">
          Stack: {stack}
        </p>
      </div>
    </Link>
  );
}