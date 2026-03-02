"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "25+", label: "Societies Onboarded" },
  { number: "2,500+", label: "Residents Managed" },
  { number: "15,000+", label: "Visitors Logged" },
  { number: "99.9%", label: "System Uptime" },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-3">
              {stat.number}
            </h3>

            <p className="text-gray-600 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}