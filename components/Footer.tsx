import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-muted">

        {/* LEFT */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground">Ssenkungu Mugemwa Denis</span>
        </p>

        {/* RIGHT */}
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-foreground transition"
          >
            GitHub
          </Link>

          <Link
            href="mailto:your@email.com"
            className="hover:text-foreground transition"
          >
            Email
          </Link>
        </div>

      </div>
    </footer>
  );
}