export default function ServicePage() {
  return (
    <section
        id="services"
        className="flex flex-col items-center justify-center text-center h-screen bg-gray-900"
        >
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <ul className="space-y-3 text-lg">
            <li>📸 Wedding Photography</li>
            <li>🎥 Event Videography</li>
            <li>👨‍👩‍👧 Portrait Shoots</li>
            <li>🏞️ Outdoor Photography</li>
        </ul>
    </section>
  );
}