import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-14 items-center justify-between border-t bg-background px-6 shadow-sm">
      <div className="text-sm text-muted-foreground">
        &copy; 2024 Blood Bank. All rights reserved.
      </div>
      <nav className="flex items-center gap-4">
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-foreground"
          prefetch={false}
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-foreground"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-sm font-medium transition-colors hover:text-foreground"
          prefetch={false}
        >
          Contact Us
        </Link>
      </nav>
    </footer>
  );
}
