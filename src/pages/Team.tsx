import React from 'react';
import TeamMembers from '../components/team/TeamMembers';

const Team: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the experienced professionals behind LKR & Associates who are dedicated to helping your business succeed.
            </p>
          </div>
        </div>
      </div>
      
      <TeamMembers />
    </div>
  );
};

export default Team;