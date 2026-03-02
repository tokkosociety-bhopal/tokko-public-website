export default function Navbar() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          Tokko Society
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="/privacy-policy" className="hover:text-blue-600 transition">
            Privacy
          </a>
          <a
            href="/terms-and-conditions"
            className="hover:text-blue-600 transition"
          >
            Terms
          </a>

          <a href="/contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        <a
          href="https://admin.tokkosociety.com"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
        >
          Admin Login
        </a>
      </div>
    </header>
  );
}