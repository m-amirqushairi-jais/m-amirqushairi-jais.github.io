export default function Portfolio() {
  return (
    <main>
      <section className="container mx-auto px-5 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Portfolio</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Project 1 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Multiplayer Action RPG</h3>
            <p className="text-gray-700 mb-4">
              Unity-based multiplayer game with roguelike elements, featuring robust anti-cheat 
              systems and server-side validation for secure gameplay.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Unity</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">C#</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Multiplayer</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Anti-Cheat</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">IAP Validation Server</h3>
            <p className="text-gray-700 mb-4">
              Python FastAPI backend for validating in-app purchases across Apple App Store and 
              Google Play Store with MongoDB integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Python</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">FastAPI</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Azure</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Self-Hosted Dev Infrastructure</h3>
            <p className="text-gray-700 mb-4">
              Comprehensive Azure-based development infrastructure with Gitea, PostgreSQL, 
              MongoDB, Jenkins CI/CD, and SSL certificates.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Azure</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Docker</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">CI/CD</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">DevOps</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Cloud Gaming Infrastructure</h3>
            <p className="text-gray-700 mb-4">
              Scalable server architecture supporting 50-100+ concurrent players with sub-50ms 
              latency using AWS, Kubernetes, and custom networking solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">AWS</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Kubernetes</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">Networking</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}