import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import AboutPreview from '../components/home/AboutPreview';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <TestimonialsPreview />
      <CTASection />
    </div>
  );
};

export default Home;