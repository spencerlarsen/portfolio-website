import { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

// Custom components to use in MDX
export const mdxComponents: MDXComponents = {
  // Map HTML elements to custom components
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-4">{children}</h4>
  ),
  p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
  a: ({ href, children }) => (
    <Link
      href={href || '#'}
      className="text-blue-600 hover:text-blue-700 underline"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="text-gray-700">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    
    return (
      <code className={className}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={800}
      height={400}
      className="rounded-lg my-6"
    />
  ),
  hr: () => <hr className="my-8 border-gray-300" />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-300">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 bg-gray-50">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200">
      {children}
    </td>
  ),
};
