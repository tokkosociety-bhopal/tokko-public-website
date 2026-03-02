export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Smart Digital Society <br /> 
            <span className="text-blue-600">Management Platform</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Manage visitors, maintenance, billing and residents — 
            all from one powerful and secure dashboard.
          </p>

          <div className="flex gap-4">
            <a
              href="/admin"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300"
            >
              Society Admin Login
            </a>

            <a
              href="#features"
              className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Dashboard Preview</h3>
          <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-90"></div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Powerful Features Built for Modern Societies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Resident Management",
              "Visitor Tracking",
              "Maintenance Monitoring",
              "Security & Guard Logs",
              "Billing & Records",
              "Announcements & Notices"
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 bg-gray-50"
              >
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-gray-600">
                  Streamline your society operations efficiently with smart tools.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Secure. Reliable. Cloud-Based.
          </h2>
          <p className="text-lg opacity-90">
            Tokko Society runs on secure cloud infrastructure ensuring 
            encrypted data protection and high reliability.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Digitize Your Society?
        </h2>

        <a
          href="/admin"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl shadow-xl transition duration-300"
        >
          Get Started Today
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p>© {new Date().getFullYear()} Tokko Society. All rights reserved.</p>
      </footer>

    </main>
  );
}