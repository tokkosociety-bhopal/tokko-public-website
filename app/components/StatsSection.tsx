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
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}