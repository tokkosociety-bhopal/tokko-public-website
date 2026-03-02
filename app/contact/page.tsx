"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    society: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contact_leads"), {
        ...formData,
        status: "new",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        society: "",
        message: "",
      });

    } catch (error) {
      console.error("Error saving lead:", error);
    }

    setLoading(false);
  };

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          {!success ? (
            <>
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

                {/* LEFT SIDE */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">
                      help.tokkosociety@gmail.com
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

                {/* FORM */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 p-8 rounded-3xl shadow-xl space-y-6"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <input
                    type="text"
                    name="society"
                    value={formData.society}
                    onChange={handleChange}
                    placeholder="Society Name (Optional)"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>

              </div>
            </>
          ) : (
            /* SUCCESS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <div className="bg-green-50 border border-green-200 p-12 rounded-3xl shadow-xl text-center max-w-xl mx-auto">
                <div className="text-5xl mb-6">✅</div>
                <h2 className="text-3xl font-bold mb-4 text-green-700">
                  Thank You for Contacting Us!
                </h2>
                <p className="text-gray-700 text-lg">
                  We have received your request successfully.
                </p>
                <p className="text-gray-700 text-lg mt-2">
                  Our team will contact you within 24 hours.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </section>
    </main>
  );
}