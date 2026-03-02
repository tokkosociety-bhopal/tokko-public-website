"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold">
            Trusted by Modern Housing Societies
          </span>

          <h1 className="text-5xl font-extrabold mt-4 leading-tight">
            All-in-One Society <br />
            <span className="text-blue-600">
              Management Software
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Manage visitors, residents, billing, security and notices —
            from one powerful cloud dashboard.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/enquiry"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition"
            >
              Register Your Society
            </a>

            <a
              href="https://admin.tokkosociety.com"
              className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
            >
              Admin Login
            </a>
          </div>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
          <img
            src="/dashboard-preview.png"
            alt="Dashboard"
            className="rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}