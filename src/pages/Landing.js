import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Hammer, 
  Sparkles, 
  Database, 
  Bot, 
  CheckCircle2, 
  MessageSquare, 
  Code,
  Server,
  Cloud,
  Package,
  GitBranch,
  Zap,
  Shield,
  BarChart3,
  Users,
  Eye,
  ArrowRight,
  Brain,
  Crown,
  FileText,
  TrendingUp,
  Cpu,
  Settings,
  Search,
  RefreshCw
} from 'lucide-react';
import LoadingHammer from '../components/LoadingHammer';
import ChatPreview from '../components/ChatPreview';
import { hapticTick } from '../utils/haptics';
import MiniSpark from '../components/MiniSpark';
import VideoShowcase from '../components/VideoShowcase';

const Landing = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = '';
  };

  // Technology Stack Data
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

  // Enhanced Agents Data with Complete Information
  const agents = [
    {
      name: 'OrchestratorAgent',
      shortName: 'Orchestrator',
      role: 'Main Coordinator and Workflow Manager',
      description: 'Acts as the central brain that coordinates all other agents and manages the entire conversation workflow from start to finish.',
      responsibilities: [
        'Acts as the central brain that coordinates all other agents',
        'Manages the entire conversation workflow from start to finish',
        'Makes strategic decisions about which agents to use and when',
        'Handles context management across conversation turns',
        'Integrates responses from multiple agents into coherent answers'
      ],
      capabilities: [
        'Analyzes user queries to determine the best response strategy',
        'Coordinates between database queries, web searches, and analysis',
        'Manages conversation context and history',
        'Generates chart specifications when visualizations are needed',
        'Handles clarification requests when user input is unclear',
        'Tracks response IDs for validation purposes',
        'Integrates web search results with internal data'
      ],
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      accentColor: '#f59e0b',
      position: { x: 50, y: 20 } // Center top
    },
    {
      name: 'DecisionAgent',
      shortName: 'Decision',
      role: 'Response Quality Evaluator',
      description: 'Evaluates whether responses need additional formatting or enhancement, acting as a quality control checkpoint.',
      responsibilities: [
        'Evaluates whether responses need additional formatting or enhancement',
        'Acts as a quality control checkpoint before final response delivery',
        'Determines if raw data output needs to be made more user-friendly'
      ],
      capabilities: [
        'Analyzes response content to detect raw database output',
        'Identifies technical jargon that needs simplification',
        'Makes intelligent decisions about when formatting is necessary',
        'Recognizes different types of responses (data dumps vs. clean answers)',
        'Helps maintain consistent response quality across the system'
      ],
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      accentColor: '#8b5cf6',
      position: { x: 85, y: 35 } // Top right
    },
    {
      name: 'ResponseFormatterAgent',
      shortName: 'Formatter',
      role: 'User Experience Enhancer',
      description: 'Transforms technical or raw responses into user-friendly format, making complex data more readable and understandable.',
      responsibilities: [
        'Transforms technical or raw responses into user-friendly format',
        'Makes complex data more readable and understandable',
        'Ensures responses are well-structured and clear'
      ],
      capabilities: [
        'Converts database query results into natural language explanations',
        'Structures information with proper formatting (lists, paragraphs, etc.)',
        'Removes technical artifacts and improves readability',
        'Maintains data accuracy while improving presentation',
        'Adapts tone and complexity based on the content type'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      accentColor: '#14b8a6',
      position: { x: 85, y: 65 } // Right middle
    },
    {
      name: 'DatabaseAgent',
      shortName: 'Database',
      role: 'Data Query Specialist',
      description: 'Handles all interactions with internal company databases, executing SQL queries and providing structured data.',
      responsibilities: [
        'Handles all interactions with internal company databases',
        'Executes SQL queries and data retrieval operations',
        'Provides structured data for analysis and visualization'
      ],
      capabilities: [
        'Translates natural language questions into database queries',
        'Retrieves relevant data from multiple database sources',
        'Handles complex joins and data relationships',
        'Optimizes queries for performance',
        'Returns structured data that other agents can process'
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      accentColor: '#3b82f6',
      position: { x: 50, y: 80 } // Bottom center
    },
    {
      name: 'WebSearchAgent',
      shortName: 'Web Search',
      role: 'External Information Gatherer',
      description: 'Searches external sources when internal data isn\'t sufficient, finding relevant web information to supplement answers.',
      responsibilities: [
        'Searches external sources when internal data isn\'t sufficient',
        'Finds relevant web information to supplement answers',
        'Provides current market data, news, and external context'
      ],
      capabilities: [
        'Performs intelligent web searches based on query context',
        'Filters and evaluates search results for relevance',
        'Integrates external data with internal information',
        'Handles real-time information needs',
        'Provides citations and source tracking'
      ],
      icon: Search,
      color: 'from-indigo-500 to-blue-500',
      accentColor: '#6366f1',
      position: { x: 15, y: 65 } // Left middle
    },
    {
      name: 'ChartGeneratorAgent',
      shortName: 'Chart Gen',
      role: 'Data Visualization Specialist',
      description: 'Creates appropriate visualizations for data responses, determining the best chart type for different data sets.',
      responsibilities: [
        'Creates appropriate visualizations for data responses',
        'Determines the best chart type for different data sets',
        'Generates chart specifications and configurations'
      ],
      capabilities: [
        'Analyzes data to recommend optimal visualization types',
        'Creates JSON specifications for various chart types (bar, line, pie, etc.)',
        'Handles data preprocessing for visualization',
        'Generates chart titles, labels, and formatting',
        'Ensures charts are accessible and meaningful'
      ],
      icon: BarChart3,
      color: 'from-pink-500 to-rose-500',
      accentColor: '#ec4899',
      position: { x: 15, y: 35 } // Top left
    },
    {
      name: 'AnalysisAgent',
      shortName: 'Analysis',
      role: 'Data Interpretation Specialist',
      description: 'Interprets data patterns and trends, providing insights and explanations for data findings.',
      responsibilities: [
        'Interprets data patterns and trends',
        'Provides insights and explanations for data findings',
        'Adds analytical context to raw data'
      ],
      capabilities: [
        'Identifies trends, patterns, and anomalies in data',
        'Generates explanatory text for data visualizations',
        'Provides business context and implications',
        'Performs statistical analysis and interpretation',
        'Creates summaries and key insights'
      ],
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      accentColor: '#10b981',
      position: { x: 20, y: 50 } // Left center
    },
    {
      name: 'ContextAgent',
      shortName: 'Context',
      role: 'Conversation Context Manager',
      description: 'Tracks and maintains conversation context across multiple turns, understanding references to previous questions.',
      responsibilities: [
        'Tracks and maintains conversation context across multiple turns',
        'Understands references to previous questions and responses',
        'Detects when conversation topics change'
      ],
      capabilities: [
        'Maintains conversation history and context',
        'Resolves pronouns and references ("show me more", "what about last year")',
        'Detects context switches and topic changes',
        'Provides continuity across conversation sessions',
        'Understands implicit references in follow-up questions'
      ],
      icon: RefreshCw,
      color: 'from-amber-500 to-yellow-500',
      accentColor: '#f59e0b',
      position: { x: 80, y: 50 } // Right center
    }
  ];

  // Enhanced Data Flow Steps
  const dataFlowSteps = [
    {
      step: '1',
      title: 'User Input Reception',
      description: 'Query received with unique ID and context',
      details: ['Chat interface submission', 'Request preprocessing', 'Parameter organization'],
      icon: MessageSquare,
      color: '#61dafb',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      step: '2',
      title: 'Orchestrator Coordination',
      description: 'Central agent decides workflow strategy',
      details: ['Analyzes request type', 'Selects specialized agents', 'Plans execution order'],
      icon: Crown,
      color: '#ffcc02',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      step: '3',
      title: 'Multi-Agent Processing',
      description: 'Specialized agents work in coordination',
      details: ['Database queries', 'Web search (if needed)', 'Context analysis'],
      icon: Users,
      color: '#10a37f',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      step: '4',
      title: 'Response Analysis',
      description: 'System evaluates generated response',
      details: ['Type detection', 'Format assessment', 'Enhancement decisions'],
      icon: Eye,
      color: '#8b5cf6',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      step: '5',
      title: 'Response Enhancement',
      description: 'Optional formatting for user-friendliness',
      details: ['Data structuring', 'Technical translation', 'Visualization prep'],
      icon: Settings,
      color: '#f59e0b',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      step: '6',
      title: 'Final Delivery',
      description: 'Complete response with metadata',
      details: ['Chart generation', 'Streaming updates', 'Error handling'],
      icon: CheckCircle2,
      color: '#ef4444',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  // Key Components for visual display
  const keyComponents = [
    {
      name: 'Orchestrator',
      role: 'Central Coordinator',
      description: 'Main traffic controller managing all agents',
      icon: Crown,
      color: '#ffcc02'
    },
    {
      name: 'Decision Agent',
      role: 'Enhancement Evaluator', 
      description: 'Determines if response needs formatting',
      icon: Brain,
      color: '#8b5cf6'
    },
    {
      name: 'Response Formatter',
      role: 'User Experience',
      description: 'Makes technical responses user-friendly',
      icon: Settings,
      color: '#f59e0b'
    },
    {
      name: 'Error Handler',
      role: 'Reliability Manager',
      description: 'Manages problems gracefully',
      icon: Shield,
      color: '#ef4444'
    }
  ];

  // Architecture Components
  const architectureComponents = [
    {
      layer: 'Frontend',
      components: ['React UI', 'Real-time Chat', 'Data Visualizations', 'Responsive Design'],
      icon: Code,
      color: '#61dafb'
    },
    {
      layer: 'Backend',
      components: ['FastAPI Server', 'WebSocket Connections', 'Agent Orchestration', 'API Gateway'],
      icon: Server,
      color: '#009688'
    },
    {
      layer: 'AI Layer',
      components: ['Azure OpenAI', 'Multi-Agent System', 'Context Management', 'Response Validation'],
      icon: Brain,
      color: '#0078d4'
    },
    {
      layer: 'Data Layer',
      components: ['SQLite Database', 'Redis Cache', 'Data Processing', 'Query Optimization'],
      icon: Database,
      color: '#003b57'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Mobile-Optimized Hero */}
      <section className="hero mobile-hero" id="home" ref={heroRef}>
        {/* Simplified background effects */}
        <motion.div
          aria-hidden
          style={{ y: yLayer1 }}
          className="absolute -top-10 -left-12 w-48 h-48 rounded-full opacity-15"
        >
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,107,53,0.25), transparent 60%)' }} />
        </motion.div>
        
        <div className="hero-content mobile-hero-content" style={{ position: 'relative' }}>
          <MiniSpark />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center space-x-2 forge rounded-full px-4 py-2 mb-4">
              <Hammer className="w-3 h-3 text-accent-color" />
              <span className="text-xs uppercase tracking-wide text-text-secondary">Data Forge</span>
            </div>

            <h1 className="hero-title mobile-title mb-3">Chat with Your Data</h1>
            <p className="hero-subtitle mobile-subtitle mb-6">AI agents transform complex database queries into simple conversations.</p>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="mb-6">
              <LoadingHammer size={120} text="Heating the forge…" />
            </motion.div>

            <div className="flex flex-col gap-3 items-center">
              <a href="#demo" className="btn-primary mobile-btn px-6 py-3 inline-flex items-center space-x-2" onClick={() => hapticTick(10)}>
                <Sparkles className="w-4 h-4" />
                <span>See Demo</span>
              </a>
              <a href="#ai-agents" className="text-accent-color text-sm inline-flex items-center space-x-1" onClick={() => hapticTick(5)}>
                <span>Meet the AI team</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Mobile-Optimized Demo */}
      <section id="demo" className="section mobile-demo">
        <div className="container">
          <motion.h2 className="text-2xl font-bold mb-3 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>See it in action</motion.h2>
          <motion.p className="text-text-secondary text-center mb-6 text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Watch how simple questions become instant insights
          </motion.p>

          <div className="max-w-sm mx-auto mb-4">
            <VideoShowcase title="Data Forge Demo" src="" poster="" />
          </div>
          
          {/* Quick highlights for mobile */}
          <motion.div 
            className="grid grid-cols-1 gap-3 max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 p-3 forge rounded-lg">
              <MessageSquare className="w-4 h-4 text-accent-color flex-shrink-0" />
              <span className="text-xs text-text-secondary">Ask questions in plain English</span>
            </div>
            <div className="flex items-center space-x-3 p-3 forge rounded-lg">
              <Bot className="w-4 h-4 text-accent-color flex-shrink-0" />
              <span className="text-xs text-text-secondary">AI agents work together</span>
            </div>
            <div className="flex items-center space-x-3 p-3 forge rounded-lg">
              <BarChart3 className="w-4 h-4 text-accent-color flex-shrink-0" />
              <span className="text-xs text-text-secondary">Get charts and insights</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile-Optimized Technology Stack */}
      <section className="section bg-secondary-bg mobile-tech-stack" id="tech-stack">
        <div className="container">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-2">Built with Modern Tech</h2>
            <p className="text-text-secondary text-sm max-w-xs mx-auto">
              Enterprise-grade stack for reliable performance
            </p>
          </motion.div>

          {/* Mobile-optimized 2x4 grid with key technologies */}
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-sm mx-auto">
            {technologies.slice(0, 8).map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="card text-center p-4 cursor-pointer mobile-tech-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <Icon className="w-6 h-6 mb-2" style={{ color: tech.color }} />
                    <p className="text-xs font-medium text-center">{tech.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Key benefits for mobile */}
          <motion.div 
            className="grid grid-cols-1 gap-2 max-w-xs mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 p-2 forge rounded">
              <Shield className="w-3 h-3 text-success-color flex-shrink-0" />
              <span className="text-xs text-text-secondary">Enterprise security</span>
            </div>
            <div className="flex items-center space-x-2 p-2 forge rounded">
              <Zap className="w-3 h-3 text-accent-color flex-shrink-0" />
              <span className="text-xs text-text-secondary">Real-time responses</span>
            </div>
            <div className="flex items-center space-x-2 p-2 forge rounded">
              <Package className="w-3 h-3 text-accent-secondary flex-shrink-0" />
              <span className="text-xs text-text-secondary">Containerized deployment</span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Mobile-First AI Agents Grid */}
      <section className="section mobile-ai-agents" id="ai-agents">
        <div className="container">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-2">Meet Our AI Agents</h2>
            <p className="text-text-secondary text-sm max-w-xs mx-auto">
              {agents.length} specialized agents working together as one intelligent system.
            </p>
          </motion.div>

          {/* Mobile-first grid: 3x3 on mobile, 4+ on larger screens */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 max-w-sm mx-auto mb-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  className="card p-2 mobile-agent-grid-card text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {/* Grid Card Content */}
                  <div className="flex flex-col items-center justify-center">
                    {/* Agent Icon */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${agent.color} 
                                   flex items-center justify-center flex-shrink-0 mb-2 shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Agent Name */}
                    <h3 className="font-medium text-text-primary text-xs leading-tight text-center">
                      {agent.shortName}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Deep Dive Button */}
          <motion.div 
            className="text-center max-w-sm mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-text-secondary mb-4">
              Want to see how they work together as an interconnected team?
            </p>
            <button 
              className="btn-secondary px-6 py-3 inline-flex items-center space-x-2"
              onClick={() => {
                hapticTick(10);
                window.location.href = '/agents-deep-dive';
              }}
            >
              <Users className="w-4 h-4" />
              <span>Deep dive into our agents</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mobile-Optimized Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
          <motion.div
            className="relative w-full max-w-sm bg-secondary-bg border border-forge-border rounded-t-2xl p-6 z-10 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Mobile-friendly header */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-text-primary truncate">{modalTitle}</h4>
              <button 
                onClick={closeModal} 
                className="text-text-secondary hover:text-accent-color text-sm bg-forge-bg px-3 py-1 rounded-full border border-forge-border"
              >
                Done
              </button>
            </div>
            
            {/* Scrollable content */}
            <div className="text-text-secondary text-sm leading-relaxed">
              {modalContent}
            </div>
            
            {/* Mobile swipe indicator */}
            <div className="flex justify-center mt-4">
              <div className="w-8 h-1 bg-text-secondary opacity-30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Customer Acquisition Form */}
      <section className="section mobile-cta" id="architecture">
        <div className="container">
          <motion.div 
            className="text-center max-w-sm mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 forge rounded-lg">
              <Hammer className="w-12 h-12 text-accent-color mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-3">Ready to get your own data forged?</h2>
              <p className="text-text-secondary text-sm mb-6">
                Let's discuss how AI agents can transform your data conversations
              </p>
              
              {/* Contact Form */}
              <form className="space-y-4 text-left" onSubmit={async (e) => {
                e.preventDefault();
                hapticTick(15);
                
                // Get form data
                const formData = new FormData(e.target);
                const customerData = {
                  firstName: formData.get('firstName'),
                  lastName: formData.get('lastName'),
                  email: formData.get('email'),
                  company: formData.get('company'),
                  position: formData.get('position'),
                  submittedAt: new Date().toISOString()
                };
                
                try {
                  // Send data to backend to save to file
                  const response = await fetch('/api/save-customer', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(customerData)
                  });
                  
                  if (response.ok) {
                    // Show success message
                    alert('Thank you! We\'ll be in touch soon.');
                    e.target.reset();
                  } else {
                    throw new Error('Failed to save customer data');
                  }
                } catch (error) {
                  console.error('Error saving customer data:', error);
                  alert('Sorry, there was an error. Please try again.');
                }
              }}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-text-secondary mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 bg-secondary-bg border border-forge-border rounded-lg text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-text-secondary mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 bg-secondary-bg border border-forge-border rounded-lg text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-text-secondary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-secondary-bg border border-forge-border rounded-lg text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color transition-colors"
                    placeholder="john.smith@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-text-secondary mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-3 py-2 bg-secondary-bg border border-forge-border rounded-lg text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-xs font-medium text-text-secondary mb-1">
                    Position Title
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    className="w-full px-3 py-2 bg-secondary-bg border border-forge-border rounded-lg text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color transition-colors"
                    placeholder="Data Manager"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full py-3 inline-flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Let's Connect</span>
                </button>
              </form>
              
              <div className="mt-6 pt-4 border-t border-forge-border">
                <div className="flex justify-center items-center space-x-2 text-xs text-text-secondary">
                  <Shield className="w-3 h-3 text-success-color" />
                  <span>Secure</span>
                  <div className="w-1 h-1 bg-text-secondary rounded-full" />
                  <Users className="w-3 h-3 text-accent-color" />
                  <span>Personal consultation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;


