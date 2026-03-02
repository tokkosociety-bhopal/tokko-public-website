import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="text-center py-24 bg-white shadow">
        <h1 className="text-4xl font-bold">Tokko Society</h1>
        <p className="mt-4 text-lg text-gray-600">
          Smart Digital Society Management System
        </p>

        <div className="mt-8 space-x-4">
          <a
            href="/admin"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Society Admin Login
          </a>

          <a
            href="#privacy"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100"
          >
            Privacy Policy
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 text-center">
        <h2 className="text-2xl font-semibold">About Tokko Society</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Tokko Society provides complete visitor management, maintenance tracking,
          announcements, billing, and secure admin controls for housing societies.
        </p>
      </section>

      {/* PRIVACY POLICY */}
      <section id="privacy" className="py-20 bg-white text-center">
        <h2 className="text-2xl font-semibold">Privacy Policy</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          We collect minimal necessary data for authentication and society
          management. We do not sell personal data. All information is securely
          stored using Firebase infrastructure.
        </p>
      </section>

      {/* TERMS */}
      <section id="terms" className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Terms & Conditions</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          By using Tokko Society services, users agree to comply with society
          management policies and digital usage guidelines.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-4 text-gray-600">
          Email: support@tokkosociety.com
        </p>
      </section>

    </main>
  );
}
