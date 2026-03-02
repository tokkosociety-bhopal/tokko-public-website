"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          What Societies Say
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              quote: "Tokko Society completely simplified our visitor management process.",
              author: "RWA President, Bhopal"
            },
            {
              quote: "The dashboard is easy to use and makes security tracking effortless.",
              author: "Society Admin, Indore"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6">
                “{item.quote}”
              </p>
              <p className="font-semibold text-blue-600">
                – {item.author}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}