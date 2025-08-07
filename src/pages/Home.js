import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Code, 
  Database, 
  Zap, 
  BarChart3, 
  Shield, 
  Globe,
  Code2,
  Package,
  Server,
  Cloud,
  Sparkles,
  Cpu,
  Brain,
  Rocket
} from 'lucide-react';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true });
  const [techRef, techInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Backend Architect',
      expertise: 'FastAPI, Database Design, System Architecture',
      avatar: '👨‍💻',
      contribution: 'Led the multi-agent system design and FastAPI backend development',
      color: '#00d4ff'
    },
    {
      name: 'Sarah Kim',
      role: 'Frontend Developer',
      expertise: 'React, TypeScript, UI/UX Design',
      avatar: '👩‍💻',
      contribution: 'Built the responsive React frontend with real-time chat interface',
      color: '#ff0080'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'AI Specialist',
      expertise: 'Azure OpenAI, Machine Learning, Data Processing',
      avatar: '👨‍🔬',
      contribution: 'Implemented AI agents and Azure OpenAI integration',
      color: '#00ff88'
    }
  ];

  const technologies = [
    { name: 'React', icon: Code2, color: '#61dafb', description: 'Modern UI Framework' },
    { name: 'FastAPI', icon: Server, color: '#3776ab', description: 'High-Performance Backend' },
    { name: 'Docker', icon: Package, color: '#2496ed', description: 'Container Orchestration' },
    { name: 'Azure OpenAI', icon: Cloud, color: '#0078d4', description: 'AI-Powered Intelligence' },
    { name: 'SQLite', icon: Database, color: '#003b57', description: 'Lightweight Database' },
  ];

  const features = [
    {
      icon: Brain,
      title: 'Multi-Agent System',
      description: 'Orchestrated AI agents for specialized tasks including database management, query generation, and data visualization.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'FastAPI backend with async processing capabilities for handling complex database queries and AI responses.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Intelligent Chat Interface',
      description: 'React frontend with real-time updates and context-aware conversation management.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Response Validation',
      description: 'Comprehensive validation system ensuring accuracy and reliability of AI-generated responses.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting capabilities with interactive data visualizations.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Web Search Integration',
      description: 'Focused web search capabilities to enhance AI responses with real-time information.',
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-20 left-10 w-2 h-2 bg-accent-color rounded-full"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-40 right-20 w-3 h-3 bg-accent-secondary rounded-full"
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute bottom-40 left-20 w-1 h-1 bg-success-color rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
              />
            </div>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-color/20 to-accent-secondary/20 border border-accent-color/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-accent-color" />
              <span className="text-accent-color font-medium">Multi-Agent Data Retrieval System</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="hero-title mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Tool Smiths
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-subtitle mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A team of three passionate developers who built a sophisticated multi-agent data retrieval system 
              for SQL databases, combining AI, modern web technologies, and business intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                to="/project-showcase"
                className="btn-primary flex items-center justify-center space-x-2 px-8 py-4 text-lg group"
              >
                <span>Explore Our Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/technical-deep-dive"
                className="btn-secondary flex items-center justify-center space-x-2 px-8 py-4 text-lg group"
              >
                <span>Technical Details</span>
                <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-color">3</div>
                <div className="text-sm text-text-secondary">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-secondary">8</div>
                <div className="text-sm text-text-secondary">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-color">99.9%</div>
                <div className="text-sm text-text-secondary">Uptime</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-secondary-bg">
        <div className="container">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Three developers with complementary skills who came together to build something extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="card group"
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{member.avatar}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-accent-color font-medium mb-3">{member.role}</p>
                  <p className="text-text-secondary text-sm mb-4">{member.expertise}</p>
                  <p className="text-text-secondary text-sm">{member.contribution}</p>
                  
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle, ${member.color}20, transparent)`,
                      filter: 'blur(20px)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section">
        <div className="container">
          <motion.div
            ref={techRef}
            initial={{ opacity: 0, y: 50 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Modern technologies powering our sophisticated multi-agent system.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="card text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={techInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: tech.color }} />
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  <p className="text-text-secondary text-xs">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-secondary-bg">
        <div className="container">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover what makes our multi-agent system truly innovative and powerful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="card group relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <Icon className="w-8 h-8 text-accent-color mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="card text-center max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-color/5 to-accent-secondary/5" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-color/5 to-transparent animate-pulse" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Explore Our Work?</h2>
              <p className="text-text-secondary text-lg mb-8">
                Dive deep into our project showcase, technical implementation, and see the real impact of our multi-agent system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/project-showcase"
                  className="btn-primary flex items-center justify-center space-x-2 px-6 py-3 group"
                >
                  <span>View Project Showcase</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/results-impact"
                  className="btn-secondary flex items-center justify-center space-x-2 px-6 py-3 group"
                >
                  <span>See Results & Impact</span>
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 