import React from 'react';
import { BarChart as ChartBar, DollarSign, FileText, Users, PieChart, Shield, TrendingUp, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Business Consulting',
    description: 'Strategic guidance to optimize your business operations and maximize growth potential. We analyze your current processes, identify inefficiencies, and develop actionable strategies to improve performance.',
    icon: <ChartBar className="h-12 w-12 text-blue-600" />,
    features: [
      'Business process optimization',
      'Operational efficiency analysis',
      'Growth strategy development',
      'Performance measurement systems',
    ],
  },
  {
    id: 2,
    title: 'Financial Advisory',
    description: 'Expert financial planning and analysis to improve your financial position and decision-making. Our financial advisors provide insights on cash flow management, investment strategies, and financial forecasting.',
    icon: <DollarSign className="h-12 w-12 text-blue-600" />,
    features: [
      'Financial forecasting and modeling',
      'Cash flow management',
      'Investment strategy',
      'Financial restructuring',
    ],
  },
  {
    id: 3,
    title: 'Tax Planning',
    description: 'Comprehensive tax strategies to minimize liabilities while ensuring full compliance with regulations. We help you navigate complex tax codes and identify opportunities for tax optimization.',
    icon: <FileText className="h-12 w-12 text-blue-600" />,
    features: [
      'Corporate tax planning',
      'Tax compliance',
      'International tax advisory',
      'Tax audit support',
    ],
  },
  {
    id: 5,
    title: 'Market Analysis',
    description: 'In-depth market research and competitive analysis to identify opportunities and threats. We provide actionable insights on market trends, customer behavior, and competitive positioning.',
    icon: <PieChart className="h-12 w-12 text-blue-600" />,
    features: [
      'Market opportunity assessment',
      'Competitive landscape analysis',
      'Customer segmentation',
      'Market entry strategy',
    ],
  },
  {
    id: 6,
    title: 'Risk Management',
    description: 'Proactive identification and mitigation of business risks to protect your assets. We develop comprehensive risk management frameworks to address operational, financial, and strategic risks.',
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    features: [
      'Risk assessment and mitigation',
      'Business continuity planning',
      'Compliance management',
      'Crisis management protocols',
    ],
  },
  {
    id: 7,
    title: 'Strategic Planning',
    description: 'Long-term strategic planning to establish clear objectives and roadmaps for achieving business goals. We facilitate strategic planning sessions and help develop comprehensive business plans.',
    icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
    features: [
      'Vision and mission development',
      'SWOT analysis',
      'Strategic objective setting',
      'Implementation roadmaps',
    ],
  },
  {
    id: 8,
    title: 'Mergers & Acquisitions',
    description: 'Expert guidance through the complex process of mergers, acquisitions, and business restructuring. We provide due diligence, valuation, and integration planning services.',
    icon: <Briefcase className="h-12 w-12 text-blue-600" />,
    features: [
      'Target identification and screening',
      'Due diligence coordination',
      'Valuation and deal structuring',
      'Post-merger integration planning',
    ],
  },
];

const ServicesList: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  Inquire About This Service
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;