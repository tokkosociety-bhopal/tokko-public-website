export default function Terms() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-28 text-gray-800 leading-relaxed">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Tokko Society – Terms & Conditions
        </h1>

        <p className="text-gray-500 mb-10">
          Effective Date: 01 January 2026
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="mb-8">
          By accessing or using the Tokko Society application, you agree to comply 
          with these Terms and Conditions. If you do not agree, you must discontinue use immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          2. Purpose of the Application
        </h2>
        <p className="mb-8">
          Tokko Society is a digital platform designed to manage visitor entry and exit, 
          enable resident approvals, improve security coordination, and maintain digital society records.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          3. User Roles & Access
        </h2>
        <p className="mb-8">
          The platform supports Residents, Guards, and Society Administrators. 
          Access to features is strictly role-based. Users must not attempt to bypass 
          or manipulate access controls.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          4. User Responsibilities
        </h2>
        <p className="mb-4">
          Users agree to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Provide accurate and complete information</li>
          <li>Maintain confidentiality of login credentials</li>
          <li>Use the application only for lawful purposes</li>
          <li>Not misuse emergency features</li>
          <li>Not attempt to hack, disrupt, or manipulate the platform</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          5. Visitor Management Disclaimer
        </h2>
        <p className="mb-8">
          Visitor approval decisions are solely made by residents. Tokko Society 
          only provides a digital interface for managing records and is not responsible 
          for decisions made by users.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          6. Emergency Feature
        </h2>
        <p className="mb-8">
          Emergency numbers (100, 101, 102) provided in the application are direct-call 
          shortcuts. Tokko Society does not control or guarantee response times or service quality.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          7. Account Suspension & Termination
        </h2>
        <p className="mb-8">
          Accounts may be suspended or permanently terminated if users violate these 
          Terms, provide false information, or misuse the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          8. Data & Privacy
        </h2>
        <p className="mb-8">
          Tokko Society collects necessary user information solely for society management 
          purposes. We do not sell user data and implement reasonable security measures 
          to protect it.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          9. Limitation of Liability
        </h2>
        <p className="mb-8">
          Tokko Society shall not be liable for disputes between residents and visitors, 
          incorrect data entries, service interruptions, unauthorized access caused by 
          compromised credentials, or indirect damages.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          10. Modifications to Terms
        </h2>
        <p className="mb-8">
          We reserve the right to update these Terms at any time without prior notice. 
          Continued use of the application constitutes acceptance of updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          11. Governing Law
        </h2>
        <p className="mb-8">
          These Terms and Conditions are governed by the laws of India.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          12. Contact Information
        </h2>
        <p className="mb-2">Email: tokkosociety@gmail.com</p>
        <p className="mb-2">Phone: +91 9009585458</p>
        <p>Phone: +91 9516135516</p>

        <p className="text-sm text-gray-500 mt-12">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

      </section>
    </main>
  );
}