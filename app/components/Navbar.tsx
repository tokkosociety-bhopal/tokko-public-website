import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo → Always Goes Home */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:opacity-80 transition"
        >
          Tokko Society
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/privacy-policy" className="hover:text-blue-600 transition">
            Privacy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="hover:text-blue-600 transition"
          >
            Terms
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Admin Login Button */}
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