import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare, 
  Send, 
  Database, 
  Code, 
  BarChart3, 
  Search, 
  CheckCircle, 
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Zap,
  Shield,
  Globe,
  FileText,
  Eye
} from 'lucide-react';

const ProjectShowcase = () => {
  const [demoMessages, setDemoMessages] = useState([
    { id: 1, type: 'user', content: 'Show me the sales performance for Q3 2023', timestamp: '10:30 AM' },
    { id: 2, type: 'agent', content: 'I\'ll analyze the sales data for Q3 2023. Let me query the database and generate a comprehensive report.', timestamp: '10:30 AM' },
    { id: 3, type: 'system', content: 'Database Manager Agent: Analyzing request and mapping to database entities...', timestamp: '10:30 AM' },
    { id: 4, type: 'system', content: 'Query Generator Agent: Creating SQLite3-compatible query...', timestamp: '10:30 AM' },
    { id: 5, type: 'system', content: 'Plot Agent: Generating data visualization...', timestamp: '10:30 AM' },
    { id: 6, type: 'agent', content: 'Here\'s your Q3 2023 sales performance report with interactive charts and key insights.', timestamp: '10:31 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const [archRef, archInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });

  const agents = [
    {
      name: 'Database Manager Agent',
      description: 'Analyzes user requests and maps to database entities',
      icon: Database,
      color: '#10a37f'
    },
    {
      name: 'Query Generator Agent',
      description: 'Creates SQLite3-compatible SQL queries',
      icon: Code,
      color: '#61dafb'
    },
    {
      name: 'Plot Agent',
      description: 'Generates data visualizations and charts',
      icon: BarChart3,
      color: '#f7df1e'
    },
    {
      name: 'Report Generator Agent',
      description: 'Creates comprehensive business reports',
      icon: FileText,
      color: '#ff6b6b'
    },
    {
      name: 'Web Search Agent',
      description: 'Performs focused web searches',
      icon: Search,
      color: '#4ecdc4'
    },
    {
      name: 'Response Formatter Agent',
      description: 'Formats final user responses',
      icon: MessageSquare,
      color: '#45b7d1'
    },
    {
      name: 'Context Detection Agent',
      description: 'Detects conversation context',
      icon: Eye,
      color: '#96ceb4'
    },
    {
      name: 'Response Validator Agent',
      description: 'Validates AI-generated responses',
      icon: Shield,
      color: '#feca57'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: demoMessages.length + 1,
        type: 'user',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setDemoMessages([...demoMessages, userMessage]);
      setNewMessage('');
      
      // Simulate agent response
      setTimeout(() => {
        const agentMessage = {
          id: demoMessages.length + 2,
          type: 'agent',
          content: 'I\'m processing your request. Let me analyze the data and provide you with insights.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setDemoMessages(prev => [...prev, agentMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-6">Project Showcase</h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experience our multi-agent data retrieval system in action. See how AI agents work together 
              to provide intelligent responses and generate comprehensive business insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
            <p className="text-text-secondary">Try out our chat interface and see the agents in action</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="card">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-color">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold">Multi-Agent Chat Interface</h3>
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
              <div className="h-96 overflow-y-auto mb-4 space-y-4">
                {demoMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-accent-color text-white'
                          : message.type === 'system'
                          ? 'bg-interactive-bg text-text-secondary text-sm'
                          : 'bg-secondary-bg text-text-primary border border-border-color'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {message.type === 'system' && <Zap className="w-3 h-3" />}
                        {message.type === 'agent' && <CheckCircle className="w-3 h-3 text-green-500" />}
                        <span className="text-xs opacity-70">{message.timestamp}</span>
                      </div>
                      <p>{message.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about sales data, generate reports, or explore insights..."
                  className="flex-1 px-4 py-3 bg-secondary-bg border border-border-color rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-color"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-accent-color text-white rounded-lg hover:bg-accent-color/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            ref={archRef}
            initial={{ opacity: 0, y: 50 }}
            animate={archInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our multi-agent system orchestrates specialized AI agents that work together to provide 
              intelligent data retrieval and analysis capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  className="card text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={archInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${agent.color}20` }}>
                    <Icon className="w-8 h-8" style={{ color: agent.color }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{agent.name}</h3>
                  <p className="text-text-secondary text-sm">{agent.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover the powerful capabilities that make our system truly innovative.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -50 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="w-6 h-6 text-accent-color mr-3" />
                Database Schema Visualization
              </h3>
              <p className="text-text-secondary mb-4">
                Interactive visualization of our complex database schema including business, branch, reviews, 
                and aggregated statistics tables.
              </p>
              <div className="bg-interactive-bg p-4 rounded-lg">
                <div className="text-sm font-mono text-text-secondary">
                  <div>business: Business information</div>
                  <div>branch: Physical locations</div>
                  <div>reviews: Customer reviews</div>
                  <div>reviewer: Review author profiles</div>
                  <div>review_aspect_opinion: LLM-extracted opinions</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: 50 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="w-6 h-6 text-accent-color mr-3" />
                Real-time Analytics
              </h3>
              <p className="text-text-secondary mb-4">
                Live data visualization and analytics dashboard with interactive charts and business intelligence reports.
              </p>
              <div className="bg-interactive-bg p-4 rounded-lg">
                <div className="text-sm text-text-secondary">
                  <div>• Sales Performance Metrics</div>
                  <div>• Customer Sentiment Analysis</div>
                  <div>• Geographic Data Visualization</div>
                  <div>• Trend Analysis & Forecasting</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: -50 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="w-6 h-6 text-accent-color mr-3" />
                Response Validation
              </h3>
              <p className="text-text-secondary mb-4">
                Comprehensive validation system ensuring accuracy and reliability of AI-generated responses 
                with real-time status indicators.
              </p>
              <div className="bg-interactive-bg p-4 rounded-lg">
                <div className="text-sm text-text-secondary">
                  <div>• Query Validation</div>
                  <div>• Response Accuracy Checks</div>
                  <div>• Data Integrity Verification</div>
                  <div>• Error Handling & Recovery</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: 50 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="w-6 h-6 text-accent-color mr-3" />
                Web Search Integration
              </h3>
              <p className="text-text-secondary mb-4">
                Focused web search capabilities to enhance AI responses with real-time information 
                and external data sources.
              </p>
              <div className="bg-interactive-bg p-4 rounded-lg">
                <div className="text-sm text-text-secondary">
                  <div>• Real-time Information Retrieval</div>
                  <div>• External Data Integration</div>
                  <div>• Context-Aware Searches</div>
                  <div>• Multi-Source Aggregation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">API Documentation</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Swagger-style documentation for our FastAPI endpoints and multi-agent system integration.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">FastAPI Endpoints</h3>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">GET</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">POST</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">PUT</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-interactive-bg p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">GET</span>
                    <code className="text-accent-color">/api/chat</code>
                  </div>
                  <p className="text-text-secondary text-sm">Retrieve chat history and conversation context</p>
                </div>
                
                <div className="bg-interactive-bg p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">POST</span>
                    <code className="text-accent-color">/api/chat/message</code>
                  </div>
                  <p className="text-text-secondary text-sm">Send message to multi-agent system</p>
                </div>
                
                <div className="bg-interactive-bg p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">GET</span>
                    <code className="text-accent-color">/api/agents/status</code>
                  </div>
                  <p className="text-text-secondary text-sm">Get real-time status of all AI agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectShowcase; 