"use client";

import { LuUsers, LuPackage } from "react-icons/lu";
import { CiCalendar, CiDeliveryTruck } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-16 border-r bg-gray-100 dark:bg-gray-500 p-4 flex flex-col lg:relative lg:block lg:w-64">
      <nav className="flex flex-col gap-2">
        <Link
          href="/pages/home"
          className={`flex items-center gap-3 rounded-md lg:px-3 px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
            pathname === "/pages/home"
              ? "bg-red-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-500"
          }`}
          prefetch={false}
        >
          <IoHomeOutline className="w-6 h-6" />
          <span className="ml-2 hidden lg:inline">Home</span>
        </Link>
        <Link
          href="/pages/donor"
          className={`flex items-center gap-3 rounded-md lg:px-3 px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
            pathname === "/pages/donor"
              ? "bg-red-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-500"
          }`}
          prefetch={false}
        >
          <LuUsers className="h-6 w-6" />
          <span className="ml-2 hidden lg:inline">Donor Management</span>
        </Link>
        <Link
          href="/pages/inventory"
          className={`flex items-center gap-3 rounded-md lg:px-3 px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
            pathname === "/pages/inventory"
              ? "bg-red-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-500"
          }`}
          prefetch={false}
        >
          <LuPackage className="h-6 w-6" />
          <span className="ml-2 hidden lg:inline">Inventory Management</span>
        </Link>
        <Link
          href="/pages/reservation"
          className={`flex items-center gap-3 rounded-md lg:px-3 px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
            pathname === "/pages/reservation"
              ? "bg-red-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-500"
          }`}
          prefetch={false}
        >
          <CiCalendar className="h-6 w-6" />
          <span className="ml-2 hidden lg:inline">Reservation Management</span>
        </Link>
        <Link
          href="/pages/supply"
          className={`flex items-center gap-3 rounded-md lg:px-3 px-2 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
            pathname === "/pages/supply"
              ? "bg-red-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-500"
          }`}
          prefetch={false}
        >
          <CiDeliveryTruck className="h-6 w-6" />
          <span className="ml-2 hidden lg:inline">Supply Management</span>
        </Link>
      </nav>
    </aside>
  );
}
