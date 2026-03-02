"use client";

export default function DetailedFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* VISITOR MANAGEMENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="bg-gray-100 rounded-3xl shadow-xl p-6">
            <img
              src="/visitor-preview.png"
              alt="Visitor Management"
              className="rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Smart Visitor Management
            </h2>

            <p className="text-gray-600 mb-6">
              Digitally manage and track all visitor entries with
              real-time approvals and secure logging.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Approve / Reject visitors instantly</li>
              <li>✔ Guard-side photo capture</li>
              <li>✔ Entry & exit timestamp tracking</li>
              <li>✔ Complete visitor history</li>
            </ul>
          </div>

        </div>

        {/* RESIDENT MANAGEMENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">
              Resident & Staff Management
            </h2>

            <p className="text-gray-600 mb-6">
              Organize units, residents, and private staff with
              role-based access and secure permissions.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Unit-wise resident profiles</li>
              <li>✔ My Staff feature</li>
              <li>✔ Pre-approved entries</li>
              <li>✔ Role-based access control</li>
            </ul>
          </div>

          <div className="order-1 md:order-2 bg-gray-100 rounded-3xl shadow-xl p-6">
            <img
              src="/resident-preview.png"
              alt="Resident Management"
              className="rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}