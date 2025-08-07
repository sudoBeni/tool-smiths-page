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
      {/* Hero */}
      <section className="hero" id="home" ref={heroRef}>
        {/* Parallax background glows */}
        <motion.div
          aria-hidden
          style={{ y: yLayer1 }}
          className="absolute -top-20 -left-24 w-72 h-72 rounded-full opacity-20"
        >
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,107,53,0.35), transparent 60%)' }} />
        </motion.div>
        <motion.div
          aria-hidden
          style={{ y: yLayer2 }}
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-15"
        >
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,215,0,0.25), transparent 60%)' }} />
        </motion.div>
        <div className="hero-content" style={{ position: 'relative' }}>
          <MiniSpark />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center space-x-3 forge rounded-full px-5 py-2 mb-6">
              <Hammer className="w-4 h-4 text-accent-color" />
              <span className="text-xs uppercase tracking-wide text-text-secondary">Data Forge</span>
            </div>

            <h1 className="hero-title mb-4">Forge answers from your data</h1>
            <p className="hero-subtitle mb-10">Talk to your database. Agents do the heavy lifting, you get crisp, forged results.</p>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="mb-10">
              <LoadingHammer size={160} text="Heating the forge…" />
            </motion.div>

            <div className="flex flex-col gap-4 items-center">
              <a href="#demo" className="btn-secondary px-8 py-4 inline-flex items-center space-x-2" onClick={() => hapticTick(10)}>
                <Sparkles className="w-4 h-4" />
                <span>How it works</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Demo video */}
      <section id="demo" className="section">
        <div className="container">
          <motion.h2 className="text-4xl font-bold mb-6 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Demo video</motion.h2>
          <motion.p className="text-text-secondary text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            A short walkthrough of chatting with your data.
          </motion.p>

          <div className="max-w-xl mx-auto">
            <VideoShowcase title="Data Forge Demo" src="" poster="" />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-secondary-bg" id="tech-stack">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Built with modern technologies for maximum performance and reliability.
            </p>
            <motion.div
              className="mt-6 inline-flex items-center space-x-2 text-accent-color cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = '/technical-deep-dive'}
            >
              <span className="text-sm font-medium">Deep dive into architecture</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="card text-center p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
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

      {/* Animated Data Flow with Symbols */}
      <section className="section" id="data-flow">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Live Data Flow Visualization</h2>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto">
              Watch the red energy stream flow through our orchestrated system. Click any symbol to explore its role.
            </p>
            <motion.div
              className="mt-6 inline-flex items-center space-x-2 text-accent-color cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = '/technical-deep-dive'}
            >
              <span className="text-sm font-medium">See detailed orchestration patterns</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Animated Flow Pipeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Flow Container */}
            <div className="relative bg-slate-900/20 rounded-2xl p-8 border border-slate-700/30">
              
              {/* Animated Stream Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main flow line - adjusted for spaced layout */}
                <motion.path
                  d="M 10% 50% L 25% 50% L 40% 50% L 55% 50% L 70% 50% L 90% 50%"
                  stroke="url(#flowGradient)"
                  strokeWidth="4"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </svg>

              {/* Flow Symbols - More Spaced Layout */}
              <div className="relative flex justify-between items-center px-8 py-12" style={{ zIndex: 2 }}>
                
                {/* User Input */}
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setSelectedAgent(0)}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center shadow-lg group-hover:border-red-400 transition-all duration-300">
                    <MessageSquare className="w-8 h-8 text-gray-300 group-hover:text-red-400" />
                  </div>
                  <span className="text-xs font-medium mt-3 text-center">User Input</span>
                </motion.div>

                {/* Orchestrator */}
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setSelectedAgent(1)}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center shadow-xl group-hover:border-red-400 transition-all duration-300 relative">
                    <Crown className="w-10 h-10 text-gray-300 group-hover:text-red-400" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-red-400 opacity-0 group-hover:opacity-100"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <span className="text-xs font-medium mt-3 text-center">Orchestrator</span>
                </motion.div>

                {/* Multi-Agent Processing */}
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setSelectedAgent(2)}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center shadow-lg group-hover:border-red-400 transition-all duration-300">
                    <Users className="w-8 h-8 text-gray-300 group-hover:text-red-400" />
                  </div>
                  <span className="text-xs font-medium mt-3 text-center">Multi-Agent</span>
                </motion.div>

                {/* Analysis */}
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setSelectedAgent(3)}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center shadow-lg group-hover:border-red-400 transition-all duration-300">
                    <Eye className="w-8 h-8 text-gray-300 group-hover:text-red-400" />
                  </div>
                  <span className="text-xs font-medium mt-3 text-center">Analysis</span>
                </motion.div>

                {/* Enhancement */}
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 }}
                  onClick={() => setSelectedAgent(4)}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center shadow-lg group-hover:border-red-400 transition-all duration-300">
                    <RefreshCw className="w-8 h-8 text-gray-300 group-hover:text-red-400" />
                  </div>
                  <span className="text-xs font-medium mt-3 text-center">Enhancement</span>
                </motion.div>

                {/* Final Output */}
                <motion.div
                  className="flex flex-col items-center cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  onClick={() => setSelectedAgent(5)}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gray-600 border-2 border-gray-500 flex items-center justify-center shadow-lg group-hover:border-red-400 transition-all duration-300">
                    <CheckCircle2 className="w-8 h-8 text-gray-300 group-hover:text-red-400" />
                  </div>
                  <span className="text-xs font-medium mt-3 text-center">Final Output</span>
                </motion.div>
              </div>
            </div>

            {/* Selected Step Details - with bounds checking */}
            {selectedAgent >= 0 && selectedAgent < dataFlowSteps.length && dataFlowSteps[selectedAgent] && (
              <motion.div
                key={selectedAgent}
                className="mt-8 card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${dataFlowSteps[selectedAgent].gradient} flex items-center justify-center shadow-lg`}>
                    {React.createElement(dataFlowSteps[selectedAgent].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{dataFlowSteps[selectedAgent].title}</h3>
                    <p className="text-accent-color font-medium">Step {dataFlowSteps[selectedAgent].step} of 6</p>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4">{dataFlowSteps[selectedAgent].description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {dataFlowSteps[selectedAgent].details && dataFlowSteps[selectedAgent].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-slate-800/20 rounded-lg">
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                      <span className="text-text-secondary text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Flow Legend */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-1 bg-red-400 rounded-full"></div>
                  <span>Data Stream</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gray-600 border border-gray-500"></div>
                  <span>Processing Node</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="w-4 h-4 text-gray-400" />
                  <span>Central Orchestrator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents - Simplified Layout */}
      <section className="section bg-secondary-bg" id="ai-agents">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">AI Agent System</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-6">
              Eight specialized agents working together. Click any agent to learn more.
            </p>
            <motion.div
              className="inline-flex items-center space-x-2 text-accent-color cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = '/technical-deep-dive'}
            >
              <span className="text-sm font-medium">View technical details</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Simplified Grid Layout - mobile-first */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8" role="list">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${agent.shortName} agent card`}
                  className={`card p-6 cursor-pointer transition-all duration-300 ${
                    selectedAgent === index ? 'ring-2 ring-accent-color bg-accent-color/5' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedAgent(index)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedAgent(index); e.preventDefault(); } }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-text-primary">{agent.shortName}</h3>
                    <p className="text-accent-color text-sm font-medium mb-3" style={{ wordBreak: 'break-word' }}>{agent.role}</p>
                    <p className="text-text-secondary text-xs leading-relaxed" style={{ wordBreak: 'break-word' }}>{agent.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Agent Details Panel - Only shows when clicked */}
          {selectedAgent >= 0 && selectedAgent < agents.length && agents[selectedAgent] && (
            <motion.div
              key={selectedAgent}
              className="card p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Agent Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${agents[selectedAgent].color} flex items-center justify-center shadow-lg`}
                >
                  {React.createElement(agents[selectedAgent].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary" style={{ wordBreak: 'break-word' }}>{agents[selectedAgent].name}</h3>
                  <p className="text-accent-color font-medium" style={{ wordBreak: 'break-word' }}>{agents[selectedAgent].role}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Users className="w-5 h-5 text-accent-color" />
                    <span>Core Responsibilities</span>
                  </h4>
                  <div className="space-y-3">
                    {agents[selectedAgent].responsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start space-x-3" style={{ wordBreak: 'break-word' }}>
                        <CheckCircle2 className="w-4 h-4 text-accent-color flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm leading-relaxed">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-accent-color" />
                    <span>Key Capabilities</span>
                  </h4>
                  <div className="space-y-3">
                    {agents[selectedAgent].capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start space-x-3" style={{ wordBreak: 'break-word' }}>
                        <div className="w-1.5 h-1.5 bg-accent-color rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-text-secondary text-sm leading-relaxed">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agent Status */}
              <div className="mt-8 p-4 bg-accent-color/5 rounded-lg border border-accent-color/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-accent-color">Agent Status: Active & Ready</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Architecture Overview - Compact */}
      <section className="section" id="architecture">
        <div className="container">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Robust, scalable architecture for high-performance data processing.
            </p>
            <motion.div
              className="mt-4 inline-flex items-center space-x-2 text-accent-color cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = '/technical-deep-dive'}
            >
              <span className="text-sm font-medium">View detailed diagrams</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {architectureComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <motion.div
                  key={component.layer}
                  className="card p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon className="w-6 h-6" style={{ color: component.color }} />
                    <h3 className="text-base font-semibold">{component.layer}</h3>
                  </div>
                  <div className="space-y-1">
                    {component.components.map((comp, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-color rounded-full flex-shrink-0"></div>
                        <span className="text-text-secondary text-xs">{comp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;


