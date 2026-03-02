"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Is my society data secure?",
      answer: "Yes. Tokko Society uses secure cloud infrastructure with role-based access control."
    },
    {
      question: "Is OTP login required?",
      answer: "Currently, login is via secure email and password authentication."
    },
    {
      question: "Can multiple societies use Tokko?",
      answer: "Yes. The platform supports multiple societies with isolated data management."
    },
    {
      question: "How can I delete my account?",
      answer: "Account deletion requests must be initiated by the Society Administrator."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-6 border-b border-gray-200 pb-4 cursor-pointer"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <h3 className="text-lg font-semibold">
              {faq.question}
            </h3>

            {activeIndex === index && (
              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}