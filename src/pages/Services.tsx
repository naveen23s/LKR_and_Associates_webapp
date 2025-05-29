import React from 'react';
import ServicesList from '../components/services/ServicesList';
import CTASection from '../components/home/CTASection';

const Services: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive business consulting solutions tailored to meet your specific needs and goals.
            </p>
          </div>
        </div>
      </div>
      
      <ServicesList />
      <CTASection />
    </div>
  );
};

export default Services;