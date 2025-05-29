import React from 'react';
import { CheckCircle, Award, Target, TrendingUp } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main About Section */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Founded in 2025, LKR & Associates has established itself as a leading business consultancy firm, 
            providing expert guidance and innovative solutions to businesses of all sizes across multiple industries.
          </p>
          
          <p className="text-lg text-gray-700 mb-8">
            Our team consists of experienced professionals with diverse backgrounds in finance, management, 
            marketing, and operations. This multidisciplinary approach allows us to address complex business 
            challenges from different perspectives and develop comprehensive solutions that drive sustainable growth.
          </p>
          
          <p className="text-lg text-gray-700 mb-12">
            With a client-centric approach, we focus on understanding the unique needs and goals of each 
            business we work with. We believe in building long-term partnerships based on trust, integrity, 
            and a commitment to delivering measurable results.
          </p>
        </div>
        
        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              To be the most trusted advisor for businesses seeking sustainable growth and operational 
              excellence, setting the standard for professional consulting services worldwide.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To empower businesses with strategic insights and practical solutions that drive growth, 
              optimize operations, and maximize value, while maintaining the highest standards of 
              professionalism and integrity.
            </p>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to delivering work of the highest quality, constantly striving to exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We adhere to the highest ethical standards, maintaining transparency and honesty in all our dealings.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace creative thinking and stay at the forefront of industry trends to provide cutting-edge solutions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-700">
                  We work closely with our clients, fostering partnerships based on mutual respect and shared goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose LKR & Associates</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-700">
                  With over 15 years of experience and hundreds of successful client engagements, we have a demonstrated history of delivering results.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-700">
                  Our consultants are industry veterans with advanced degrees and certifications, bringing depth of knowledge and practical experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Approach</h3>
                <p className="text-gray-700">
                  We recognize that every business is unique, and we customize our strategies and solutions to address your specific challenges and goals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Services</h3>
                <p className="text-gray-700">
                  From strategic planning to financial advisory, tax planning to risk management, we offer a full spectrum of business consulting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;