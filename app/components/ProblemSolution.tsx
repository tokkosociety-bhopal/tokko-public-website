"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* PROBLEM SECTION */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-red-600">
              Traditional Society Management is Broken
            </h2>

            <p className="text-gray-600 mb-6">
              Many housing societies still rely on manual registers and
              unstructured processes, leading to inefficiencies and
              security risks.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>❌ Manual visitor entry registers</li>
              <li>❌ No real-time approval system</li>
              <li>❌ Security gaps and human errors</li>
              <li>❌ Difficult record tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100 overflow-hidden">
  <img
    src="/manual-system.png"
    alt="Manual Society Management"
    className="rounded-2xl w-full h-80 object-cover"
  />
</div>
        </motion.div>

        {/* SOLUTION SECTION */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="order-2 md:order-1 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="h-64 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 font-semibold">
              Digital Dashboard Illustration
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-green-600">
              Tokko Makes It Smart & Secure
            </h2>

            <p className="text-gray-600 mb-6">
              Tokko Society digitizes your entire workflow,
              ensuring security, transparency, and operational efficiency.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Instant visitor approvals</li>
              <li>✔ Real-time entry & exit tracking</li>
              <li>✔ Role-based access control</li>
              <li>✔ Secure cloud storage</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}