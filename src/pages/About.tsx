import React from 'react';
import AboutContent from '../components/about/AboutContent';

const About: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about our company, our mission, and the team that makes LKR & Associates a trusted partner for businesses.
            </p>
          </div>
        </div>
      </div>
      
      <AboutContent />
    </div>
  );
};

export default About;