export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">
        Tokko Society – Privacy Policy
      </h1>

      <p className="mb-6">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6">
        Tokko Society is a society management application designed for
        residential communities in India. This Privacy Policy explains how we
        collect, use, and protect user information.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Information We Collect
      </h2>

      <h3 className="font-semibold mt-4">Account Information</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Name</li>
        <li>Email address</li>
        <li>Society / Unit details</li>
        <li>User role (Resident / Guard / Admin)</li>
      </ul>

      <h3 className="font-semibold mt-4">Visitor Information</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Visitor name</li>
        <li>Visitor phone number</li>
        <li>Purpose of visit</li>
        <li>Vehicle number (if provided)</li>
        <li>Visitor photo</li>
        <li>Entry & exit timestamps</li>
      </ul>

      <h3 className="font-semibold mt-4">Device Data</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>Device information</li>
        <li>App version</li>
        <li>Crash logs</li>
        <li>Firebase authentication data</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. Permissions We Use
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Internet access</li>
        <li>Camera access (visitor photo capture)</li>
        <li>Notification permissions</li>
        <li>Media access (if required)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. How We Use Information
      </h2>
      <p className="mb-6">
        Data is used for visitor management, approvals, security coordination,
        notices, and system improvements. We do not sell personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Data Sharing
      </h2>
      <p className="mb-6">
        Information is shared only within the same registered society and with
        Firebase (Google) services for authentication and database management.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        5. Data Security
      </h2>
      <p className="mb-6">
        Data is securely stored using Firebase infrastructure with role-based access control.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        6. Account Deletion
      </h2>
      <p className="mb-6">
        Account deletion must be requested through the Society Administrator.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        7. Third-Party Services
      </h2>
      <p className="mb-6">
        We use Firebase Authentication, Cloud Firestore, and Firebase Storage.
        We do not display third-party advertisements.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        8. Contact Us
      </h2>
      <p>
        Email: support@tokkosociety.com
      </p>
    </main>
  );
}