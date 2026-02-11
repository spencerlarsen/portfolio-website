import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Spencer Larsen - background, skills, and experience',
};

export default function AboutPage() {
  const skills = {
    'Programming Languages': ['Python', 'JavaScript/TypeScript', 'Java', 'C++', 'Go', 'Rust'],
    'Web Technologies': ['React', 'Next.js', 'Node.js', 'Express', 'HTML/CSS', 'Tailwind'],
    'Data & ML': ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL'],
    'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Vercel'],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600">
            Engineering professional passionate about building innovative solutions and conducting meaningful research.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Background</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                I'm Spencer Larsen, an engineering professional with a passion for creating 
                innovative solutions that bridge theoretical concepts with practical applications. 
                My work spans software development, research, and continuous exploration of 
                emerging technologies.
              </p>
              <p>
                Throughout my career, I've focused on building systems that solve real-world 
                problems while maintaining clean, maintainable code. I believe in the power 
                of continuous learning and staying current with industry best practices.
              </p>
              <p>
                When I'm not coding or conducting research, I enjoy sharing knowledge through 
                technical writing, contributing to open-source projects, and exploring new 
                technologies that push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience placeholder */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Experience</h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                Detailed education and experience information will be added here. This section 
                will showcase academic credentials, professional experience, and notable achievements.
              </p>
            </div>
          </div>

          {/* Resume Download */}
          <div className="text-center">
            <Link
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              (Add your resume.pdf to the public folder)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
