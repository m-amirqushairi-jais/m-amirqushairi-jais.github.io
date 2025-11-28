export default function Portfolio() {
  const projects = [
    {
      slug: 'multiplayer-rpg',
      title: 'Multiplayer Action RPG',
      description: 'Unity-based multiplayer game with roguelike elements, featuring robust anti-cheat systems and server-side validation for secure gameplay.',
      tags: ['Unity', 'C#', 'Multiplayer', 'Anti-Cheat']
    },
    {
      slug: 'iap-validation',
      title: 'IAP Validation Server',
      description: 'Python FastAPI backend for validating in-app purchases across Apple App Store and Google Play Store with MongoDB integration.',
      tags: ['Python', 'FastAPI', 'MongoDB', 'Azure']
    },
    {
      slug: 'dev-infrastructure',
      title: 'Self-Hosted Dev Infrastructure',
      description: 'Comprehensive Azure-based development infrastructure with Gitea, PostgreSQL, MongoDB, Jenkins CI/CD, and SSL certificates.',
      tags: ['Azure', 'Docker', 'CI/CD', 'DevOps']
    }
  ];

  return (
    <main>
      <section className="container mx-auto px-5 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Portfolio</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          A selection of projects showcasing my expertise in server engineering, cloud infrastructure, and full-stack development.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map(project => (
            <a 
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition group"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black">
                {project.title} →
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}