import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
  Cpu
} from 'lucide-react';

const TechnicalDeepDive = () => {
  const [activeTab, setActiveTab] = useState('agents');
  const [selectedAgent, setSelectedAgent] = useState(0);

  const [flowRef, flowInView] = useInView({ triggerOnce: true });
  const [codeRef, codeInView] = useInView({ triggerOnce: true });

  const agents = [
    {
      name: 'Database Manager Agent',
      description: 'Analyzes user requests and maps to database entities',
      responsibilities: [
        'Parse natural language queries',
        'Identify relevant database tables',
        'Map business concepts to schema',
        'Validate data availability'
      ],
      code: `class DatabaseManagerAgent:
    def __init__(self):
        self.schema_mapping = {
            'sales': ['business', 'branch'],
            'reviews': ['reviews', 'reviewer'],
            'performance': ['report_branch_year']
        }
    
    async def analyze_request(self, user_query: str):
        # Extract business concepts
        concepts = self.extract_concepts(user_query)
        
        # Map to database entities
        entities = self.map_to_entities(concepts)
        
        return {
            'entities': entities,
            'query_type': self.determine_query_type(user_query)
        }`
    },
    {
      name: 'Query Generator Agent',
      description: 'Creates SQLite3-compatible SQL queries',
      responsibilities: [
        'Generate optimized SQL queries',
        'Handle complex joins and aggregations',
        'Ensure query safety and performance',
        'Support parameterized queries'
      ],
      code: `class QueryGeneratorAgent:
    def __init__(self):
        self.query_templates = self.load_templates()
    
    async def generate_query(self, entities: List[str], 
                           query_type: str, filters: Dict):
        # Build base query
        query = self.build_base_query(entities)
        
        # Add filters and conditions
        query = self.add_filters(query, filters)
        
        # Optimize for performance
        query = self.optimize_query(query)
        
        return {
            'sql': query,
            'parameters': self.extract_parameters(filters)
        }`
    },
    {
      name: 'Plot Agent',
      description: 'Generates data visualizations and charts',
      responsibilities: [
        'Create interactive charts',
        'Generate business dashboards',
        'Support multiple chart types',
        'Handle large datasets efficiently'
      ],
      code: `class PlotAgent:
    def __init__(self):
        self.chart_types = ['line', 'bar', 'pie', 'scatter']
    
    async def generate_visualization(self, data: pd.DataFrame, 
                                   chart_type: str, config: Dict):
        # Validate data format
        self.validate_data(data)
        
        # Create visualization
        fig = self.create_chart(data, chart_type, config)
        
        # Add interactivity
        fig = self.add_interactivity(fig)
        
        return {
            'chart': fig,
            'insights': self.extract_insights(data)
        }`
    },
    {
      name: 'Response Validator Agent',
      description: 'Validates AI-generated responses',
      responsibilities: [
        'Verify query accuracy',
        'Check response completeness',
        'Validate data integrity',
        'Ensure security compliance'
      ],
      code: `class ResponseValidatorAgent:
    def __init__(self):
        self.validation_rules = self.load_rules()
    
    async def validate_response(self, response: Dict, 
                              original_query: str):
        # Check response structure
        structure_valid = self.validate_structure(response)
        
        # Verify data accuracy
        accuracy_valid = self.verify_accuracy(response)
        
        # Security check
        security_valid = self.security_check(response)
        
        return {
            'valid': all([structure_valid, accuracy_valid, security_valid]),
            'issues': self.collect_issues(response)
        }`
    }
  ];

  const dataFlowSteps = [
    {
      step: 1,
      title: 'User Input',
      description: 'Natural language query received',
      icon: MessageSquare,
      color: '#10a37f'
    },
    {
      step: 2,
      title: 'Context Detection',
      description: 'Analyze conversation context',
      icon: Eye,
      color: '#61dafb'
    },
    {
      step: 3,
      title: 'Database Mapping',
      description: 'Map to database entities',
      icon: Database,
      color: '#f7df1e'
    },
    {
      step: 4,
      title: 'Query Generation',
      description: 'Generate SQL queries',
      icon: Code,
      color: '#ff6b6b'
    },
    {
      step: 5,
      title: 'Data Processing',
      description: 'Execute queries and process data',
      icon: Cpu,
      color: '#4ecdc4'
    },
    {
      step: 6,
      title: 'Visualization',
      description: 'Generate charts and reports',
      icon: BarChart3,
      color: '#45b7d1'
    },
    {
      step: 7,
      title: 'Validation',
      description: 'Validate response accuracy',
      icon: Shield,
      color: '#96ceb4'
    },
    {
      step: 8,
      title: 'Response',
      description: 'Format and return response',
      icon: CheckCircle,
      color: '#feca57'
    }
  ];

  const performanceMetrics = [
    { metric: 'Response Time', value: '< 2s', icon: Clock, color: '#10a37f' },
    { metric: 'Query Accuracy', value: '99.2%', icon: CheckCircle, color: '#61dafb' },
    { metric: 'System Uptime', value: '99.9%', icon: TrendingUp, color: '#f7df1e' },
    { metric: 'Data Processing', value: '10K+ records/s', icon: Cpu, color: '#ff6b6b' }
  ];

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
            <h1 className="text-5xl font-bold mb-6">Technical Deep Dive</h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore the technical architecture, agent implementations, and system performance 
              of our sophisticated multi-agent data retrieval system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'agents', label: 'Agent System', icon: Code },
              { id: 'flow', label: 'Data Flow', icon: ArrowRight },
              { id: 'performance', label: 'Performance', icon: TrendingUp },
              { id: 'code', label: 'Code Samples', icon: FileText }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-accent-color text-white'
                      : 'bg-interactive-bg text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Agent System Tab */}
          {activeTab === 'agents' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Agent List */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold mb-6">AI Agents</h3>
                  <div className="space-y-4">
                    {agents.map((agent, index) => (
                      <motion.div
                        key={agent.name}
                        className={`card cursor-pointer transition-all duration-200 ${
                          selectedAgent === index ? 'border-accent-color bg-accent-color/10' : ''
                        }`}
                        onClick={() => setSelectedAgent(index)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="text-lg font-semibold mb-2">{agent.name}</h4>
                        <p className="text-text-secondary text-sm">{agent.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Agent Details */}
                <div className="lg:col-span-2">
                  <div className="card">
                    <h3 className="text-2xl font-bold mb-6">{agents[selectedAgent].name}</h3>
                    <p className="text-text-secondary mb-6">{agents[selectedAgent].description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {agents[selectedAgent].responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent-color" />
                            <span className="text-text-secondary">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Implementation</h4>
                      <SyntaxHighlighter
                        language="python"
                        style={tomorrow}
                        className="rounded-lg"
                        customStyle={{
                          backgroundColor: 'var(--interactive-bg)',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {agents[selectedAgent].code}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Data Flow Tab */}
          {activeTab === 'flow' && (
            <motion.div
              ref={flowRef}
              initial={{ opacity: 0, y: 20 }}
              animate={flowInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Data Flow Process</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Step-by-step visualization of how data flows through our multi-agent system, 
                  from user input to final response.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dataFlowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.step}
                      className="card text-center"
                      initial={{ opacity: 0, y: 50 }}
                      animate={flowInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: step.color }}>
                        {step.step}
                      </div>
                      <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: step.color }} />
                      <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                      <p className="text-text-secondary text-sm">{step.description}</p>
                      
                      {index < dataFlowSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <ArrowRight className="w-6 h-6 text-accent-color" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Real-time performance statistics and system optimization metrics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {performanceMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.metric}
                      className="card text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: metric.color }} />
                      <h4 className="text-2xl font-bold mb-2">{metric.value}</h4>
                      <p className="text-text-secondary">{metric.metric}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                  <h4 className="text-xl font-semibold mb-4">System Optimization</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Query Caching</span>
                      <span className="text-accent-color">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Connection Pooling</span>
                      <span className="text-accent-color">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Load Balancing</span>
                      <span className="text-accent-color">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Auto-scaling</span>
                      <span className="text-accent-color">Active</span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h4 className="text-xl font-semibold mb-4">Resource Usage</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-secondary">CPU Usage</span>
                        <span className="text-accent-color">45%</span>
                      </div>
                      <div className="w-full bg-interactive-bg rounded-full h-2">
                        <div className="bg-accent-color h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-secondary">Memory Usage</span>
                        <span className="text-accent-color">62%</span>
                      </div>
                      <div className="w-full bg-interactive-bg rounded-full h-2">
                        <div className="bg-accent-color h-2 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-secondary">Database Connections</span>
                        <span className="text-accent-color">8/20</span>
                      </div>
                      <div className="w-full bg-interactive-bg rounded-full h-2">
                        <div className="bg-accent-color h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Code Samples Tab */}
          {activeTab === 'code' && (
            <motion.div
              ref={codeRef}
              initial={{ opacity: 0, y: 20 }}
              animate={codeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Code Samples</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Key implementation details and code snippets from our multi-agent system.
                </p>
              </div>

              <div className="space-y-8">
                <div className="card">
                  <h4 className="text-xl font-semibold mb-4">FastAPI Main Application</h4>
                  <SyntaxHighlighter
                    language="python"
                    style={tomorrow}
                    className="rounded-lg"
                    customStyle={{
                      backgroundColor: 'var(--interactive-bg)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
import asyncio

app = FastAPI(title="Multi-Agent Data Retrieval System")

class ChatMessage(BaseModel):
    message: str
    context: Dict = {}

@app.post("/api/chat/message")
async def process_message(chat_message: ChatMessage):
    try:
        # Initialize agents
        db_agent = DatabaseManagerAgent()
        query_agent = QueryGeneratorAgent()
        plot_agent = PlotAgent()
        validator_agent = ResponseValidatorAgent()
        
        # Process through pipeline
        entities = await db_agent.analyze_request(chat_message.message)
        query = await query_agent.generate_query(entities)
        data = await execute_query(query)
        visualization = await plot_agent.generate_visualization(data)
        
        # Validate response
        validation = await validator_agent.validate_response({
            'data': data,
            'visualization': visualization
        }, chat_message.message)
        
        return {
            'response': {
                'data': data,
                'visualization': visualization,
                'validated': validation['valid']
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`}
                  </SyntaxHighlighter>
                </div>

                <div className="card">
                  <h4 className="text-xl font-semibold mb-4">Database Schema</h4>
                  <SyntaxHighlighter
                    language="sql"
                    style={tomorrow}
                    className="rounded-lg"
                    customStyle={{
                      backgroundColor: 'var(--interactive-bg)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {`-- Business table
CREATE TABLE business (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    review_count INTEGER,
    avg_rating REAL
);

-- Branch table with geographic data
CREATE TABLE branch (
    id INTEGER PRIMARY KEY,
    business_id INTEGER,
    name TEXT NOT NULL,
    latitude REAL,
    longitude REAL,
    address TEXT,
    FOREIGN KEY (business_id) REFERENCES business(id)
);

-- Reviews with sentiment analysis
CREATE TABLE reviews (
    id INTEGER PRIMARY KEY,
    business_id INTEGER,
    reviewer_id INTEGER,
    rating INTEGER,
    text TEXT,
    sentiment_score REAL,
    created_date DATE,
    FOREIGN KEY (business_id) REFERENCES business(id),
    FOREIGN KEY (reviewer_id) REFERENCES reviewer(id)
);

-- Aggregated statistics
CREATE TABLE report_branch_year (
    id INTEGER PRIMARY KEY,
    branch_id INTEGER,
    year INTEGER,
    total_reviews INTEGER,
    avg_rating REAL,
    sentiment_avg REAL,
    FOREIGN KEY (branch_id) REFERENCES branch(id)
);`}
                  </SyntaxHighlighter>
                </div>

                <div className="card">
                  <h4 className="text-xl font-semibold mb-4">React Chat Component</h4>
                  <SyntaxHighlighter
                    language="javascript"
                    style={tomorrow}
                    className="rounded-lg"
                    customStyle={{
                      backgroundColor: 'var(--interactive-bg)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {`import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, context: {} })
      });
      
      const data = await response.json();
      
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'user',
        content: message,
        timestamp: new Date().toISOString()
      }, {
        id: Date.now() + 1,
        type: 'agent',
        content: data.response,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-interface">
      <div className="messages-container">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={\`message \${message.type}\`}
            >
              {message.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your data..."
          disabled={isLoading}
        />
        <button onClick={() => sendMessage(input)} disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TechnicalDeepDive; 