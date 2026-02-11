import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Academic research, publications, and scholarly contributions by Spencer Larsen',
};

export default function ResearchPage() {
  // Sample research data
  const researchAreas = [
    {
      title: 'Machine Learning & AI',
      description: 'Exploring novel approaches to deep learning, computer vision, and natural language processing.',
      topics: ['Neural Networks', 'Computer Vision', 'NLP', 'Reinforcement Learning'],
    },
    {
      title: 'Data Science',
      description: 'Developing methodologies for large-scale data analysis and visualization.',
      topics: ['Data Mining', 'Statistical Analysis', 'Predictive Modeling', 'Big Data'],
    },
    {
      title: 'Software Engineering',
      description: 'Research in software architecture, design patterns, and development methodologies.',
      topics: ['System Design', 'Performance Optimization', 'DevOps', 'Cloud Computing'],
    },
  ];

  const samplePublications = [
    {
      title: 'Sample Research Paper Title',
      authors: 'Spencer Larsen, et al.',
      venue: 'Conference/Journal Name',
      year: '2025',
      type: 'Conference Paper',
      abstract: 'This is a placeholder for a research publication. Replace with actual publications.',
      links: {
        pdf: '#',
        doi: '#',
      },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research
          </h1>
          <p className="text-xl text-gray-600">
            Academic research, publications, and contributions to the field of computer science and engineering.
          </p>
        </div>
      </section>

      {/* Research Interests */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Interests</h2>
          <div className="space-y-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
          
          {samplePublications.length > 0 ? (
            <div className="space-y-6">
              {samplePublications.map((pub, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded mb-3">
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    {pub.venue}, {pub.year}
                  </p>
                  <p className="text-gray-700 mb-4">{pub.abstract}</p>
                  <div className="flex gap-4">
                    {pub.links.pdf && (
                      <a
                        href={pub.links.pdf}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        PDF →
                      </a>
                    )}
                    {pub.links.doi && (
                      <a
                        href={pub.links.doi}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        DOI →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-600">
                Publications will be added here as they become available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Collaborations */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Collaborations</h2>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-4">
              I'm always interested in research collaborations and academic partnerships. 
              If you have an interesting research opportunity or would like to discuss potential 
              collaborations, please feel free to reach out.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
