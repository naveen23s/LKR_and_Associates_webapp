import React from 'react';
import { Clock } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'The Future of Business Consulting in a Digital Age',
    excerpt: 'Explore how digital transformation is reshaping the business consulting industry and creating new opportunities for growth and innovation.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'April 15, 2025',
    readTime: '8 min read',
    author: 'Robert Lawrence',
    category: 'Industry Trends',
  },
  {
    id: 2,
    title: 'Effective Tax Planning Strategies for Small Businesses',
    excerpt: 'Learn about practical tax planning strategies that can help small businesses minimize tax liabilities while ensuring compliance with regulations.',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'April 8, 2025',
    readTime: '6 min read',
    author: 'David Rodriguez',
    category: 'Tax Planning',
  },
  {
    id: 3,
    title: 'Building a Resilient Business Strategy in Uncertain Times',
    excerpt: 'Discover frameworks and approaches for developing business strategies that can withstand market volatility and economic uncertainty.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'March 25, 2025',
    readTime: '10 min read',
    author: 'Karen Mitchell',
    category: 'Strategic Planning',
  },
  {
    id: 4,
    title: 'The Impact of AI on Financial Advisory Services',
    excerpt: 'An analysis of how artificial intelligence is transforming financial advisory services and changing client expectations.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'March 17, 2025',
    readTime: '7 min read',
    author: 'Sophia Parker',
    category: 'Technology',
  },
  {
    id: 5,
    title: 'Effective Risk Management in a Globalized Economy',
    excerpt: 'Understanding the complex risk landscape in a globalized economy and developing strategies to protect your business interests.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'March 10, 2025',
    readTime: '9 min read',
    author: 'James Wilson',
    category: 'Risk Management',
  },
  {
    id: 6,
    title: 'Creating a Culture of Innovation in Your Organization',
    excerpt: 'Practical steps for fostering a culture of innovation that encourages creative thinking and drives business growth.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'March 3, 2025',
    readTime: '8 min read',
    author: 'Alicia Chen',
    category: 'Organizational Development',
  },
];

const BlogList: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 m-2 rounded">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {blog.author}</span>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;