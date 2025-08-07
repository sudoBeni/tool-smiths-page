import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Database,
  BarChart3,
  Shield,
  MessageSquare,
  Eye,
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Cpu,
  GitBranch,
  Users,
  Zap,
  Lightbulb,
  Globe,
  Package,
  Server,
  Cloud,
  Sparkles,
  Rocket,
  Settings,
  RotateCcw,
  Bot
} from 'lucide-react';
import ParticleEffect from '../components/ParticleEffect';

const ProjectShowcase = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [demoRef, demoInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Particle effect state
  const [particleTrigger, setParticleTrigger] = React.useState(false);
  const [particlePosition, setParticlePosition] = React.useState({ x: 0, y: 0 });

  const handleButtonClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setParticlePosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setParticleTrigger(true);
    setTimeout(() => setParticleTrigger(false), 100);
  };

  const projects = [
    {
      title: "PXP BI Chat",
      description: 'AI chat for Press\'nXPress (PXP) that analyzes reviews, ratings, and branch performance.',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time chat', 'Context awareness', 'Agno multi-agent orchestration'],
      status: 'Active'
    },
    {
      title: 'Real-Time Validation',
      description: 'Background fact-checking of every claim against the database with clear status feedback.',
      icon: Shield,
      color: 'from-emerald-500 to-green-600',
      features: ['Non-blocking verification', 'Transparent badges', 'Detailed validation insights'],
      status: 'Active'
    },
    {
      title: 'Visualization Engine',
      description: 'Auto-generated charts for BI with drill-downs from query results.',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      features: ['Auto-chart selection', 'Interactive dashboards', 'Export capabilities'],
      status: 'Active'
    }
  ];

  const technologies = [
    { name: 'React', icon: Code, color: '#61dafb' },
    { name: 'FastAPI', icon: Server, color: '#009688' },
    { name: 'WebSocket', icon: Zap, color: '#ff6b35' },
    { name: 'SQLite', icon: Database, color: '#003b57' },
    { name: 'Azure OpenAI', icon: Cloud, color: '#0078d4' },
    { name: 'Agno Framework', icon: Bot, color: '#ffcc02' },
    { name: 'Docker', icon: Package, color: '#2496ed' },
    { name: 'GitLab', icon: GitBranch, color: '#e24329' }
  ];

  return (
    <div className="min-h-screen">
      <ParticleEffect trigger={particleTrigger} position={particlePosition} />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            ref={heroRef}
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-3 forge rounded-full px-6 py-3 mb-6">
                <Code className="w-5 h-5 text-accent-color" />
                <span className="text-sm uppercase tracking-wide text-text-secondary">Project Showcase</span>
                <motion.div
                  className="w-2 h-2 bg-accent-color rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.h1
              className="hero-title mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Forge Your Data Projects
            </motion.h1>

            <motion.p
              className="hero-subtitle mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our intelligent data processing system that transforms raw information into actionable insights.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#demo"
                  className="btn-primary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                  onClick={handleButtonClick}
                >
                  <span>Try the Demo</span>
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#features"
                  className="btn-secondary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                  onClick={handleButtonClick}
                >
                  <span>View Features</span>
                  <Eye className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">PXP BI Chat Demo</h2>
            <p className="text-text-secondary">Ask about reviews, ratings, or branch performance — see multi-agent reasoning and validation.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-color">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" title="connected" />
                    <h3 className="text-lg font-semibold">PXP BI Chat Interface</h3>
                  </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-interactive-bg transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-interactive-bg transition-colors">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-color rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-forge-bg rounded-lg p-3 border border-forge-border">
                      <p className="text-sm">Show me the top 10 customers by revenue</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent-secondary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-accent-color/10 rounded-lg p-3 border border-accent-color/20">
                      <p className="text-sm mb-2">I will query the database and validate every claim in the background.</p>
                      <div className="text-xs text-text-secondary">
                        <div className="flex items-center space-x-2 mb-1">
                          <Database className="w-3 h-3" />
                          <span>Generated SQL: SELECT customer_name, revenue FROM customers ORDER BY revenue DESC LIMIT 10</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Shield className="w-3 h-3 text-green-500" />
                          <span>Validation: 10/10 rows verified</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Query executed successfully</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Ask a question about your data..."
                  className="flex-1 bg-forge-bg border border-forge-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent-color"
                />
                <motion.button
                  className="btn-primary px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleButtonClick}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section id="features" className="section">
        <div className="container">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Core Projects</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Three interconnected systems working together to transform your data experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  className="card p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-text-secondary mb-6">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent-color" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-accent-color font-medium">{project.status}</span>
                    <motion.button
                      className="text-accent-color hover:text-accent-secondary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-secondary-bg">
        <div className="container">
          <motion.div
            ref={techRef}
            initial={{ opacity: 0, y: 50 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Technology Stack</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Built with modern technologies for maximum performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="card text-center p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={techInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: tech.color }} />
                  <p className="text-sm font-medium">{tech.name}</p>
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
            <div className="absolute inset-0 bg-gradient-to-r from-accent-color/5 to-accent-secondary/5" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Experience the Forge?</h2>
              <p className="text-text-secondary text-xl mb-8">
                Start exploring our projects and see how intelligent agents can transform your data workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#demo"
                    className="btn-primary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                    onClick={handleButtonClick}
                  >
                    <span>Try Demo Now</span>
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/technical-deep-dive"
                    className="btn-secondary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                    onClick={handleButtonClick}
                  >
                    <span>Technical Details</span>
                    <Code className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectShowcase; 