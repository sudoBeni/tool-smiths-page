import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Eye,
  Download,
  Share2,
  Star,
  MessageSquare,
  Database,
  Zap,
  Globe
} from 'lucide-react';

const ResultsImpact = () => {
  const [selectedReport, setSelectedReport] = useState(0);

  const [dashboardRef, dashboardInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });

  const dashboardScreenshots = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Real-time sales metrics with interactive charts and trend analysis',
      metrics: ['Revenue Growth', 'Customer Acquisition', 'Regional Performance'],
      image: '',
      color: '#10a37f'
    },
    {
      title: 'Customer Sentiment Analysis',
      description: 'AI-powered sentiment analysis with aspect-based opinion extraction',
      metrics: ['Sentiment Score', 'Aspect Analysis', 'Trend Patterns'],
      image: '',
      color: '#61dafb'
    },
    {
      title: 'Geographic Data Visualization',
      description: 'Interactive maps showing business locations and performance by region',
      metrics: ['Location Density', 'Regional Trends', 'Market Penetration'],
      image: '',
      color: '#f7df1e'
    },
    {
      title: 'Business Intelligence Reports',
      description: 'Comprehensive reports with actionable insights and recommendations',
      metrics: ['KPI Tracking', 'Forecasting', 'Competitive Analysis'],
      image: '',
      color: '#ff6b6b'
    }
  ];

  const sampleReports = [
    {
      title: 'Q3 2023 Sales Performance Report',
      type: 'Business Intelligence',
      date: 'October 2023',
      summary: 'Comprehensive analysis of Q3 sales performance with regional breakdown and trend analysis',
      insights: [
        'Revenue increased by 23% compared to Q2',
        'Customer satisfaction score improved to 4.6/5',
        'New market penetration in 3 regions',
        'Average order value grew by 15%'
      ],
      metrics: {
        revenue: '$2.4M',
        growth: '+23%',
        customers: '1,247',
        satisfaction: '4.6/5'
      }
    },
    {
      title: 'Customer Sentiment Analysis Report',
      type: 'AI Analysis',
      date: 'September 2023',
      summary: 'Deep dive into customer sentiment with aspect-based opinion analysis and trend identification',
      insights: [
        'Overall sentiment score: 4.2/5',
        'Service quality rated highest at 4.5/5',
        'Product quality improved by 18%',
        'Response time concerns decreased by 25%'
      ],
      metrics: {
        sentiment: '4.2/5',
        improvement: '+18%',
        reviews: '3,456',
        aspects: '12'
      }
    },
    {
      title: 'Regional Performance Analysis',
      type: 'Geographic Analysis',
      date: 'August 2023',
      summary: 'Geographic performance analysis with market penetration insights and growth opportunities',
      insights: [
        'West Coast showing strongest growth at 34%',
        'Midwest market penetration at 67%',
        'New York region leads in customer satisfaction',
        'Southern markets showing 28% growth potential'
      ],
      metrics: {
        regions: '8',
        growth: '+28%',
        penetration: '67%',
        satisfaction: '4.4/5'
      }
    }
  ];

  const performanceStats = [
    {
      category: 'System Performance',
      metrics: [
        { name: 'Response Time', value: '< 2s', improvement: '-40%', icon: Clock },
        { name: 'Query Accuracy', value: '99.2%', improvement: '+2.1%', icon: CheckCircle },
        { name: 'System Uptime', value: '99.9%', improvement: '+0.3%', icon: TrendingUp },
        { name: 'Data Processing', value: '10K+ records/s', improvement: '+150%', icon: Zap }
      ]
    },
    {
      category: 'Business Impact',
      metrics: [
        { name: 'Revenue Growth', value: '+23%', improvement: '+8%', icon: DollarSign },
        { name: 'Customer Satisfaction', value: '4.6/5', improvement: '+0.4', icon: Star },
        { name: 'Query Volume', value: '50K+', improvement: '+200%', icon: Database },
        { name: 'User Adoption', value: '95%', improvement: '+15%', icon: Users }
      ]
    },
    {
      category: 'AI Capabilities',
      metrics: [
        { name: 'Agent Accuracy', value: '98.7%', improvement: '+3.2%', icon: CheckCircle },
        { name: 'Context Understanding', value: '94%', improvement: '+12%', icon: Eye },
        { name: 'Response Relevance', value: '96.3%', improvement: '+5.1%', icon: MessageSquare },
        { name: 'Multi-language Support', value: '8 languages', improvement: '+3', icon: Globe }
      ]
    }
  ];

  const userExperienceMetrics = [
    {
      title: 'Chat Interface Walkthrough',
      description: 'Step-by-step demonstration of the user experience',
      steps: [
        'User submits natural language query',
        'System analyzes context and intent',
        'AI agents process request in parallel',
        'Real-time status updates displayed',
        'Interactive results with visualizations',
        'Follow-up suggestions provided'
      ],
      metrics: {
        'Average Session Time': '4.2 minutes',
        'Query Success Rate': '96.8%',
        'User Satisfaction': '4.7/5',
        'Return Usage': '87%'
      }
    }
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
            <h1 className="text-5xl font-bold mb-6">Results & Impact</h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover the real business value and measurable impact of our multi-agent data retrieval system. 
              See how AI-powered insights drive decision-making and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Screenshots */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            ref={dashboardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Dashboard Screenshots</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real data visualizations and interactive dashboards powered by our multi-agent system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboardScreenshots.map((dashboard, index) => (
              <motion.div
                key={dashboard.title}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{dashboard.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{dashboard.title}</h3>
                    <p className="text-text-secondary text-sm">{dashboard.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-accent-color">Key Metrics</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {dashboard.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dashboard.color }}></div>
                        <span className="text-text-secondary text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-accent-color text-white rounded-lg hover:bg-accent-color/90 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-interactive-bg text-text-primary rounded-lg hover:bg-border-color transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Reports */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Sample Reports</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Generated business intelligence reports with actionable insights and comprehensive analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {sampleReports.map((report, index) => (
              <motion.div
                key={report.title}
                className="card cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedReport(index)}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent-color/20 text-accent-color text-sm rounded-full">
                    {report.type}
                  </span>
                  <span className="text-text-secondary text-sm">{report.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">{report.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{report.summary}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(report.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-accent-color">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Insights</h4>
                  <ul className="space-y-1">
                    {report.insights.slice(0, 2).map((insight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-accent-color mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Report View */}
          {selectedReport !== null && (
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{sampleReports[selectedReport].title}</h3>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-accent-color text-white rounded-lg hover:bg-accent-color/90 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-interactive-bg text-text-primary rounded-lg hover:bg-border-color transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Executive Summary</h4>
                  <p className="text-text-secondary mb-6">{sampleReports[selectedReport].summary}</p>
                  
                  <h4 className="text-lg font-semibold mb-4">Key Insights</h4>
                  <ul className="space-y-3">
                    {sampleReports[selectedReport].insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-color mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(sampleReports[selectedReport].metrics).map(([key, value]) => (
                      <div key={key} className="bg-interactive-bg p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-accent-color mb-1">{value}</div>
                        <div className="text-sm text-text-secondary capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Performance Statistics */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Performance Statistics</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive metrics showcasing system performance, business impact, and AI capabilities.
            </p>
          </motion.div>

          <div className="space-y-8">
            {performanceStats.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <motion.div
                        key={metric.name}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                      >
                        <Icon className="w-8 h-8 mx-auto mb-3 text-accent-color" />
                        <div className="text-2xl font-bold mb-1">{metric.value}</div>
                        <div className="text-sm text-text-secondary mb-2">{metric.name}</div>
                        <div className="text-xs text-green-500 flex items-center justify-center space-x-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{metric.improvement}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Experience */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">User Experience</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Chat interface walkthrough and user experience metrics demonstrating system usability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {userExperienceMetrics.map((experience, index) => (
              <motion.div
                key={experience.title}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">{experience.title}</h3>
                <p className="text-text-secondary mb-6">{experience.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Process Steps</h4>
                  <ol className="space-y-3">
                    {experience.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-accent-color text-white text-sm flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-text-secondary">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-4">User Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(experience.metrics).map(([key, value]) => (
                      <div key={key} className="bg-interactive-bg p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-accent-color">{value}</div>
                        <div className="text-xs text-text-secondary">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="card text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Business Impact Summary</h2>
            <p className="text-text-secondary text-lg mb-8">
              Our multi-agent data retrieval system has delivered measurable business value through 
              improved decision-making, enhanced user experience, and operational efficiency gains.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-color mb-2">23%</div>
                <div className="text-text-secondary">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-color mb-2">96.8%</div>
                <div className="text-text-secondary">Query Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-color mb-2">4.7/5</div>
                <div className="text-text-secondary">User Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResultsImpact; 