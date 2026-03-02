"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          How Tokko Society Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              step: "01",
              title: "Register Your Society",
              desc: "Create your society account and set up your admin dashboard within minutes."
            },
            {
              step: "02",
              title: "Add Residents & Guards",
              desc: "Easily onboard residents and assign guards with secure role-based access."
            },
            {
              step: "03",
              title: "Manage Visitors Digitally",
              desc: "Approve visitors, track entries, and maintain digital logs seamlessly."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-2xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}