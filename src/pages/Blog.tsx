import React from 'react';
import BlogList from '../components/blog/BlogList';

const Blog: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogs & Articles</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, analysis, and expertise from our team of business consultants on the latest industry trends.
            </p>
          </div>
        </div>
      </div>
      
      <BlogList />
    </div>
  );
};

export default Blog;