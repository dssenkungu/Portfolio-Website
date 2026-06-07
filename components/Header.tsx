import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO / NAME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/profile.jpg" // put in /public
            alt="Denis"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="font-semibold text-lg">Denis</span>
        </Link>

        {/* NAV */}
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-muted">
            <Link href="/" className="hover:text-foreground transition">Home</Link>
            <Link href="/work" className="hover:text-foreground transition">Work</Link>
            <Link href="/about" className="hover:text-foreground transition">About</Link>
            <Link href="/contact" className="hover:text-foreground transition">Contact</Link>
          </nav>

          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}