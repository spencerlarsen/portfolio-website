import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles, insights, and project writeups by Spencer Larsen',
};

// Sample blog posts - will be replaced with MDX content
const samplePosts = [
  {
    slug: 'welcome-to-my-portfolio',
    title: 'Welcome to My Portfolio',
    excerpt: 'Introducing my new portfolio website built with Next.js, TypeScript, and Tailwind CSS. Learn about the technologies and design decisions behind this project.',
    date: 'February 11, 2026',
    readTime: '5 min read',
    tags: ['Next.js', 'Web Development', 'Portfolio'],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Technical articles, project insights, and thoughts on software engineering.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {samplePosts.length > 0 ? (
            <div className="space-y-12">
              {samplePosts.map((post) => (
                <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-b-0">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <p className="text-gray-600 mb-4 text-lg">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA (placeholder) */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            More technical articles and insights coming soon. Follow me on GitHub or LinkedIn to stay updated.
          </p>
          <div className="flex justify-center space-x-4">
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
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/spencer-clarsen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
