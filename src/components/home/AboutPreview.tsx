import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const highlights = [
    'Over 15 years of professional experience',
    'Team of certified business experts',
    'Tailored solutions for each client',
    'Proven track record of success',
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team meeting" 
                className="relative z-10 rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">LKR & Associates</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2005, LKR & Associates has established itself as a leading business consultancy firm, 
              providing expert guidance and innovative solutions to businesses of all sizes.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to help our clients achieve sustainable growth and operational excellence 
              through strategic planning, financial optimization, and effective risk management.
            </p>
            
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;