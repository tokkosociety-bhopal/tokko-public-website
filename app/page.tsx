"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800">

      {/* HERO SECTION */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
            >
              Society Admin Login
            </a>

            <a
              href="#features"
              className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition duration-300 hover:scale-105"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative group">

          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-gray-200 transition-all duration-500 group-hover:scale-105">

            <div className="h-80 rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center text-gray-500 text-lg font-medium">
              Dashboard Preview
            </div>

          </div>
        </div>

      </motion.section>


      {/* FEATURES SECTION */}
      <motion.section
        id="features"
        className="bg-white py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
                className="p-8 rounded-2xl bg-gray-50 shadow-md 
                           hover:shadow-2xl 
                           transition-all duration-500 
                           hover:-translate-y-3 
                           hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-gray-600">
                  Streamline your society operations efficiently with smart tools.
                </p>
              </div>
            ))}

          </div>

        </div>
      </motion.section>


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


      {/* CTA */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Digitize Your Society?
        </h2>

        <a
          href="/admin"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl shadow-xl transition duration-300 hover:scale-105"
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