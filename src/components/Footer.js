import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Hammer, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();



  const teamMembers = [
    { 
      name: 'Benjamin Amhof', 
      role: 'AI & Machine Learning Specialist', 
      github: 'https://github.com/sudoBeni',
      photo: '/images/benjamin.jpg' // Will be provided later
    },
    { 
      name: 'Jan Wahli', 
      role: 'Frontend Developer', 
      github: 'https://github.com/jan-5',
      photo: '/images/jan.jpg' // Will be provided later
    },
    { 
      name: 'Noel Jensen', 
      role: 'Backend Architect', 
      github: 'https://github.com/noeljen',
      photo: '/images/noel.jpg' // Will be provided later
    },
  ];

  const partners = [
    {
      name: 'HSLU',
      fullName: 'Lucerne University of Applied Sciences and Arts',
      logo: '/images/partners/hslu-logo.png' // Will be provided later
    },
    {
      name: 'Press\'nXPress',
      fullName: 'Press\'nXPress',
      logo: '/images/partners/pxp-logo.png' // Will be provided later
    },
    {
      name: 'Humber Polytechnic',
      fullName: 'Humber Polytechnic',
      logo: '/images/partners/humber-logo.png' // Will be provided later
    }
  ];

  return (
    <footer className="bg-secondary-bg border-t border-forge-border">
      <div className="container mx-auto px-4 py-16">
        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-accent-color" />
              <h3 className="text-3xl font-bold text-text-primary uppercase tracking-wide">Special Thanks To</h3>
            </div>
            <p className="text-text-secondary text-lg">
              Our valued partners who made this project possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="card text-center p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-forge-bg rounded-xl flex items-center justify-center border border-forge-border">
                  {/* Placeholder for logo - will be replaced when images are provided */}
                  <div className="text-2xl font-bold text-accent-color">
                    {partner.name.charAt(0)}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">{partner.name}</h4>
                <p className="text-sm text-text-secondary">{partner.fullName}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contributors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-primary uppercase tracking-wide mb-4">Meet The Team</h3>
            <p className="text-text-secondary text-lg">
              The passionate developers behind this project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="card text-center p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-forge-bg border-2 border-accent-color/20">
                  {/* Placeholder for photo - will be replaced when images are provided */}
                  <div className="w-full h-full bg-gradient-to-br from-accent-color/20 to-accent-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-color">
                      {member.name.split(' ').map(n => n.charAt(0)).join('')}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">{member.name}</h4>
                <p className="text-sm text-text-secondary uppercase tracking-wide mb-4">{member.role}</p>
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent-color hover:text-accent-secondary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Bottom Bar */}
        <motion.div
          className="border-t border-forge-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-text-secondary text-sm">
            © {currentYear} Tool Smiths. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/" className="text-text-secondary hover:text-accent-color text-sm transition-colors font-medium uppercase tracking-wide">
              Privacy Policy
            </Link>
            <Link to="/" className="text-text-secondary hover:text-accent-color text-sm transition-colors font-medium uppercase tracking-wide">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 