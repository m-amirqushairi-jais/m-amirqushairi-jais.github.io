export default function Resume() {
  return (
    <main>
      <section className="container mx-auto px-5 py-20 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Muhammad Amir Qushairi Jais
          </h1>
          <p className="text-xl text-gray-700 mb-2">Lead Server Engineer</p>
          <p className="text-gray-600">Johor, Malaysia</p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <a href="https://github.com/m-amirqushairi-jais" className="text-gray-600 hover:text-gray-900">GitHub</a>
            <span className="text-gray-400">•</span>
            <a href="https://linkedin.com/in/muhammad-amir-qushairi-jais" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
            <span className="text-gray-400">•</span>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">Email</a>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-black pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lead Server Engineer with 6+ years of experience in cloud computing, server architecture, 
            and full-stack development. Specialized in building scalable, secure solutions for gaming 
            environments. Expert in DevOps practices, Kubernetes, and modern cloud infrastructure.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-black pb-2">
            Experience
          </h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Lead Server Engineer</h3>
                  <p className="text-gray-700">Deluxe Games Sdn Bhd</p>
                </div>
                <span className="text-gray-600 text-sm">May 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Architected scalable server-side solutions for high-traffic gaming environments</li>
                <li>Built automation tools for maintenance, data migration, and encryption</li>
                <li>Led DevOps initiatives with Docker, Kubernetes, and CI/CD pipelines</li>
                <li>Administered AWS cloud infrastructure with cost optimization best practices</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Server Engineer</h3>
                  <p className="text-gray-700">Deluxe Games Sdn Bhd</p>
                </div>
                <span className="text-gray-600 text-sm">Aug 2021 - Apr 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Designed and implemented server-side systems for scalable applications</li>
                <li>Developed RESTful APIs and WebSocket services</li>
                <li>Managed databases and cloud deployments on AWS and Azure</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Client Engineer</h3>
                  <p className="text-gray-700">Deluxe Games Sdn Bhd</p>
                </div>
                <span className="text-gray-600 text-sm">May 2019 - Jul 2021</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Transformed design concepts into high-performing games using Unity</li>
                <li>Optimized game networking using DOTS technology</li>
                <li>Developed advanced testing tools for QA processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-black pb-2">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Server Engineering:</h3>
              <p className="text-gray-700">C#, Python, Node.js, Java, Go</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Cloud & DevOps:</h3>
              <p className="text-gray-700">AWS, Azure, Docker, Kubernetes, Terraform, Jenkins</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Frontend:</h3>
              <p className="text-gray-700">React, Angular, Vue.js, Next.js</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Databases:</h3>
              <p className="text-gray-700">SQL, PostgreSQL, MongoDB, Redis</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-black pb-2">
            Certifications
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Certified Kubernetes Administrator (CKA)</strong> - The Linux Foundation (2025)</li>
            <li>• <strong>Certified DevOps Practitioner</strong> - CCSD Council (2024)</li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-black pb-2">
            Education
          </h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Diploma in Information Technology</h3>
              <p className="text-gray-700">Kolej Poly-Tech MARA Batu Pahat</p>
              <p className="text-gray-600 text-sm">CGPA: 3.83 (Dean&apos;s List)</p>
            </div>
            <span className="text-gray-600 text-sm">2012 - 2015</span>
          </div>
        </section>

        {/* Download Button */}
        <div className="mt-12 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
            Download PDF Resume
          </button>
        </div>
      </section>
    </main>
  );
}