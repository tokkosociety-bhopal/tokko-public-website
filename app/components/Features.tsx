"use client";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Powerful Features Built for Modern Societies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Resident Management",
            "Visitor Tracking",
            "Maintenance Monitoring",
            "Security & Guard Logs",
            "Billing & Records",
            "Announcements & Notices",
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3">{feature}</h3>
              <p className="text-gray-600">
                Streamline your society operations efficiently with smart tools.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}