import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    quote: 'LKR & Associates provided exceptional guidance during our company\'s expansion phase. Their strategic insights and meticulous planning helped us achieve our growth targets ahead of schedule.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CFO, Global Solutions',
    quote: 'Working with the financial advisory team at LKR was transformative for our business. Their tax optimization strategies saved us a significant amount and their financial forecasting was impressively accurate.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Jessica Williams',
    position: 'Operations Director, Nexus Corp',
    quote: 'The team at LKR & Associates brings a level of professionalism and expertise that is truly outstanding. Their business consulting services helped us streamline operations and increase productivity by 30%.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const TestimonialsPreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Discover why businesses trust LKR & Associates for their professional consulting needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 absolute w-full ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 shadow-lg">
                  <div className="flex justify-center mb-6">
                    <Quote className="h-12 w-12 text-blue-400 opacity-40" />
                  </div>
                  <p className="text-lg md:text-xl text-center mb-8 text-gray-100">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-blue-400">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-blue-300">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Static version for the first load and SEO */}
            <div className="invisible">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 shadow-lg">
                <div className="flex justify-center mb-6">
                  <Quote className="h-12 w-12 text-blue-400 opacity-40" />
                </div>
                <p className="text-lg md:text-xl text-center mb-8 text-gray-100">
                  "{testimonials[0].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-blue-400">
                    <img
                      src={testimonials[0].image}
                      alt={testimonials[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{testimonials[0].name}</h3>
                  <p className="text-blue-300">{testimonials[0].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-400' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;