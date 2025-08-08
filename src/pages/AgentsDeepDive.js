import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft,
  Crown,
  Brain,
  Settings,
  Database,
  Search,
  BarChart3,
  TrendingUp,
  RefreshCw,
  Users,
  Zap,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  Network
} from 'lucide-react';
import { hapticTick } from '../utils/haptics';

// Workflow Animation Component
const WorkflowAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const workflowSteps = [
    {
      id: 'user-prompt',
      title: 'User Prompt',
      description: '"Show me sales data for Q4"',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      position: { x: 10, y: 10 }
    },
    {
      id: 'orchestrator',
      title: 'Orchestrator Agent',
      description: 'Analyzes query and coordinates agents',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      position: { x: 50, y: 25 }
    },
    {
      id: 'database-interaction',
      title: 'Database Interaction',
      description: 'Queries sales database for Q4 data',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      position: { x: 20, y: 50 }
    },
    {
      id: 'parallel-agents',
      title: 'Coordinated Agents',
      description: 'Analysis & Chart agents work together',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      position: { x: 80, y: 50 }
    },
    {
      id: 'formatting',
      title: 'Response Formatting',
      description: 'Makes data user-friendly',
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      position: { x: 50, y: 75 }
    },
    {
      id: 'output',
      title: 'Output Generated',
      description: 'Complete response with charts',
      icon: BarChart3,
      color: 'from-pink-500 to-rose-500',
      position: { x: 20, y: 90 }
    },
    {
      id: 'validation',
      title: 'Output Validation',
      description: 'Quality check before delivery',
      icon: CheckCircle2,
      color: 'from-purple-500 to-violet-500',
      position: { x: 80, y: 90 }
    }
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 6 }
  ];

  const startAnimation = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    workflowSteps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        if (index === workflowSteps.length - 1) {
          setTimeout(() => setIsPlaying(false), 1000);
        }
      }, index * 800);
    });
  };

  React.useEffect(() => {
    startAnimation();
    const interval = setInterval(startAnimation, 8000); // Restart every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="workflow-container">
      {/* Control Button */}
      <div className="text-center mb-6">
        <button
          onClick={startAnimation}
          className="btn-secondary px-4 py-2 text-sm inline-flex items-center space-x-2"
          disabled={isPlaying}
        >
          <Zap className="w-4 h-4" />
          <span>{isPlaying ? 'Playing...' : 'Replay Animation'}</span>
        </button>
      </div>

      {/* Workflow Visualization */}
      <div className="relative w-full bg-forge-bg border border-forge-border rounded-lg p-6" style={{ height: '400px' }}>
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {connections.map((connection, index) => {
            const fromStep = workflowSteps[connection.from];
            const toStep = workflowSteps[connection.to];
            const x1 = `${fromStep.position.x}%`;
            const y1 = `${fromStep.position.y}%`;
            const x2 = `${toStep.position.x}%`;
            const y2 = `${toStep.position.y}%`;
            
            const isActive = currentStep >= connection.from && currentStep >= connection.to;
            
            return (
              <motion.line
                key={`connection-${index}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isActive ? '#ff6b35' : 'rgba(255, 107, 53, 0.2)'}
                strokeWidth={isActive ? '2' : '1'}
                strokeDasharray={isActive ? '0' : '4 4'}
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: isActive ? 1 : 0.3,
                  stroke: isActive ? '#ff6b35' : 'rgba(255, 107, 53, 0.2)'
                }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </svg>

        {/* Workflow Steps */}
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <motion.div
              key={step.id}
              className="absolute"
              style={{ 
                left: `${step.position.x}%`, 
                top: `${step.position.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 2
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isActive ? 1 : 0.7,
                opacity: isActive ? 1 : 0.4
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Node */}
              <motion.div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} 
                           flex items-center justify-center shadow-lg border-2 
                           ${isCurrent ? 'border-white' : 'border-white/20'}`}
                animate={{ 
                  scale: isCurrent ? [1, 1.1, 1] : 1,
                  boxShadow: isCurrent 
                    ? '0 0 20px rgba(255, 107, 53, 0.5)' 
                    : '0 4px 10px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ 
                  scale: { duration: 0.6, repeat: isCurrent ? Infinity : 0 },
                  boxShadow: { duration: 0.3 }
                }}
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Step Label */}
              <motion.div
                className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isActive ? 1 : 0.6, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-secondary-bg border border-forge-border rounded px-2 py-1 shadow-lg max-w-24">
                  <h4 className="text-xs font-medium text-text-primary mb-1">{step.title}</h4>
                  <p className="text-xs text-text-secondary leading-tight">{step.description}</p>
                </div>
              </motion.div>

              {/* Current Step Indicator */}
              {isCurrent && (
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-accent-color"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
          );
        })}

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            {workflowSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index <= currentStep ? 'bg-accent-color' : 'bg-forge-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Data Flow Particles */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 3 }}
          >
            {connections.map((connection, index) => {
              const fromStep = workflowSteps[connection.from];
              const toStep = workflowSteps[connection.to];
              
              return (
                <motion.div
                  key={`particle-${index}`}
                  className="absolute w-2 h-2 bg-accent-color rounded-full"
                  style={{
                    left: `${fromStep.position.x}%`,
                    top: `${fromStep.position.y}%`,
                  }}
                  animate={{
                    left: `${toStep.position.x}%`,
                    top: `${toStep.position.y}%`,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: connection.from * 0.8,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Current Step Description */}
      <div className="mt-6 text-center">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 forge rounded-lg"
        >
          <h3 className="font-semibold text-text-primary text-sm mb-2">
            Step {currentStep + 1}: {workflowSteps[currentStep]?.title}
          </h3>
          <p className="text-text-secondary text-xs">
            {workflowSteps[currentStep]?.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const AgentsDeepDive = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Enhanced Agents Data (same as Landing.js but we'll show all details)
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
      position: { x: 50, y: 20 },
      connections: ['DecisionAgent', 'DatabaseAgent', 'WebSearchAgent', 'ChartGeneratorAgent', 'ContextAgent']
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
      position: { x: 85, y: 35 },
      connections: ['ResponseFormatterAgent', 'OrchestratorAgent']
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
      position: { x: 85, y: 65 },
      connections: ['DecisionAgent']
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
      position: { x: 50, y: 80 },
      connections: ['OrchestratorAgent', 'ChartGeneratorAgent', 'AnalysisAgent']
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
      position: { x: 15, y: 65 },
      connections: ['OrchestratorAgent', 'AnalysisAgent']
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
      position: { x: 15, y: 35 },
      connections: ['OrchestratorAgent', 'DatabaseAgent', 'AnalysisAgent']
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
      position: { x: 20, y: 50 },
      connections: ['DatabaseAgent', 'ChartGeneratorAgent', 'WebSearchAgent']
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
      position: { x: 80, y: 50 },
      connections: ['OrchestratorAgent']
    }
  ];

  // Data flow visualization
  const dataFlow = [
    { from: 'User Query', to: 'OrchestratorAgent', step: 1 },
    { from: 'OrchestratorAgent', to: 'ContextAgent', step: 2 },
    { from: 'OrchestratorAgent', to: 'DatabaseAgent', step: 2 },
    { from: 'OrchestratorAgent', to: 'WebSearchAgent', step: 2 },
    { from: 'DatabaseAgent', to: 'AnalysisAgent', step: 3 },
    { from: 'DatabaseAgent', to: 'ChartGeneratorAgent', step: 3 },
    { from: 'WebSearchAgent', to: 'AnalysisAgent', step: 3 },
    { from: 'AnalysisAgent', to: 'ChartGeneratorAgent', step: 4 },
    { from: 'OrchestratorAgent', to: 'DecisionAgent', step: 5 },
    { from: 'DecisionAgent', to: 'ResponseFormatterAgent', step: 6 },
    { from: 'ResponseFormatterAgent', to: 'Final Response', step: 7 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero" id="home" ref={heroRef}>
        <motion.div
          aria-hidden
          style={{ y: yLayer1 }}
          className="absolute -top-10 -left-12 w-48 h-48 rounded-full opacity-15"
        >
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,107,53,0.25), transparent 60%)' }} />
        </motion.div>
        
        <div className="hero-content" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Back button */}
            <div className="mb-6">
              <button 
                onClick={() => {
                  hapticTick(5);
                  window.history.back();
                }}
                className="inline-flex items-center space-x-2 text-text-secondary hover:text-accent-color transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to overview</span>
              </button>
            </div>

            <div className="inline-flex items-center space-x-2 forge rounded-full px-4 py-2 mb-4">
              <Network className="w-3 h-3 text-accent-color" />
              <span className="text-xs uppercase tracking-wide text-text-secondary">Agent Network</span>
            </div>

            <h1 className="hero-title mobile-title mb-3">Our AI Agent Team</h1>
            <p className="hero-subtitle mobile-subtitle mb-6">
              Discover how {agents.length} specialized agents work together as an interconnected intelligent system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Network Visualization */}
      <section className="section" id="network">
        <div className="container">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-3">Agent Network Visualization</h2>
            <p className="text-text-secondary text-sm max-w-md mx-auto">
              See how our agents are interconnected and collaborate in real-time
            </p>
          </motion.div>

          {/* Interactive Network Diagram */}
          <div className="relative w-full max-w-lg mx-auto mb-8" style={{ height: '400px' }}>
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {agents.map((agent, index) => 
                agent.connections?.map((connectionName, connIndex) => {
                  const connectedAgent = agents.find(a => a.name === connectionName);
                  if (!connectedAgent) return null;
                  
                  const x1 = (agent.position.x / 100) * 100 + '%';
                  const y1 = (agent.position.y / 100) * 100 + '%';
                  const x2 = (connectedAgent.position.x / 100) * 100 + '%';
                  const y2 = (connectedAgent.position.y / 100) * 100 + '%';
                  
                  return (
                    <motion.line
                      key={`${agent.name}-${connectionName}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255, 107, 53, 0.3)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  );
                })
              )}
            </svg>

            {/* Agent Nodes */}
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  className="absolute cursor-pointer"
                  style={{ 
                    left: `${agent.position.x}%`, 
                    top: `${agent.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    hapticTick(5);
                    setSelectedAgent(selectedAgent === agent.name ? null : agent.name);
                  }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${agent.color} 
                                 flex items-center justify-center shadow-lg border-2 
                                 ${selectedAgent === agent.name ? 'border-accent-color' : 'border-white/20'}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium text-text-primary bg-secondary-bg px-2 py-1 rounded">
                      {agent.shortName}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="text-center mb-6">
            <p className="text-xs text-text-secondary mb-2">Tap any agent to see details</p>
            <div className="inline-flex items-center space-x-2 text-xs text-text-secondary">
              <div className="w-3 h-0.5 bg-accent-color opacity-50"></div>
              <span>Data flow connections</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Details */}
      {selectedAgent && (
        <section className="section bg-secondary-bg">
          <div className="container">
            {(() => {
              const agent = agents.find(a => a.name === selectedAgent);
              const Icon = agent.icon;
              return (
                <motion.div
                  className="max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card p-6">
                    {/* Agent Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${agent.color} 
                                     flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">{agent.name}</h3>
                        <p className="text-accent-color font-medium">{agent.role}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{agent.description}</p>
                    
                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-3 text-text-primary text-sm flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-color" />
                        <span>Key Responsibilities</span>
                      </h4>
                      <div className="space-y-2">
                        {agent.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent-color rounded-full flex-shrink-0 mt-2" />
                            <span className="text-text-secondary text-xs leading-relaxed">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connections */}
                    <div>
                      <h4 className="font-semibold mb-3 text-text-primary text-sm flex items-center space-x-2">
                        <GitBranch className="w-4 h-4 text-accent-secondary" />
                        <span>Connected Agents</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.connections?.map((connectionName) => {
                          const connectedAgent = agents.find(a => a.name === connectionName);
                          return (
                            <span
                              key={connectionName}
                              className="inline-flex items-center space-x-1 bg-forge-bg px-2 py-1 rounded text-xs text-text-secondary border border-forge-border"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${connectedAgent?.color || 'from-gray-400 to-gray-500'}`}></div>
                              <span>{connectedAgent?.shortName || connectionName}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Animated Workflow Visualization */}
      <section className="section bg-secondary-bg">
        <div className="container">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-3">Workflow Visualization</h2>
            <p className="text-text-secondary text-sm max-w-md mx-auto">
              Watch how your query flows through our intelligent agent system
            </p>
          </motion.div>

          {/* Animated Workflow */}
          <div className="max-w-lg mx-auto">
            <WorkflowAnimation />
          </div>
        </div>
      </section>

      {/* Data Flow Process */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-3">Detailed Process Breakdown</h2>
            <p className="text-text-secondary text-sm max-w-md mx-auto">
              Step-by-step breakdown of how agents collaborate
            </p>
          </motion.div>

          {/* Flow Steps */}
          <div className="space-y-4 max-w-md mx-auto">
            {[
              { step: 1, title: 'User Query', description: 'Question submitted via chat interface', icon: MessageSquare },
              { step: 2, title: 'Orchestrator Analysis', description: 'Main coordinator analyzes and routes the request', icon: Crown },
              { step: 3, title: 'Parallel Processing', description: 'Multiple agents work simultaneously on different aspects', icon: Users },
              { step: 4, title: 'Data Integration', description: 'Results are combined and analyzed for insights', icon: TrendingUp },
              { step: 5, title: 'Quality Check', description: 'Decision agent evaluates response quality', icon: Brain },
              { step: 6, title: 'Response Formatting', description: 'Formatter makes the response user-friendly', icon: Settings },
              { step: 7, title: 'Final Delivery', description: 'Complete answer with charts and insights', icon: CheckCircle2 }
            ].map((flowStep, index) => {
              const Icon = flowStep.icon;
              return (
                <motion.div
                  key={flowStep.step}
                  className="flex items-center space-x-4 p-4 forge rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-color to-accent-secondary rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-text-primary text-sm">{flowStep.title}</h4>
                    <p className="text-text-secondary text-xs">{flowStep.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-accent-color font-bold text-sm">{flowStep.step}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back to Main */}
      <section className="section bg-secondary-bg">
        <div className="container">
          <motion.div 
            className="text-center max-w-sm mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 forge rounded-lg">
              <Network className="w-12 h-12 text-accent-color mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-3">Ready to experience our agent network?</h2>
              <p className="text-text-secondary text-sm mb-6">
                See how these interconnected agents can transform your data conversations
              </p>
              
              <button 
                className="btn-primary w-full py-3 inline-flex items-center justify-center space-x-2"
                onClick={() => {
                  hapticTick(10);
                  window.location.href = '/#architecture';
                }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgentsDeepDive;
