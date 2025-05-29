import React from 'react';
import TestimonialsList from '../components/testimonials/TestimonialsList';
import CTASection from '../components/home/CTASection';

const Testimonials: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover what our clients have to say about their experience working with LKR & Associates.
            </p>
          </div>
        </div>
      </div>
      
      <TestimonialsList />
      <CTASection />
    </div>
  );
};

export default Testimonials;