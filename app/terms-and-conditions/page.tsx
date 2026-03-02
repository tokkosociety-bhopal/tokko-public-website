export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">
        Tokko Society – Terms of Service
      </h1>

      <p className="mb-6">
        By accessing or using Tokko Society, you agree to comply with and be
        bound by the following Terms & Conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Acceptance of Terms
      </h2>
      <p className="mb-6">
        By using Tokko Society, you confirm that you accept these Terms and agree to abide by them.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. User Roles
      </h2>
      <p className="mb-6">
        The application supports different user roles including Residents,
        Guards, and Society Administrators. Each role has controlled access
        based on assigned permissions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. Proper Use
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Enter false or misleading visitor information</li>
        <li>Misuse emergency features</li>
        <li>Access unauthorized data</li>
        <li>Harass other residents</li>
        <li>Use the app for illegal purposes</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Visitor Management
      </h2>
      <p className="mb-6">
        Visitor approval decisions are made solely by residents. Tokko Society
        only provides a digital platform for managing entry records.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        5. Emergency Feature
      </h2>
      <p className="mb-6">
        Emergency numbers (100, 101, 102) are direct-call shortcuts. Tokko
        Society is not responsible for response time or service quality of
        emergency providers.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        6. Account Responsibility
      </h2>
      <p className="mb-6">
        Users are responsible for maintaining the confidentiality of login
        credentials and ensuring accurate personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        7. Limitation of Liability
      </h2>
      <p className="mb-6">
        Tokko Society shall not be responsible for disputes between residents
        and visitors, actions taken by guards or residents, or incorrect data
        entered by users.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        8. Account Termination
      </h2>
      <p className="mb-6">
        Society Administrators may deactivate accounts. Violations of rules may
        result in restricted access.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        9. Modifications
      </h2>
      <p className="mb-6">
        We reserve the right to modify features and terms without prior notice.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        10. Governing Law
      </h2>
      <p className="mb-6">
        These Terms operate under the laws and regulations of India.
      </p>

      <p className="text-sm text-gray-500 mt-10">
        Last Updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}