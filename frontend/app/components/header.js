"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { LuDroplets } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-6 shadow-sm">
      <Link
        href="/pages/home"
        className="flex items-center gap-2 font-semibold"
        prefetch={false}
      >
        <LuDroplets className="h-6 w-6 text-red-700" />
        <span className="text-primary">Blood Bank</span>
      </Link>

      <nav className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center rounded-full border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-400"
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <FaUserCircle className="h-8 w-8 text-gray-700" />
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <ul
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li className="block px-4 py-2 text-sm font-semibold">
                John Doe
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
