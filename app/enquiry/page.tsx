"use client";

import { useState } from "react";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Start New Society Enquiry
        </h1>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
          >
            <input
              type="text"
              placeholder="Society Name"
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              placeholder="City"
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              placeholder="Number of Units"
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              placeholder="Contact Person Name"
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-full p-3 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Submit Enquiry
            </button>
          </form>
        ) : (
          <div className="text-center bg-green-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-green-700">
              Thank you! We will contact you soon.
            </h2>
          </div>
        )}

      </div>
    </main>
  );
}