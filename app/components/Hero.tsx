"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold mb-4 tracking-wide">
            Secure • Cloud-Based • Modern
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            The Future of <br />
            <span className="text-blue-600">
              Society Management
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Digitize visitor entry, resident management and security
            operations with one powerful dashboard.
          </p>

          <div className="flex gap-4">
            <a
              href="/enquiry"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-xl transition transform hover:-translate-y-1"
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

        {/* RIGHT DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Glass Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-5 border border-white/30">

            <img
              src="/admin-dashboard.webp"
              alt="Tokko Society Dashboard"
              className="rounded-2xl w-full object-cover"
            />

          </div>

          {/* Floating Shadow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/10 blur-2xl rounded-full"></div>

        </motion.div>

      </div>
    </section>
  );
}