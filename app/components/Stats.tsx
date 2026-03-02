export default function Stats() {
  return (
    <section className="py-16 bg-white border-y">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-4xl font-bold text-blue-600">50+</h2>
          <p className="text-gray-600 mt-2">Societies</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">2000+</h2>
          <p className="text-gray-600 mt-2">Residents</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">5000+</h2>
          <p className="text-gray-600 mt-2">Visitors Managed</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">99.9%</h2>
          <p className="text-gray-600 mt-2">System Uptime</p>
        </div>

      </div>
    </section>
  );
}