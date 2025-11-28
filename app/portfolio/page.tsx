export default function Portfolio() {
  const projects = [
    {
      slug: 'changokushi-heroes',
      title: 'Changokushi! Heroes',
      description: 'Fantasy Shooting bishoujo RPG featuring NFT character ownership and marketplace. Multi-region mobile game with Japanese voice acting and blockchain integration.',
      tags: ['Unity', 'Mobile Game', 'RPG', 'NFT', 'Blockchain'],
      backgroundImage: '/projects/changokushi-gameplay.jpg', // Add background
      darkOverlay: true // Text will be white on dark background
    },
    {
      slug: 'multiplayer-rpg',
      title: 'Multiplayer Action RPG',
      description: 'Unity-based multiplayer game with roguelike elements, featuring robust anti-cheat systems and server-side validation for secure gameplay.',
      tags: ['Unity', 'C#', 'Multiplayer', 'Anti-Cheat'],
      backgroundImage: null, // No background - use default style
      darkOverlay: false
    },
    {
      slug: 'iap-validation',
      title: 'IAP Validation Server',
      description: 'Python FastAPI backend for validating in-app purchases across Apple App Store and Google Play Store with MongoDB integration.',
      tags: ['Python', 'FastAPI', 'MongoDB', 'Azure'],
      backgroundImage: null,
      darkOverlay: false
    },
    {
      slug: 'dev-infrastructure',
      title: 'Self-Hosted Dev Infrastructure',
      description: 'Comprehensive Azure-based development infrastructure with Gitea, PostgreSQL, MongoDB, Jenkins CI/CD, and SSL certificates.',
      tags: ['Azure', 'Docker', 'CI/CD', 'DevOps'],
      backgroundImage: null,
      darkOverlay: false
    }
  ];

  return (
    <main>
      <section className="container mx-auto px-5 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Portfolio</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          A selection of projects showcasing my expertise in server engineering, cloud infrastructure, mobile game development, and full-stack development.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map(project => (
            <a 
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className={`
                relative overflow-hidden rounded-lg transition group
                ${project.backgroundImage 
                  ? 'border-2 border-gray-300 hover:border-gray-400' 
                  : 'border border-gray-200 hover:shadow-lg hover:border-gray-300'
                }
              `}
              style={{
                minHeight: project.backgroundImage ? '400px' : 'auto'
              }}
            >
              {/* Background Image */}
              {project.backgroundImage && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.backgroundImage})`,
                    }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                </>
              )}

              {/* Content */}
              <div className={`
                relative p-6 flex flex-col justify-end
                ${project.backgroundImage ? 'min-h-[400px]' : ''}
              `}>
                <h3 className={`
                  text-2xl font-bold mb-3 group-hover:underline
                  ${project.darkOverlay ? 'text-white' : 'text-gray-900 group-hover:text-black'}
                `}>
                  {project.title} →
                </h3>
                <p className={`
                  mb-4 leading-relaxed
                  ${project.darkOverlay ? 'text-gray-100' : 'text-gray-700'}
                `}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`
                        px-3 py-1 rounded text-sm font-medium
                        ${project.darkOverlay 
                          ? 'bg-white/20 text-white backdrop-blur-sm' 
                          : 'bg-gray-100 text-gray-800'
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}