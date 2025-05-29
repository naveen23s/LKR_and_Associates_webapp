import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Duvvuru Leela krishna Reddy',
    position: 'Founder & CEO',
    bio: 'With over 25 years of experience in business consulting, LKR has led the firm since its founding in 2005. He specializes in strategic planning and business transformation.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'dleelakrishnareddy@gmail.com',
    },
  },
  {
    id: 2,
    name: 'Naveen Sai Reddy',
    position: 'Managing Partner',
    bio: 'Naveen leads our financial advisory practice with expertise in corporate finance and investment strategy. He has an MBA from Wharton and previously worked at a Fortune 500 company.',
    image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'naveensaireddy1992@gmail.com',
    },
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;