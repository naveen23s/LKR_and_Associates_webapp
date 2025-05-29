import React from 'react';
import { BarChart as ChartBar, DollarSign, FileText, Users, PieChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Business Consulting',
    description: 'Strategic guidance to optimize your business operations and maximize growth potential.',
    icon: <ChartBar className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Financial Advisory',
    description: 'Expert financial planning and analysis to improve your financial position and decision-making.',
    icon: <DollarSign className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Tax Planning',
    description: 'Comprehensive tax strategies to minimize liabilities while ensuring full compliance.',
    icon: <FileText className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 4,
    title: 'HR Consulting',
    description: 'Effective human resource solutions to build and maintain a productive workforce.',
    icon: <Users className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 5,
    title: 'Market Analysis',
    description: 'In-depth market research and competitive analysis to identify opportunities and threats.',
    icon: <PieChart className="h-10 w-10 text-blue-600" />,
  },
  {
    id: 6,
    title: 'Risk Management',
    description: 'Proactive identification and mitigation of business risks to protect your assets.',
    icon: <Shield className="h-10 w-10 text-blue-600" />,
  },
];

const FeaturedServices: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of business services tailored to meet your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                to="/services" 
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;