export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            VOXELARIUM
          </h1>
          <div className="flex gap-8">
            <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">About</a>
            <a href="#projects" className="text-slate-300 hover:text-amber-400 transition-colors">Projects</a>
            <a href="#skills" className="text-slate-300 hover:text-amber-400 transition-colors">Skills</a>
            <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-bold text-white">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Amir</span>
            </h2>
            <p className="text-2xl text-slate-300">
              Fullstack Developer & Game Developer
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Founder of VOXELARIUM - Specializing in Unity game development, 
              backend systems, and full-stack web applications
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-300">
              <p className="text-lg">
                I&apos;m a passionate fullstack developer and the founder of <span className="text-amber-400 font-semibold">VOXELARIUM</span>, 
                an IT company focused on game development and 3D creation services.
              </p>
              <p className="text-lg">
                With extensive experience in Unity, C# backend systems, and modern web technologies, 
                I build robust, scalable solutions from concept to deployment.
              </p>
              <p className="text-lg">
                Currently developing a multiplayer action RPG with roguelike elements, 
                implementing advanced anti-cheat systems and server-side validation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-8 rounded-lg border border-amber-500/30">
              <h4 className="text-2xl font-bold text-amber-400 mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">▹</span> Founder of VOXELARIUM
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">▹</span> Unity & C# Expert
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">▹</span> Azure Cloud Infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">▹</span> Full-Stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">▹</span> Location: Johor Bahru, Malaysia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-amber-500/50 transition-all">
              <h4 className="text-2xl font-bold text-amber-400 mb-3">Multiplayer Action RPG</h4>
              <p className="text-slate-300 mb-4">
                Unity-based multiplayer game with roguelike elements, featuring robust anti-cheat systems 
                and server-side validation for secure gameplay.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Unity</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">C#</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Multiplayer</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Anti-Cheat</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-amber-500/50 transition-all">
              <h4 className="text-2xl font-bold text-amber-400 mb-3">IAP Validation Server</h4>
              <p className="text-slate-300 mb-4">
                Python FastAPI backend for validating in-app purchases across Apple App Store and 
                Google Play Store with MongoDB integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Azure</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-amber-500/50 transition-all">
              <h4 className="text-2xl font-bold text-amber-400 mb-3">Self-Hosted Dev Infrastructure</h4>
              <p className="text-slate-300 mb-4">
                Comprehensive Azure-based development infrastructure with Gitea, PostgreSQL, MongoDB, 
                Jenkins CI/CD, and SSL certificates.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Azure</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">CI/CD</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">DevOps</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-amber-500/50 transition-all">
              <h4 className="text-2xl font-bold text-amber-400 mb-3">VOXELARIUM Branding</h4>
              <p className="text-slate-300 mb-4">
                Professional company branding featuring sophisticated 3D isometric voxel sanctuary 
                structures with premium navy and gold color scheme.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">Branding</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">3D Design</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Game Development */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Game Development</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Unity Engine</li>
                <li>• C# Programming</li>
                <li>• Multiplayer Systems</li>
                <li>• Anti-Cheat Implementation</li>
                <li>• Roguelike Design</li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Backend Development</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Python / FastAPI</li>
                <li>• Node.js</li>
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
                <li>• RESTful APIs</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Cloud & DevOps</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Azure Cloud</li>
                <li>• Docker</li>
                <li>• Jenkins CI/CD</li>
                <li>• Git / Gitea</li>
                <li>• Azure Functions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h3>
          <p className="text-xl text-slate-300 mb-12">
            Interested in collaborating or have a project in mind? 
            I&apos;m always open to discussing new opportunities.
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/m-amirqushairi-jais" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all"
            >
              GitHub
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2024 VOXELARIUM. Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}