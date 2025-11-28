import { notFound } from 'next/navigation';

// Project data
const projects = {
  'multiplayer-rpg': {
    title: 'Multiplayer Action RPG',
    subtitle: 'Unity-based multiplayer game with roguelike elements',
    tags: ['Unity', 'C#', 'Multiplayer', 'Anti-Cheat'],
    overview: 'A fast-paced multiplayer action RPG featuring procedurally generated dungeons, real-time combat, and robust anti-cheat systems. Built to support 50-100+ concurrent players with sub-50ms latency.',
    challenge: 'Creating a secure, scalable multiplayer experience that prevents cheating while maintaining low latency and supporting dynamic player counts.',
    solution: 'Implemented server-side validation for all critical game actions, event-driven anti-cheat checkpoints, and optimized networking using Unity DOTS.',
    techStack: ['Unity', 'C#', 'DOTS', 'WebSocket', 'MongoDB', 'AWS'],
    features: [
      'Server-side damage validation and anti-cheat',
      'Event-driven checkpoint system',
      'Real-time multiplayer with <50ms latency',
      'Procedurally generated dungeons',
      'Scalable server architecture'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/projects/rpg-screenshot1.jpg',
      '/projects/rpg-screenshot2.jpg'
    ],
    codeExample: `// Server-side damage validation
public class DamageValidator {
    private readonly ICheckpointService _checkpoints;
    
    public async Task<bool> ValidateDamage(
        Player attacker, 
        Player target, 
        int damageValue
    ) {
        // Get last checkpoint
        var checkpoint = await _checkpoints.GetLatest(attacker.Id);
        
        // Calculate expected damage range
        var expectedDamage = CalculateExpectedDamage(
            checkpoint.Stats, 
            target.Defense
        );
        
        // Validate damage is within acceptable range
        if (damageValue > expectedDamage * 1.1) {
            await LogSuspiciousActivity(attacker.Id);
            return false;
        }
        
        return true;
    }
}`,
    infrastructure: `┌─────────────────┐
│   CloudFlare    │  ← CDN & DDoS Protection
└────────┬────────┘
         │
┌────────▼────────┐
│  Load Balancer  │  ← AWS Application Load Balancer
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼──┐ ┌───▼──┐
│ App  │ │ App  │  ← Kubernetes Pods (Auto-scaling)
│ Pod 1│ │ Pod 2│
└───┬──┘ └───┬──┘
    │         │
    └────┬────┘
         │
┌────────▼────────┐
│   MongoDB       │  ← Player data, game state
│   Cluster       │
└─────────────────┘`,
    liveDemo: 'https://example.com/demo',
    githubLink: null,
  },
  'iap-validation': {
    title: 'IAP Validation Server',
    subtitle: 'Secure in-app purchase validation service',
    tags: ['Python', 'FastAPI', 'MongoDB', 'Azure'],
    overview: 'Production-grade microservice for validating in-app purchases from Apple App Store and Google Play Store, preventing fraudulent transactions and ensuring secure payment processing.',
    challenge: 'Need to validate purchase receipts from multiple platforms while handling high traffic, preventing replay attacks, and maintaining sub-100ms response times.',
    solution: 'Built FastAPI-based microservice with receipt caching, MongoDB for transaction logging, and Azure Functions for scalability.',
    techStack: ['Python', 'FastAPI', 'MongoDB', 'Azure Functions', 'Redis'],
    features: [
      'Apple App Store receipt validation',
      'Google Play Store receipt validation',
      'Receipt caching with Redis',
      'Transaction logging and analytics',
      'Replay attack prevention',
      'Auto-scaling with Azure Functions'
    ],
    video: null,
    images: ['/projects/iap-dashboard.jpg'],
    codeExample: `# Apple IAP Receipt Validation
from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()

@app.post("/validate/apple")
async def validate_apple_receipt(receipt_data: str, user_id: str):
    """Validate Apple IAP receipt"""
    
    # Check cache first
    cached = await redis.get(f"receipt:{receipt_data}")
    if cached:
        return {"status": "valid", "cached": True}
    
    # Validate with Apple
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://buy.itunes.apple.com/verifyReceipt",
            json={"receipt-data": receipt_data}
        )
        
        data = response.json()
        
        if data["status"] != 0:
            raise HTTPException(400, "Invalid receipt")
        
        # Store in MongoDB
        await db.transactions.insert_one({
            "user_id": user_id,
            "receipt": receipt_data,
            "product_id": data["receipt"]["product_id"],
            "validated_at": datetime.utcnow()
        })
        
        # Cache result
        await redis.setex(
            f"receipt:{receipt_data}", 
            3600, 
            "valid"
        )
        
        return {"status": "valid", "product": data["receipt"]}`,
    infrastructure: `┌─────────────────┐
│   API Gateway   │  ← Azure API Management
└────────┬────────┘
         │
┌────────▼────────┐
│ Azure Functions │  ← Auto-scaling serverless
│   (Python)      │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼──┐ ┌───▼──┐
│Redis │ │ Mongo│  ← Cache & Database
│Cache │ │  DB  │
└──────┘ └──────┘`,
    liveDemo: null,
    githubLink: null,
  },
  'dev-infrastructure': {
    title: 'Self-Hosted Dev Infrastructure',
    subtitle: 'Complete Azure-based development environment',
    tags: ['Azure', 'Docker', 'CI/CD', 'DevOps'],
    overview: 'Comprehensive self-hosted development infrastructure on Azure, featuring Git hosting, databases, CI/CD pipelines, and automated backups.',
    challenge: 'Setting up a cost-effective, secure, and scalable development infrastructure that rivals commercial solutions.',
    solution: 'Leveraged Azure VMs, Docker containers, nginx reverse proxy, and automated backup scripts to create a professional dev environment.',
    techStack: ['Azure', 'Docker', 'Nginx', 'Gitea', 'Jenkins', 'PostgreSQL', 'MongoDB', 'Let\'s Encrypt'],
    features: [
      'Self-hosted Git repositories (Gitea)',
      'CI/CD pipelines (Jenkins)',
      'PostgreSQL with pgAdmin',
      'MongoDB with Mongo Express',
      'SSL certificates (Let\'s Encrypt)',
      'Automated backup system',
      'Nginx reverse proxy'
    ],
    video: null,
    images: ['/projects/infra-dashboard.jpg'],
    codeExample: `# Docker Compose for Development Infrastructure
version: '3.8'

services:
  gitea:
    image: gitea/gitea:latest
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
    volumes:
      - ./gitea:/data
    ports:
      - "3000:3000"
      - "222:22"
    networks:
      - dev-network

  jenkins:
    image: jenkins/jenkins:lts
    container_name: jenkins
    volumes:
      - ./jenkins:/var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - "8080:8080"
    networks:
      - dev-network

  postgres:
    image: postgres:14
    container_name: postgres
    environment:
      - POSTGRES_PASSWORD=\${DB_PASSWORD}
    volumes:
      - ./postgres:/var/lib/postgresql/data
    networks:
      - dev-network

  mongodb:
    image: mongo:5
    container_name: mongodb
    volumes:
      - ./mongo:/data/db
    networks:
      - dev-network

  nginx:
    image: nginx:alpine
    container_name: nginx
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    ports:
      - "80:80"
      - "443:443"
    networks:
      - dev-network

networks:
  dev-network:
    driver: bridge`,
    infrastructure: `┌─────────────────────────────────────┐
│        Azure VM (Ubuntu 24)         │
│                                     │
│  ┌────────────────────────────────┐ │
│  │   Nginx Reverse Proxy          │ │
│  │   (SSL Termination)            │ │
│  └──────────┬─────────────────────┘ │
│             │                        │
│   ┌─────────┼─────────┬─────────┐   │
│   │         │         │         │   │
│ ┌─▼──┐  ┌──▼─┐  ┌───▼┐  ┌────▼┐  │
│ │Git │  │CI/ │  │ DB │  │Mongo│  │
│ │Tea │  │ CD │  │SQL │  │ DB  │  │
│ └────┘  └────┘  └────┘  └─────┘  │
│  (Docker Containers)               │
└─────────────────────────────────────┘`,
    liveDemo: null,
    githubLink: 'https://github.com/m-amirqushairi-jais/dev-infrastructure',
  }
};

