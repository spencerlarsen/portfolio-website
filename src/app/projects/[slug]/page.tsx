import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This will be replaced with actual project data loading
const getProjectBySlug = (slug: string) => {
  const projects: Record<string, any> = {
    'portfolio-website': {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
      longDescription: `This portfolio website showcases my engineering projects, research, and technical expertise. 
      Built with modern web technologies, it features a clean, minimalist design with optimal performance and SEO.
      
      The site is fully responsive, works on all devices, and includes a modular content management system 
      for easy updates without touching code.`,
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
      date: 'February 2026',
      githubUrl: 'https://github.com/spencerlarsen/portfolio-website',
      features: [
        'Server-side rendering with Next.js 14',
        'TypeScript for type safety',
        'Responsive design with Tailwind CSS',
        'MDX support for blog posts',
        'SEO optimized',
        'Fast page loads with static generation',
      ],
      technologies: [
        { name: 'Next.js 14', description: 'React framework for production' },
        { name: 'TypeScript', description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
        { name: 'Vercel', description: 'Deployment and hosting' },
      ],
    },
  };

  return projects[slug];
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
            <svg
              className="h-24 w-24 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <div className="prose prose-lg text-gray-700 whitespace-pre-line">
              {project.longDescription}
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.technologies.map((tech: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
