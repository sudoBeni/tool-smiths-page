import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Hammer, Heart } from 'lucide-react';
import { Logo } from './icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();



  const teamMembers = [
    { 
      name: 'Benjamin Amhof', 
      role: 'BSc Student in AI & Machine Learning at HSLU', 
      github: 'https://github.com/sudoBeni',
      linkedin: 'https://www.linkedin.com/in/benjamin-amhof/',
      photo: '/images/benjamin.jpg'
    },
    { 
      name: 'Jan Wahli', 
      role: 'BSc Student in AI & Machine Learning at HSLU', 
      github: 'https://github.com/jan-5',
      linkedin: 'https://www.linkedin.com/in/jan-wahli/',
      photo: '/images/jan.jpg'
    },
    { 
      name: 'Noel Jensen', 
      role: 'BSc Student in AI & Machine Learning at HSLU', 
      github: 'https://github.com/noeljen',
      linkedin: 'https://www.linkedin.com/in/noel-jensen-/',
      photo: '/images/noel.jpg'
    },
  ];

  const partners = [
    {
      name: '',
      fullName: '',
      logo: '/images/partners/logo_hslu.png',
      logoSize: { width: 220, height: 80 }
    },
    {
      name: '',
      fullName: '',
      logo: '/images/partners/logo_humber.webp',
      logoSize: { width: 100, height: 60 }
    },
    {
      name: '',
      fullName: '',
      logo: '/images/partners/logo_pxp.png',
      logoSize: { width: 140, height: 70 }
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
                 <div className="mx-auto mb-4 flex justify-center w-full h-24 md:h-32">
                   <Logo
                     src={partner.logo}
                     alt={partner.name}
                     fallbackText={partner.name.charAt(0)}
                     containerClassName="bg-orange-100 rounded-lg p-2 border border-orange-200 w-full h-full partner-logo"
                     className="rounded-lg"
                     responsive={true}
                   />
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
            <h3 className="text-3xl font-bold text-text-primary uppercase tracking-wide mb-4">Meet The Developers</h3>
            <p className="text-text-secondary text-lg">
              The passionate team behind this project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
                             <motion.div
                 key={member.name}
                 className="card p-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 whileHover={{ 
                   y: -5,
                   transition: { duration: 0.2 }
                 }}
               >
                 <div className="flex items-start space-x-4">
                   {/* Profile Photo */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-forge-bg border-2 border-accent-color/20 flex-shrink-0 developer-avatar">
                     <img 
                       src={member.photo} 
                       alt={member.name}
                      className="w-full h-full object-cover"
                       onError={(e) => {
                         // Fallback to initials if image fails to load
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                     <div className="w-full h-full bg-gradient-to-br from-accent-color/20 to-accent-secondary/20 flex items-center justify-center" style={{ display: 'none' }}>
                       <span className="text-xl font-bold text-accent-color">
                         {member.name.split(' ').map(n => n.charAt(0)).join('')}
                       </span>
                     </div>
                   </div>
                   
                   {/* Text Content */}
                   <div className="flex-1 min-w-0">
                     <h4 className="text-xl font-semibold text-text-primary mb-2">{member.name}</h4>
                     <p className="text-sm text-text-secondary mb-4">{member.role}</p>
                     
                     {/* Social Links */}
                     <div className="flex">
                       <motion.a
                         href={member.linkedin}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center space-x-2 text-accent-color hover:text-accent-secondary transition-colors"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                       >
                         <svg className="w-2 h-2 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                         </svg>
                         <span className="text-xs font-medium opacity-70">LinkedIn</span>
                       </motion.a>
                     </div>
                   </div>
                 </div>
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