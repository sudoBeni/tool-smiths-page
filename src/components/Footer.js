import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, BarChart3 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/project-showcase', label: 'Project Showcase', icon: Code },
    { path: '/technical-deep-dive', label: 'Technical Deep Dive', icon: Database },
    { path: '/results-impact', label: 'Results & Impact', icon: BarChart3 },
  ];

  const teamMembers = [
    { name: 'Alex Chen', role: 'Backend Architect', github: '#' },
    { name: 'Sarah Kim', role: 'Frontend Developer', github: '#' },
    { name: 'Marcus Rodriguez', role: 'AI Specialist', github: '#' },
  ];

  return (
    <footer className="bg-secondary-bg border-t border-border-color">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Team Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent-color rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Tool Smiths</h3>
              </div>
              <p className="text-text-secondary mb-4">
                A team of three passionate developers who built a sophisticated multi-agent data retrieval system 
                for SQL databases. We specialize in AI, backend architecture, and modern web technologies.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="mailto:team@toolsmiths.dev"
                  className="text-text-secondary hover:text-accent-color transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/toolsmiths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-color transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/toolsmiths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-color transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
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
              <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-2 text-text-secondary hover:text-accent-color transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
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
              <h4 className="text-lg font-semibold text-text-primary mb-4">Team Members</h4>
              <ul className="space-y-2">
                {teamMembers.map((member) => (
                  <li key={member.name}>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-text-secondary hover:text-accent-color transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <div>
                        <div className="text-text-primary font-medium">{member.name}</div>
                        <div className="text-xs">{member.role}</div>
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
          className="border-t border-border-color mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-text-secondary text-sm">
            © {currentYear} Tool Smiths. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-text-secondary hover:text-accent-color text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-text-secondary hover:text-accent-color text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 