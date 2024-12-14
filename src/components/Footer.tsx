import React from 'react';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';
import { services } from './services/service-data';
import { useNavigationContext } from '@/contexts/NavigationContext';
import { scrollToSection, scrollToTop } from '@/utils/scroll';

const Footer = () => {
  const { currentPage, onNavigate } = useNavigationContext();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => scrollToSection('services'), 100);
    } else {
      scrollToSection('services');
    }
  };

  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
            >
              <Bot className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                Piekut
              </span>
            </div>
            <p className="text-gray-400">
              Transforming businesses through automation and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/j_piekut"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/jpiekut"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jpiekut/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <a 
                    href="#services" 
                    onClick={handleServiceClick}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <FooterLinks
              links={['Privacy Policy', 'Terms of Service', 'Cookie Policy']}
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Piekut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ links }: { links: string[] }) => (
  <ul className="space-y-2">
    {links.map((link) => (
      <li key={link}>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          {link}
        </a>
      </li>
    ))}
  </ul>
);

export default Footer;