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

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [howRef, howInView] = useInView({ triggerOnce: true });
  const [demoRef, demoInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true });
  const [techRef, techInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });

  const teamMembers = [
    {
      name: 'Benjamin Amhof',
      role: 'AI & Machine Learning Specialist',
      expertise: 'BSc Student in AI & Machine Learning at HSLU',
      avatar: '👨‍💻',
      contribution: 'Led the multi-agent system design and AI integration',
      color: '#ff6b35',
      linkedin: 'https://www.linkedin.com/in/benjamin-amhof/',
      github: 'https://github.com/sudoBeni'
    },
    {
      name: 'Jan Wahli',
      role: 'Frontend Developer',
      expertise: 'BSc Student in AI & Machine Learning at HSLU',
      avatar: '👨‍💻',
      contribution: 'Built the responsive React frontend with real-time chat interface',
      color: '#ffd700',
      linkedin: 'https://www.linkedin.com/in/jan-wahli/',
      github: 'https://github.com/jan-5'
    },
    {
      name: 'Noel Jensen',
      role: 'Backend Architect',
      expertise: 'BSc Student in AI & Machine Learning at HSLU',
      avatar: '👨‍💻',
      contribution: 'Implemented FastAPI backend and database architecture',
      color: '#ff8c42',
      linkedin: 'https://www.linkedin.com/in/noel-jensen-/',
      github: 'https://github.com/noeljen'
    }
  ];

  const technologies = [
    { 
      name: 'Agno AI Agent Framework', 
      icon: Crown, 
      color: '#ff6b35', 
      description: 'Core AI Agent Orchestration',
      featured: true,
      glow: true
    },
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
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'FastAPI backend with async processing capabilities for handling complex database queries and AI responses.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Intelligent Chat Interface',
      description: 'React frontend with real-time updates and context-aware conversation management.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Response Validation',
      description: 'Comprehensive validation system ensuring accuracy and reliability of AI-generated responses.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting capabilities with interactive data visualizations.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Web Search Integration',
      description: 'Focused web search capabilities to enhance AI responses with real-time information.',
      gradient: 'from-indigo-500 to-blue-500'
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
            {/* Forge Badge */}
            <motion.div
              className="inline-flex items-center space-x-3 forge rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Hammer className="w-5 h-5 text-accent-color" />
              <span className="text-accent-color font-medium uppercase tracking-wide">Data Forge</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="hero-title mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Forge Your Data. Instantly.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-subtitle mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Chat with your database and transform raw data into precise, decision-ready insights — crafted by intelligent agents.
            </motion.p>

            {/* Loading Hammer Animation */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <LoadingHammer size={180} text="Forging Data into Shape…" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/project-showcase"
                className="btn-primary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
              >
                <span>Try the Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#how"
                className="btn-secondary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
              >
                <span>See How It Works</span>
                <Workflow className="w-5 h-5" />
              </a>
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
                <motion.div key={s.title} className="card text-left" initial={{ opacity: 0, y: 24 }} animate={howInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
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
                <Link to="/project-showcase" className="btn-primary px-8 py-4">Open Demo</Link>
                <Link to="/technical-deep-dive" className="btn-secondary px-8 py-4">Technical Deep Dive</Link>
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
            <h2 className="text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
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
                whileHover={{ y: -8 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{member.avatar}</div>
                  <h3 className="text-2xl font-semibold mb-3">{member.name}</h3>
                  <p className="text-accent-color font-medium mb-4 uppercase tracking-wide">{member.role}</p>
                  <p className="text-text-secondary text-sm mb-4">{member.expertise}</p>
                  <p className="text-text-secondary text-sm mb-6">{member.contribution}</p>
                  
                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full forge hover:bg-tertiary-bg transition-colors duration-200 group-hover:scale-110"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-white" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full forge hover:bg-tertiary-bg transition-colors duration-200 group-hover:scale-110"
                      title="GitHub Profile"
                    >
                      <Github className="w-5 h-5 text-text-secondary group-hover:text-white" />
                    </a>
                  </div>
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
              Modern technologies powering our sophisticated multi-agent system.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className={`card text-center group relative ${
                    tech.featured 
                      ? 'md:col-span-2 lg:col-span-2 border-2 border-accent-color/30 forge' 
                      : ''
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={techInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  {/* Special glow effect for featured technology */}
                  {tech.glow && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-color/10 to-accent-secondary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  
                  <div className="relative z-10">
                    <Icon 
                      className={`mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                        tech.featured ? 'w-16 h-16' : 'w-12 h-12'
                      }`} 
                      style={{ color: tech.color }} 
                    />
                    <h3 className={`font-semibold mb-2 ${tech.featured ? 'text-lg' : ''}`}>
                      {tech.name}
                    </h3>
                    <p className="text-text-secondary text-xs">{tech.description}</p>
                    
                    {/* Featured badge */}
                    {tech.featured && (
                      <motion.div
                        className="absolute -top-2 -right-2 bg-gradient-to-r from-accent-color to-accent-secondary text-white text-xs px-3 py-1 rounded-full font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        CORE
                      </motion.div>
                    )}
                  </div>
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
                <Link
                  to="/project-showcase"
                  className="btn-primary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                >
                  <span>Launch Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/technical-deep-dive"
                  className="btn-secondary flex items-center justify-center space-x-3 px-8 py-4 text-lg group"
                >
                  <span>Learn More</span>
                  <Code className="w-5 h-5" />
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