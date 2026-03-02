"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="bg-white text-gray-800">

      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about Tokko Society? We’re here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* LEFT SIDE INFO */}
            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  support@tokkosociety.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday – Saturday <br />
                  10:00 AM – 6:00 PM (IST)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-3xl shadow-xl space-y-6"
            >

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                placeholder="Society Name (Optional)"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </motion.form>

          </div>

        </div>
      </section>

    </main>
  );
}