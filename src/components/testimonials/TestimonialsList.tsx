import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    quote: 'LKR & Associates provided exceptional guidance during our company\'s expansion phase. Their strategic insights and meticulous planning helped us achieve our growth targets ahead of schedule. The team was responsive, professional, and truly invested in our success.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CFO, Global Solutions',
    quote: 'Working with the financial advisory team at LKR was transformative for our business. Their tax optimization strategies saved us a significant amount and their financial forecasting was impressively accurate. I highly recommend their services to any business looking to improve their financial position.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Jessica Williams',
    position: 'Operations Director, Nexus Corp',
    quote: 'The team at LKR & Associates brings a level of professionalism and expertise that is truly outstanding. Their business consulting services helped us streamline operations and increase productivity by 30%. They take the time to understand your specific needs and develop tailored solutions.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Thomas Wilson',
    position: 'Founder, Innovate Labs',
    quote: 'When we needed expert guidance for our startup, LKR & Associates delivered beyond our expectations. Their strategic planning services provided us with a clear roadmap for growth, and their ongoing support has been invaluable. They genuinely care about their clients\' success.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    name: 'Amanda Rodriguez',
    position: 'Marketing Director, Brand Builders',
    quote: 'LKR & Associates helped us conduct a comprehensive market analysis that revealed valuable insights about our target audience. Their recommendations have significantly improved our marketing strategy and customer acquisition efforts. They are truly experts in their field.',
    image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    name: 'Robert Thompson',
    position: 'Owner, Thompson Enterprises',
    quote: 'As a small business owner, I needed help with tax planning and financial management. The team at LKR & Associates provided clear, practical advice that was tailored to my specific situation. They have a remarkable ability to explain complex financial concepts in understandable terms.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 7,
    name: 'Emily Chang',
    position: 'HR Manager, Elevate Group',
    quote: 'The HR consulting services provided by LKR & Associates have transformed our talent acquisition and management processes. Their expertise in organizational development has helped us build a stronger, more cohesive team. I would highly recommend their services.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 8,
    name: 'Daniel Martinez',
    position: 'CEO, Growth Capital',
    quote: 'We engaged LKR & Associates for a complex merger project, and they guided us through every step of the process with expertise and professionalism. Their attention to detail and strategic thinking were instrumental in ensuring a successful outcome.',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const TestimonialsList: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex justify-start mb-6">
                <Quote className="h-10 w-10 text-blue-400 opacity-40" />
              </div>
              <p className="text-gray-700 mb-8 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsList;