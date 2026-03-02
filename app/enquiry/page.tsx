"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function EnquiryPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await addDoc(collection(db, "inquiries"), {
        societyName: formData.get("societyName"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        city: formData.get("city"),
        status: "new",
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-3xl p-10 border">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register Your Society
        </h1>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Thank you! Our team will contact you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="societyName"
            placeholder="Society Name"
            required
            className="w-full border px-4 py-3 rounded-xl"
          />

          <input
            name="name"
            placeholder="Contact Person Name"
            required
            className="w-full border px-4 py-3 rounded-xl"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border px-4 py-3 rounded-xl"
          />

          <input
            name="city"
            placeholder="City"
            required
            className="w-full border px-4 py-3 rounded-xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

        </form>
      </div>
    </section>
  );
}