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
  Rocket,
  Linkedin,
  Github,
  Bot,
  Crown,
  Star,
  Users,
  Target,
  Hammer,
  Flame,
  Settings,
  Gauge,
  Workflow,
  CheckCircle2
} from 'lucide-react';
import LoadingHammer from '../components/LoadingHammer';
import ChatPreview from '../components/ChatPreview';
import ParticleEffect from '../components/ParticleEffect';
import useSmoothScroll from '../hooks/useSmoothScroll';
import IntroForge from '../components/IntroForge';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [howRef, howInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [demoRef, demoInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [techRef, techInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Particle effect state
  const [particleTrigger, setParticleTrigger] = React.useState(false);
  const [particlePosition, setParticlePosition] = React.useState({ x: 0, y: 0 });

  // Background hammer after intro
  const [showBgHammer, setShowBgHammer] = React.useState(false);

  // Initialize smooth scroll
  useSmoothScroll();

  const handleButtonClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setParticlePosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setParticleTrigger(true);
    setTimeout(() => setParticleTrigger(false), 100);
  };

  const teamMembers = [
    {
      name: 'Benjamin Amhof',
      role: 'Lead Architect',
      expertise: 'AI Agent Systems, Data Engineering',
      avatar: '👨‍💻',
      linkedin: 'https://linkedin.com/in/benjamin-amhof',
      github: 'https://github.com/benjamin-amhof'
    },
    {
      name: 'Jan Wahli',
      role: 'Full Stack Developer',
      expertise: 'React, FastAPI, Database Design',
      avatar: '👨‍💻',
      linkedin: 'https://linkedin.com/in/jan-wahli',
      github: 'https://github.com/jan-wahli'
    },
    {
      name: 'Noel Jensen',
      role: 'AI Specialist',
      expertise: 'Machine Learning, Agent Orchestration',
      avatar: '👨‍💻',
      linkedin: 'https://linkedin.com/in/noel-jensen',
      github: 'https://github.com/noel-jensen'
    }
  ];

  const technologies = [
    { name: 'React', icon: Code, color: '#61dafb' },
    { name: 'FastAPI', icon: Server, color: '#009688' },
    { name: 'Azure OpenAI', icon: Brain, color: '#0078d4' },
    { name: 'SQLite', icon: Database, color: '#003b57' },
    { name: 'WebSocket', icon: Zap, color: '#ff6b35' },
    { name: 'Agno AI Agent Framework', icon: Crown, color: '#ffcc02' }
  ];

  const features = [
    {
      icon: Bot,
      title: 'Multi-Agent Chat',
      description: 'Intelligent agents that understand context and collaborate to answer your questions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'SQL Generation',
      description: 'Automatically generate and validate SQL queries from natural language.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Beautiful charts and insights automatically generated from your data.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with security-first principles for enterprise environments.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 3s entry overlay */}
      <IntroForge durationMs={3000} playOnce={false} onFinished={() => setShowBgHammer(true)} />

      {/* Background hammer at center (behind content) */}
      {showBgHammer && (
        <div className="background-hammer">
          <LoadingHammer size={180} showText={false} />
        </div>
      )}

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
            {/* Enhanced Badge */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-3 forge rounded-full px-6 py-3 mb-6">
                <Hammer className="w-5 h-5 text-accent-color" />
                <span className="text-sm uppercase tracking-wide text-text-secondary">Data Forge</span>
                <motion.div
                  className="w-2 h-2 bg-accent-color rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Enhanced Title */}
            <motion.h1
              className="hero-title mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Forge Answers from Your Data
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              className="hero-subtitle mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Talk to your database. Intelligent agents do the heavy lifting, you get crisp, forged results.
            </motion.p>

            {/* Removed in-content LoadingHammer to keep single centered background hammer */}

            {/* Enhanced CTA Buttons */}
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
                <Link
                  to="/project-showcase"
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
                </Link>
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
                  href="#how"
                  className="btn-secondary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                  onClick={handleButtonClick}
                >
                  <span>See How It Works</span>
                  <Workflow className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="section bg-secondary-bg">
        <div className="container">
          <motion.div
            ref={howRef}
            initial={{ opacity: 0, y: 50 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              From raw data to forged insights — crafted with precision by intelligent agents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: Database, title: 'Raw Metal', desc: 'Your database — the source of truth and raw potential.'
            }, {
              icon: Hammer, title: 'Forging Agents', desc: 'Specialized AI agents that shape your request into SQL and logic.'
            }, {
              icon: CheckCircle2, title: 'Forged Output', desc: 'Accurate answers, summaries, and visuals tailored to your prompt.'
            }].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  key={s.title} 
                  className="card text-left" 
                  initial={{ opacity: 0, y: 24 }} 
                  animate={howInView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon className="w-8 h-8 text-accent-color mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-text-secondary">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Demo Preview */}
      <section className="section">
        <div className="container">
          <motion.div
            ref={demoRef}
            initial={{ opacity: 0, y: 50 }}
            animate={demoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-5xl font-bold mb-6">Talk to Your Data</h2>
              <p className="text-text-secondary text-xl mb-6">Ask questions in natural language. Watch agents forge SQL, validate results, and deliver crisp insights.</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center space-x-3"><CheckCircle2 className="w-5 h-5 text-accent-color" /><span>Context-aware agent orchestration</span></li>
                <li className="flex items-center space-x-3"><CheckCircle2 className="w-5 h-5 text-accent-color" /><span>Human-readable outputs with optional SQL</span></li>
                <li className="flex items-center space-x-3"><CheckCircle2 className="w-5 h-5 text-accent-color" /><span>Built for BI teams and operators</span></li>
              </ul>
              <div className="mt-8 flex space-x-4">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/project-showcase" 
                    className="btn-primary px-8 py-4"
                    onClick={handleButtonClick}
                  >
                    Open Demo
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/technical-deep-dive" 
                    className="btn-secondary px-8 py-4"
                    onClick={handleButtonClick}
                  >
                    Technical Deep Dive
                  </Link>
                </motion.div>
              </div>
            </div>
            <div>
              <ChatPreview />
            </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Meet the Team</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              The minds behind the forge, crafting intelligent solutions for data challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-accent-color mb-2">{member.role}</p>
                <p className="text-text-secondary text-sm mb-4">{member.expertise}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-color transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-color transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
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

      {/* Key Features */}
      <section className="section bg-secondary-bg">
        <div className="container">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Key Features</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Everything you need to transform your data into actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="card p-8"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-bg">
        <div className="container">
          <motion.div
            ref={ctaRef}
            className="card text-center max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-color/5 to-accent-secondary/5" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Forge Your Data?</h2>
              <p className="text-text-secondary text-xl mb-8">
                Start a conversation with your database and turn raw data into clarity.
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
                  <Link
                    to="/project-showcase"
                    className="btn-primary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                    onClick={handleButtonClick}
                  >
                    <span>Launch Demo</span>
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/technical-deep-dive"
                    className="btn-secondary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                    onClick={handleButtonClick}
                  >
                    <span>Learn More</span>
                    <Code className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 