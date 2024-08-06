"use client";

import { LuUsers, LuPackage } from "react-icons/lu";
import { CiCalendar, CiDeliveryTruck } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Sidebar() {
  const pathname = usePathname(); // Use usePathname to get the current path

  return (
    <aside className="w-15 border-r bg-background p-4 flex flex-col lg:relative lg:block lg:w-65">
      <nav className="flex flex-col gap-2">
        <Link
          href="/pages/home"
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === "/pages/home"
              ? "bg-red-500 text-white" // Highlight with red background and white text
              : "hover:bg-muted hover:text-foreground"
          }`}
          prefetch={false}
        >
          <IoHomeOutline className="h-5 w-5" />
          <span className="ml-2 hidden lg:inline">Home</span>
        </Link>
        <Link
          href="/pages/donor"
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === "/pages/donor"
              ? "bg-red-500 text-white" // Highlight with red background and white text
              : "hover:bg-muted hover:text-foreground"
          }`}
          prefetch={false}
        >
          <LuUsers className="h-5 w-5" />
          <span className="ml-2 hidden lg:inline">Donor Management</span>
        </Link>
        <Link
          href="/pages/inventory"
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === "/pages/inventory"
              ? "bg-red-500 text-white" // Highlight with red background and white text
              : "hover:bg-muted hover:text-foreground"
          }`}
          prefetch={false}
        >
          <LuPackage className="h-5 w-5" />
          <span className="ml-2 hidden lg:inline">Inventory Management</span>
        </Link>
        <Link
          href="/pages/reservation"
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === "/pages/reservation"
              ? "bg-red-500 text-white" // Highlight with red background and white text
              : "hover:bg-muted hover:text-foreground"
          }`}
          prefetch={false}
        >
          <CiCalendar className="h-5 w-5" />
          <span className="ml-2 hidden lg:inline">Reservation Management</span>
        </Link>
        <Link
          href="/pages/supply"
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === "/pages/supply"
              ? "bg-red-500 text-white" // Highlight with red background and white text
              : "hover:bg-muted hover:text-foreground"
          }`}
          prefetch={false}
        >
          <CiDeliveryTruck className="h-5 w-5" />
          <span className="ml-2 hidden lg:inline">Supply Management</span>
        </Link>
      </nav>
    </aside>
  );
}