// Make the component async and await params
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params Promise
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Header */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-5 py-16">
          <a href="/portfolio" className="text-gray-600 hover:text-gray-900 mb-4 inline-block">
            ← Back to Portfolio
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Demo */}
      {project.video && (
        <section className="container mx-auto px-5 py-12">
          <div className="aspect-video max-w-4xl mx-auto">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={project.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="container mx-auto px-5 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{project.overview}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Challenge</h3>
            <p className="text-gray-700">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Solution</h3>
            <p className="text-gray-700">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-gray-50">
        <div className="container mx-auto px-5 py-12 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-black mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-5 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map(tech => (
            <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Code Example */}
      {project.codeExample && (
        <section className="border-t bg-gray-50">
          <div className="container mx-auto px-5 py-12 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Code Example</h2>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <code>{project.codeExample}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Infrastructure */}
      {project.infrastructure && (
        <section className="container mx-auto px-5 py-12 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Infrastructure</h2>
          <pre className="bg-gray-100 text-gray-900 p-6 rounded-lg overflow-x-auto font-mono text-sm">
            {project.infrastructure}
          </pre>
        </section>
      )}

      {/* Links */}
      <section className="border-t">
        <div className="container mx-auto px-5 py-12 max-w-4xl">
          <div className="flex gap-4">
            {project.liveDemo && (
              <a 
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                View Live Demo
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-50 transition"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// CRITICAL: For static export, we must generate all possible paths
export async function generateStaticParams() {
  return [
    { slug: 'multiplayer-rpg' },
    { slug: 'iap-validation' },
    { slug: 'dev-infrastructure' },
  ];
}