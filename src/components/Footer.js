import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, BarChart3, Hammer } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/project-showcase', label: 'Project Showcase', icon: Code },
    { path: '/technical-deep-dive', label: 'Technical Deep Dive', icon: Database },
    { path: '/results-impact', label: 'Results & Impact', icon: BarChart3 },
  ];

  const teamMembers = [
    { name: 'Benjamin Amhof', role: 'AI & Machine Learning Specialist', github: 'https://github.com/sudoBeni' },
    { name: 'Jan Wahli', role: 'Frontend Developer', github: 'https://github.com/jan-5' },
    { name: 'Noel Jensen', role: 'Backend Architect', github: 'https://github.com/noeljen' },
  ];

  return (
    <footer className="bg-secondary-bg border-t border-forge-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Team Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-accent-color rounded-xl flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary uppercase tracking-wide">Tool Smiths</h3>
              </div>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                A team of three passionate developers who built a sophisticated multi-agent data retrieval system 
                for SQL databases. We specialize in AI, backend architecture, and modern web technologies.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="mailto:team@toolsmiths.dev"
                  className="p-3 rounded-xl forge hover:bg-tertiary-bg transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 text-text-secondary" />
                </motion.a>
                <motion.a
                  href="https://github.com/toolsmiths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl forge hover:bg-tertiary-bg transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-text-secondary" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/toolsmiths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl forge hover:bg-tertiary-bg transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-text-secondary" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold text-text-primary mb-6 uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-3 text-text-secondary hover:text-accent-color transition-colors group"
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium uppercase tracking-wide">{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>

          {/* Team Members */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-text-primary mb-6 uppercase tracking-wide">Team Members</h4>
              <ul className="space-y-4">
                {teamMembers.map((member) => (
                  <li key={member.name}>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-text-secondary hover:text-accent-color transition-colors group"
                    >
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-text-primary font-semibold">{member.name}</div>
                        <div className="text-sm text-text-secondary uppercase tracking-wide">{member.role}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

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