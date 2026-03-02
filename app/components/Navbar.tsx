"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`transition pb-1 ${
          isActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:opacity-80 transition"
        >
          Tokko Society
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/privacy-policy", "Privacy")}
          {navLink("/terms-and-conditions", "Terms")}
          {navLink("/contact", "Contact")}
        </nav>

        {/* Admin Login */}
        <a
          href="https://admin.tokkosociety.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
        >
          Admin Login
        </a>
      </div>
    </header>
  );
}