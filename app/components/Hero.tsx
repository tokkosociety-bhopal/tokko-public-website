"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold mb-4">
            Trusted by Modern Housing Societies
          </p>

          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            All-in-One Society <br />
            <span className="text-blue-600">
              Management Software
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Manage visitors, residents, billing, security and notices —
            all from one powerful cloud dashboard.
          </p>

          <div className="flex gap-4">
            <a
              href="/enquiry"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300"
            >
              Register Your Society
            </a>

            <a
              href="https://admin.tokkosociety.com"
              className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition duration-300"
            >
              Admin Login
            </a>
          </div>
        </motion.div>

        {/* RIGHT DASHBOARD MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Laptop Frame Effect */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100 overflow-hidden hover:scale-105 transform transition duration-700">

            <img
              src="/admin-dashboard.png"
              alt="Tokko Society Admin Dashboard"
              className="rounded-2xl w-full object-cover"
            />

          </div>

          {/* Subtle Floating Shadow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black opacity-10 blur-2xl rounded-full"></div>

        </motion.div>

      </div>
    </section>
  );
}