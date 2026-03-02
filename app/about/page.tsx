export default function About() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-28 text-gray-800 leading-relaxed">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Tokko Society – About Us
        </h1>

        <p className="mb-8">
          Tokko Society is a smart and secure digital platform designed to simplify residential community management.
          We help housing societies transition from manual processes to a modern, technology-driven system.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Our Mission
        </h2>

        <p className="mb-8">
          Our mission is to make residential societies safer, more organized, and digitally efficient by replacing
          paperwork and manual tracking with secure, real-time technology solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          What We Provide
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Visitor Entry and Exit Management</li>
          <li>Real-Time Resident Approval System</li>
          <li>Guard Coordination Dashboard</li>
          <li>Digital Record Maintenance</li>
          <li>Secure Authentication powered by Firebase</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Why Tokko Society
        </h2>

        <p className="mb-8">
          We focus on improving security transparency, operational efficiency, and communication within residential communities.
          Our platform reduces paperwork, minimizes manual errors, and enhances real-time monitoring of visitor activities.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Our Core Focus
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Enhancing society security</li>
          <li>Reducing manual paperwork</li>
          <li>Improving operational transparency</li>
          <li>Providing real-time digital tracking</li>
        </ul>

        <div className="border-t pt-6 mt-10 text-sm text-gray-500">
          <p>Version 1.0.0</p>
          <p className="mt-4">
            Email: help.tokkosociety@gmail.com<br />
            Phone: +91 9009585458<br />
            Phone: +91 9516135516
          </p>
        </div>

      </section>
    </main>
  );
}