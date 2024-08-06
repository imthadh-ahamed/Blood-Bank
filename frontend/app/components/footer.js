import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row h-auto md:h-14 items-center justify-between border-t bg-background px-6 py-4 shadow-sm">
      <div className="text-sm text-muted-foreground mb-4 md:mb-0">
        &copy; 2024 Blood Bank. All rights reserved.
      </div>
      <nav className="flex flex-col md:flex-row items-center gap-4">
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
