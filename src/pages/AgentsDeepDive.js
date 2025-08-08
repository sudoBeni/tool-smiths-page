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
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Network,
  FileText,
  Shield,
  Eye,
  Code,
  Activity
} from 'lucide-react';
import { hapticTick } from '../utils/haptics';



const AgentsDeepDive = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const [expandedAgent, setExpandedAgent] = useState(null);

  // Complete Agent List based on your specifications
  const agents = [
    {
      id: 1,
      name: 'OrchestratorAgent',
      role: 'Central Coordinator',
      description: 'Acts as the central coordinator that manages all other agents and determines workflow execution paths',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      details: [
        'Makes intelligent decisions about which agents to use based on query type',
        'Handles lazy loading of agents for performance optimization',
        'Coordinates sequential execution and workflow management'
      ]
    },
    {
      id: 2,
      name: 'DatabaseManagerAgent',
      role: 'Data Analysis Specialist',
      description: 'Analyzes user requests to determine required database tables, columns, and values needed',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Maps user terminology to actual database entities',
        'Validates request feasibility before processing',
        'Provides structured instructions for SQL query generation'
      ]
    },
    {
      id: 3,
      name: 'QueryGeneratorAgent',
      role: 'SQL Generation Expert',
      description: 'Generates exactly ONE SQLite3-compatible SQL SELECT statement based on instructions',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Specializes in proper SQLite3 syntax with LIKE operators',
        'Returns only raw SQL statements without explanations',
        'Ensures query compatibility and performance'
      ]
    },
    {
      id: 4,
      name: 'PlotAgent',
      role: 'Visualization Creator',
      description: 'Creates data visualizations for business intelligence using Plotly.js specifications',
      icon: BarChart3,
      color: 'from-pink-500 to-rose-500',
      details: [
        'Determines optimal chart types (bar, line, pie, scatter, heatmap)',
        'Generates React-compatible chart configurations',
        'Provides proper data analysis and trend visualization'
      ]
    },
    {
      id: 5,
      name: 'ReportGeneratorAgent',
      role: 'Business Intelligence',
      description: 'Creates comprehensive reports with KPIs, data analysis, and business insights',
      icon: FileText,
      color: 'from-purple-500 to-violet-500',
      details: [
        'Generates multiple SQL queries for comprehensive data gathering',
        'Produces structured markdown reports with executive summaries',
        'Provides detailed trend analysis and metric calculations'
      ]
    },
    {
      id: 6,
      name: 'WebsearchAgent',
      role: 'External Information',
      description: 'Performs web searches focused on grocery stores, food-related topics, and news',
      icon: Search,
      color: 'from-indigo-500 to-blue-500',
      details: [
        'Searches exactly 3 top sources with comprehensive summaries',
        'Provides complete URL citations for all sources',
        'Restricted to food/grocery and news topics for relevance'
      ]
    },
    {
      id: 7,
      name: 'ResponseFormatterAgent',
      role: 'User Experience',
      description: 'Final stage agent that formats all processed results into user-friendly responses',
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      details: [
        'Synthesizes information from multiple agents into coherent responses',
        'Creates proper markdown formatting with headings and tables',
        'Provides context and explanations for complex data results'
      ]
    },
    {
      id: 8,
      name: 'ResponseValidatorAgent',
      role: 'Quality Assurance',
      description: 'Validates response quality and accuracy in background threads for optimization',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      details: [
        'Ensures responses meet quality standards and accuracy',
        'Runs asynchronously to avoid blocking main response delivery',
        'Maintains quality control while optimizing performance'
      ]
    },
    {
      id: 9,
      name: 'ContextDetectionAgent',
      role: 'Context Manager',
      description: 'Detects and manages conversation context from user queries and responses',
      icon: RefreshCw,
      color: 'from-amber-500 to-yellow-500',
      details: [
        'Identifies specific business entities (branches, businesses, dates)',
        'Maintains context continuity across conversation turns',
        'Handles context switching and focused analysis'
      ]
    },
    {
      id: 10,
      name: 'TokenTrackingTeam',
      role: 'System Optimization',
      description: 'Specialized team that tracks AI model token usage for cost monitoring',
      icon: Activity,
      color: 'from-orange-500 to-red-500',
      details: [
        'Manages team communication and coordination between agents',
        'Provides usage analytics and performance metrics',
        'Optimizes system performance and cost management'
      ]
    },
    {
      id: 11,
      name: 'DecisionAgent',
      role: 'Quality Control',
      description: 'Evaluates whether responses need additional formatting before delivery',
      icon: Brain,
      color: 'from-violet-500 to-purple-500',
      details: [
        'Acts as quality control checkpoint for response presentation',
        'Makes intelligent decisions about response complexity',
        'Determines if raw data needs user-friendly formatting'
      ]
    }
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
              <span className="text-xs uppercase tracking-wide text-text-secondary">Complete Agent List</span>
            </div>

            <h1 className="hero-title mobile-title mb-3">Meet Our 11 AI Agents</h1>
            <p className="hero-subtitle mobile-subtitle mb-6">
              Each agent has a specialized role in transforming your data queries into intelligent insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Grid */}
      <section className="section px-6 py-8" id="agents">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              const isExpanded = expandedAgent === agent.id;
              
              return (
                <motion.div
                  key={agent.id}
                  className="forge rounded-xl overflow-hidden shadow-lg border border-forge-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                                {/* Agent Header */}
              <div 
                className="p-6 sm:p-8 cursor-pointer hover:bg-forge-bg/30 transition-colors duration-200"
                onClick={() => {
                  hapticTick(5);
                  setExpandedAgent(isExpanded ? null : agent.id);
                }}
              >
                    <div className="flex items-center space-x-4">
                      {/* Enhanced Icon with Gradient Background */}
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} 
                                       flex items-center justify-center shadow-xl flex-shrink-0
                                       border-2 border-white/20`}>
                          <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                        </div>
                        
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-text-primary text-base mb-1">{agent.name}</h3>
                            <div className="inline-flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${agent.color}`}></div>
                              <p className="text-accent-color text-sm font-semibold">{agent.role}</p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="ml-4"
                          >
                            <div className="w-10 h-10 rounded-full bg-forge-bg border border-forge-border 
                                          flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-text-secondary" />
                            </div>
                          </motion.div>
                        </div>
                        <p className="text-text-secondary text-sm mt-3 leading-relaxed font-medium">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-forge-border/30 bg-gradient-to-r from-forge-bg/20 to-transparent">
                  <div className="pt-6 sm:pt-8">
                        {/* Enhanced Header with Icon */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-accent-color/10 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-accent-color" />
                          </div>
                          <h4 className="font-bold text-text-primary text-base">Key Capabilities</h4>
                        </div>
                        
                        {/* Enhanced Capabilities List */}
                        <div className="space-y-3">
                          {agent.details.map((detail, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-start space-x-3 p-3 rounded-lg bg-secondary-bg/50 border border-forge-border/30"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-color to-accent-secondary 
                                            flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-text-secondary text-sm leading-relaxed font-medium">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Status Badge */}
                        <div className="mt-6 flex justify-center">
                          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 
                                        border border-green-500/20 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-xs font-semibold">Active & Ready</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="section bg-secondary-bg px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-3">How They Work Together</h2>
            <p className="text-text-secondary text-sm max-w-md mx-auto">
              A sophisticated orchestrated workflow with intelligent routing
            </p>
          </motion.div>

                        <div className="max-w-lg mx-auto space-y-4 sm:space-y-6">
            {[
              {
                title: 'Simple Queries',
                description: 'Direct path with DatabaseManager → QueryGenerator for speed',
                icon: MessageSquare,
                color: 'from-green-500 to-emerald-500',
                badge: 'Fast Track'
              },
              {
                title: 'Visualization Requests', 
                description: 'Routes directly to PlotAgent for chart generation',
                icon: BarChart3,
                color: 'from-pink-500 to-rose-500',
                badge: 'Visual'
              },
              {
                title: 'Complex Analysis',
                description: 'Full team including ReportGenerator, WebSearch, and specialists',
                icon: Users,
                color: 'from-purple-500 to-violet-500',
                badge: 'Full Team'
              },
              {
                title: 'Quality Assurance',
                description: 'ResponseValidator runs in background, DecisionAgent ensures quality',
                icon: Shield,
                color: 'from-blue-500 to-cyan-500',
                badge: 'Quality'
              }
            ].map((workflow, index) => {
              const Icon = workflow.icon;
              return (
                <motion.div
                  key={index}
                  className="relative p-5 sm:p-7 forge rounded-xl shadow-lg border border-forge-border/50 overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${workflow.color} opacity-5`}></div>
                  
                  <div className="relative flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 bg-gradient-to-br ${workflow.color} rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20`}>
                        <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-bold text-text-primary text-base">{workflow.title}</h4>
                        <span className={`px-2 py-1 bg-gradient-to-r ${workflow.color} text-white text-xs font-semibold rounded-full`}>
                          {workflow.badge}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed font-medium">{workflow.description}</p>
                    </div>
                  </div>
                  
                  {/* Workflow Step Indicator */}
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-accent-color/10 border border-accent-color/20 flex items-center justify-center">
                      <span className="text-accent-color text-xs font-bold">{index + 1}</span>
                    </div>
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

export default AgentsDeepDive;
