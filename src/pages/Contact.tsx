import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team to discuss how we can help your business grow and succeed.
            </p>
          </div>
        </div>
      </div>
      
      <ContactForm />
      
      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.9421699272693!2d-4.255765324137744!3d55.84631818478553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846968f76af6d%3A0x1687b417d09b8813!2s0%202%2C%2018%20Southside%20Cres%2C%20Glasgow%20G5%200TQ%2C%20UK!5e0!3m2!1sen!2sse!4v1748553315441!5m2!1sen!2sse" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="LKR & Associates Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;