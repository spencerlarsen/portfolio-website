'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

// Sample project data - will be replaced with actual content later
const sampleProjects = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a modular design for easy content updates and optimal performance.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    featured: true,
    date: 'February 2026',
    githubUrl: 'https://github.com/spencerlarsen/portfolio-website',
  },
  {
    slug: 'sample-project-1',
    title: 'Machine Learning Pipeline',
    description: 'An automated ML pipeline for data preprocessing, model training, and deployment. Implements best practices for reproducible ML workflows.',
    tags: ['Python', 'TensorFlow', 'Docker', 'MLOps'],
    date: 'January 2026',
  },
  {
    slug: 'sample-project-2',
    title: 'Real-time Data Dashboard',
    description: 'Interactive dashboard for visualizing real-time data streams. Built with React and WebSocket connections for live updates.',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    date: 'December 2025',
  },
];

const allCategories = ['All', 'Web Development', 'Machine Learning', 'Data Science', 'DevOps', 'Mobile'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects by category (placeholder logic)
  const filteredProjects = selectedCategory === 'All' 
    ? sampleProjects 
    : sampleProjects; // Will implement real filtering when categories are added to project data

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of my engineering projects, from web applications to machine learning systems.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Add More Projects CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-gray-600 mb-8">
            I'm constantly working on new projects. Check back regularly or follow me on GitHub for updates.
          </p>
          <a
            href="https://github.com/spencerlarsen"
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
            View GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
}
