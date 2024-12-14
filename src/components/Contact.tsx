import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Ready to transform your business with automation? Let's discuss your project.
          </p>

          <div className="flex justify-center items-center space-x-3">
            <Mail className="w-6 h-6 text-purple-500" />
            <a 
              href="mailto:jpiekut790@gmail.com"
              className="text-xl text-purple-400 hover:text-purple-300 transition-colors"
            >
              jpiekut790@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;