export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container mx-auto px-5">
        <div className="py-20 md:py-32">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6 text-gray-900">
            Muhammad Amir Qushairi Jais
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Lead Server Engineer at Deluxe Games
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Building scalable server architectures and cloud solutions for modern gaming environments. 
            Specializing in DevOps, Kubernetes, and full-stack development.
          </p>
          <div className="flex gap-4">
            <a 
              href="/portfolio"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              View Portfolio
            </a>
            <a 
              href="/resume"
              className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-50 transition"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="border-t bg-gray-50">
        <div className="container mx-auto px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Lead Server Engineer with 6+ years of experience building robust server architectures 
              that power immersive gaming experiences. Expert in cloud computing, DevOps practices, 
              and full-stack development.
            </p>
            <a href="/resume" className="text-black font-semibold hover:underline">
              Read full resume →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t">
        <div className="container mx-auto px-5 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Interested in collaborating or discussing opportunities? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:your.email@example.com"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition text-center"
              >
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-amir-qushairi-jais"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-50 transition text-center"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}