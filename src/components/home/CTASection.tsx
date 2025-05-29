import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact our team today to schedule a consultation and discover how LKR & Associates can help your business reach its full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 hover:bg-gray-100 font-medium rounded-md transition-colors duration-200"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-blue-800 border border-white text-white font-medium rounded-md transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;