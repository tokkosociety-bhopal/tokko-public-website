export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6">
        Tokko Society ("we", "our", "us") values your privacy. This Privacy Policy
        explains how we collect, use, and protect your information when you use
        our website and mobile application.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-6">
        We may collect personal information including name, phone number,
        email address, society details, and usage data necessary for society
        management and authentication.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. How We Use Information
      </h2>
      <p className="mb-6">
        Information is used to manage society operations, provide secure
        authentication, send notifications, and improve our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. Data Security
      </h2>
      <p className="mb-6">
        We use secure cloud infrastructure and encryption practices to protect
        user data. We do not sell or share personal information with third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Third-Party Services
      </h2>
      <p className="mb-6">
        Our platform may use trusted services such as Firebase for
        authentication and data storage.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        5. Contact Us
      </h2>
      <p>
        If you have questions regarding this Privacy Policy,
        contact us at: support@tokkosociety.com
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}