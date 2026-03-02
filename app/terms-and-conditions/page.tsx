export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <p className="mb-6">
        By using Tokko Society services, you agree to comply with these
        terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. Use of Services
      </h2>
      <p className="mb-6">
        Tokko Society provides digital tools for housing society management.
        Users must use the platform lawfully and responsibly.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        2. User Responsibilities
      </h2>
      <p className="mb-6">
        Users are responsible for maintaining the confidentiality of their
        login credentials and ensuring accurate data submission.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        3. Limitation of Liability
      </h2>
      <p className="mb-6">
        Tokko Society shall not be liable for indirect or incidental damages
        arising from use of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. Changes to Terms
      </h2>
      <p className="mb-6">
        We reserve the right to modify these terms at any time.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}