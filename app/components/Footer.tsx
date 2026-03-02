export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <p>© {new Date().getFullYear()} Tokko Society. All rights reserved.</p>

        <div className="flex justify-center gap-6 text-sm">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy-policy" className="hover:text-white">Privacy</a>
          <a href="/terms-and-conditions" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}