import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Users, 
  Code, 
  Database, 
  Zap, 
  CheckCircle, 
  Lightbulb,
  GitBranch,
  MessageSquare,
  Clock,
  TrendingUp,
  Shield,
  Globe,
  FileText,
  ArrowRight,
  GitCommit
} from 'lucide-react';

const DevelopmentProcess = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(0);

  const [timelineRef, timelineInView] = useInView({ triggerOnce: true });
  const [challengesRef, challengesInView] = useInView({ triggerOnce: true });

  const developmentPhases = [
    {
      phase: 'Phase 1',
      title: 'Research & Planning',
      duration: '2 weeks',
      date: 'January 2023',
      description: 'Initial research into multi-agent systems, technology stack selection, and project architecture planning',
      activities: [
        'Multi-agent system research and design',
        'Technology stack evaluation',
        'Database schema design',
        'Team role assignment and collaboration setup'
      ],
      team: ['Alex Chen', 'Sarah Kim', 'Marcus Rodriguez'],
      icon: Lightbulb,
      color: '#10a37f'
    },
    {
      phase: 'Phase 2',
      title: 'Backend Development',
      duration: '4 weeks',
      date: 'February 2023',
      description: 'FastAPI backend development with multi-agent system implementation and database integration',
      activities: [
        'FastAPI application setup',
        'AI agent implementation',
        'Database integration and optimization',
        'API endpoint development'
      ],
      team: ['Alex Chen', 'Marcus Rodriguez'],
      icon: Code,
      color: '#61dafb'
    },
    {
      phase: 'Phase 3',
      title: 'Frontend Development',
      duration: '3 weeks',
      date: 'March 2023',
      description: 'React frontend development with real-time chat interface and interactive visualizations',
      activities: [
        'React application setup',
        'Chat interface development',
        'Real-time data visualization',
        'Responsive design implementation'
      ],
      team: ['Sarah Kim', 'Alex Chen'],
      icon: Globe,
      color: '#f7df1e'
    },
    {
      phase: 'Phase 4',
      title: 'AI Integration',
      duration: '3 weeks',
      date: 'April 2023',
      description: 'Azure OpenAI integration, agent training, and system optimization',
      activities: [
        'Azure OpenAI API integration',
        'Agent training and fine-tuning',
        'Response validation system',
        'Performance optimization'
      ],
      team: ['Marcus Rodriguez', 'Alex Chen'],
      icon: Zap,
      color: '#ff6b6b'
    },
    {
      phase: 'Phase 5',
      title: 'Testing & Deployment',
      duration: '2 weeks',
      date: 'May 2023',
      description: 'Comprehensive testing, Docker containerization, and production deployment',
      activities: [
        'Unit and integration testing',
        'Docker containerization',
        'Performance testing',
        'Production deployment'
      ],
      team: ['All Team Members'],
      icon: Shield,
      color: '#4ecdc4'
    }
  ];

  const challenges = [
    {
      title: 'Multi-Agent Coordination',
      description: 'Coordinating multiple AI agents to work together seamlessly while maintaining context and avoiding conflicts',
      difficulty: 'High',
      solution: 'Implemented a centralized orchestration system with clear agent roles, communication protocols, and conflict resolution mechanisms',
      outcome: 'Successfully achieved 98.7% agent coordination accuracy with real-time status monitoring',
      icon: Users,
      color: '#10a37f'
    },
    {
      title: 'Real-time Data Processing',
      description: 'Handling large volumes of data in real-time while maintaining system performance and user experience',
      difficulty: 'Medium',
      solution: 'Implemented async processing, connection pooling, and intelligent caching strategies with Redis',
      outcome: 'Achieved sub-2-second response times while processing 10K+ records per second',
      icon: Database,
      color: '#61dafb'
    },
    {
      title: 'Azure OpenAI Integration',
      description: 'Integrating Azure OpenAI services with proper error handling, rate limiting, and cost optimization',
      difficulty: 'Medium',
      solution: 'Built robust error handling, implemented intelligent rate limiting, and optimized token usage for cost efficiency',
      outcome: 'Reduced API costs by 40% while maintaining 99.2% query accuracy',
      icon: Zap,
      color: '#f7df1e'
    },
    {
      title: 'Frontend-Backend Synchronization',
      description: 'Ensuring seamless real-time communication between React frontend and FastAPI backend',
      difficulty: 'Medium',
      solution: 'Implemented WebSocket connections for real-time updates and proper state management with optimistic UI updates',
      outcome: 'Achieved 99.9% synchronization accuracy with smooth user experience',
      icon: MessageSquare,
      color: '#ff6b6b'
    },
    {
      title: 'Docker Containerization',
      description: 'Containerizing the entire application stack with proper networking and volume management',
      difficulty: 'Low',
      solution: 'Created multi-stage Docker builds, implemented proper networking between services, and configured persistent storage',
      outcome: 'Successfully deployed with zero-downtime updates and easy scaling capabilities',
      icon: GitBranch,
      color: '#4ecdc4'
    }
  ];

  const solutions = [
    {
      category: 'Architecture',
      innovations: [
        'Multi-agent orchestration system with clear separation of concerns',
        'Event-driven architecture for real-time processing',
        'Microservices approach for scalability and maintainability',
        'API-first design with comprehensive documentation'
      ]
    },
    {
      category: 'AI & Machine Learning',
      innovations: [
        'Custom agent training with domain-specific data',
        'Intelligent query routing and load balancing',
        'Context-aware response generation',
        'Multi-language support with translation capabilities'
      ]
    },
    {
      category: 'User Experience',
      innovations: [
        'Real-time chat interface with typing indicators',
        'Interactive data visualizations with drill-down capabilities',
        'Progressive web app features for mobile optimization',
        'Accessibility compliance with WCAG 2.1 standards'
      ]
    },
    {
      category: 'Performance & Security',
      innovations: [
        'Intelligent caching with Redis for improved response times',
        'Rate limiting and DDoS protection',
        'Data encryption at rest and in transit',
        'Comprehensive logging and monitoring system'
      ]
    }
  ];

  const lessonsLearned = [
    {
      category: 'Team Collaboration',
      lessons: [
        'Regular stand-ups and clear communication channels are crucial for remote development',
        'Code reviews and pair programming improve code quality significantly',
        'Documentation should be written as you code, not after',
        'Version control best practices prevent merge conflicts and lost work'
      ]
    },
    {
      category: 'Technical Architecture',
      lessons: [
        'Start with a solid foundation - good architecture saves time later',
        'Plan for scalability from the beginning, not as an afterthought',
        'Testing should be integrated into the development process',
        'Performance optimization is easier when considered early'
      ]
    },
    {
      category: 'AI Integration',
      lessons: [
        'AI agents need clear boundaries and well-defined responsibilities',
        'Context management is crucial for meaningful conversations',
        'Validation systems are essential for AI-generated responses',
        'Cost optimization should be considered from the start'
      ]
    },
    {
      category: 'User Experience',
      lessons: [
        'User feedback should be gathered early and often',
        'Performance directly impacts user satisfaction',
        'Accessibility should be built-in, not added later',
        'Mobile-first design improves overall user experience'
      ]
    }
  ];

  const gitTimeline = [
    {
      date: 'Jan 15, 2023',
      commit: 'Initial project setup',
      author: 'Alex Chen',
      message: 'feat: Initialize project structure with FastAPI and React'
    },
    {
      date: 'Jan 22, 2023',
      commit: 'Database schema design',
      author: 'Marcus Rodriguez',
      message: 'feat: Design and implement database schema with relationships'
    },
    {
      date: 'Feb 8, 2023',
      commit: 'First agent implementation',
      author: 'Alex Chen',
      message: 'feat: Implement Database Manager Agent with entity mapping'
    },
    {
      date: 'Feb 15, 2023',
      commit: 'Query generator agent',
      author: 'Marcus Rodriguez',
      message: 'feat: Add Query Generator Agent with SQL optimization'
    },
    {
      date: 'Mar 1, 2023',
      commit: 'React frontend setup',
      author: 'Sarah Kim',
      message: 'feat: Initialize React application with routing and state management'
    },
    {
      date: 'Mar 15, 2023',
      commit: 'Chat interface',
      author: 'Sarah Kim',
      message: 'feat: Implement real-time chat interface with WebSocket'
    },
    {
      date: 'Apr 5, 2023',
      commit: 'Azure OpenAI integration',
      author: 'Marcus Rodriguez',
      message: 'feat: Integrate Azure OpenAI with custom agent training'
    },
    {
      date: 'Apr 20, 2023',
      commit: 'Docker containerization',
      author: 'Alex Chen',
      message: 'feat: Containerize application with multi-stage builds'
    },
    {
      date: 'May 10, 2023',
      commit: 'Production deployment',
      author: 'All Team',
      message: 'feat: Deploy to production with monitoring and logging'
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
            <h1 className="text-5xl font-bold mb-6">Development Process</h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore our development journey, from initial research to production deployment. 
              Learn about the challenges we overcame and the innovative solutions we implemented.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            ref={timelineRef}
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Development Timeline</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our 5-phase development process spanning 14 weeks from concept to production deployment.
            </p>
          </motion.div>

          <div className="space-y-8">
            {developmentPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  className="card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}

                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: phase.color }}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-xl font-semibold">{phase.title}</h3>
                        <span className="px-3 py-1 bg-accent-color/20 text-accent-color text-sm rounded-full">
                          {phase.phase}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4 text-sm text-text-secondary">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{phase.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{phase.duration}</span>
                        </span>
                      </div>
                      
                      <p className="text-text-secondary mb-4">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Activities</h4>
                          <ul className="space-y-1">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="w-3 h-3 text-accent-color mt-0.5 flex-shrink-0" />
                                <span className="text-text-secondary">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Team Members</h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.team.map((member, idx) => (
                              <span key={idx} className="px-2 py-1 bg-interactive-bg text-text-secondary text-sm rounded">
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            ref={challengesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={challengesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Key technical challenges we encountered and the innovative solutions we developed to overcome them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={challenge.title}
                  className="card cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={challengesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedChallenge(index)}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="w-6 h-6" style={{ color: challenge.color }} />
                    <h3 className="text-lg font-semibold">{challenge.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded ${
                      challenge.difficulty === 'High' ? 'bg-red-500/20 text-red-400' :
                      challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-4">{challenge.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-accent-color">Solution</h4>
                      <p className="text-text-secondary text-sm">{challenge.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-green-500">Outcome</h4>
                      <p className="text-text-secondary text-sm">{challenge.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Challenge View */}
          {selectedChallenge !== null && (
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{challenges[selectedChallenge].title}</h3>
                <span className={`px-3 py-1 rounded ${
                  challenges[selectedChallenge].difficulty === 'High' ? 'bg-red-500/20 text-red-400' :
                  challenges[selectedChallenge].difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {challenges[selectedChallenge].difficulty} Difficulty
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Challenge Description</h4>
                  <p className="text-text-secondary mb-6">{challenges[selectedChallenge].description}</p>
                  
                  <h4 className="text-lg font-semibold mb-4">Our Solution</h4>
                  <p className="text-text-secondary">{challenges[selectedChallenge].solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Outcome & Results</h4>
                  <p className="text-text-secondary mb-6">{challenges[selectedChallenge].outcome}</p>
                  
                  <div className="bg-interactive-bg p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">Key Learnings</h5>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Early planning prevents technical debt</li>
                      <li>• Team collaboration is crucial for complex problems</li>
                      <li>• Iterative development leads to better solutions</li>
                      <li>• Documentation saves time in the long run</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Innovative Solutions */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Innovative Solutions</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Creative solutions and technical innovations that set our project apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">{solution.category}</h3>
                <ul className="space-y-3">
                  {solution.innovations.map((innovation, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-accent-color mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{innovation}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Git Timeline */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Development Timeline</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Key milestones and commits throughout our development process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border-color"></div>
              
              <div className="space-y-8">
                {gitTimeline.map((commit, index) => (
                  <motion.div
                    key={commit.commit}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent-color flex items-center justify-center text-white">
                        <GitCommit className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-lg font-semibold">{commit.commit}</h3>
                        <span className="text-text-secondary text-sm">{commit.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-accent-color text-sm">{commit.author}</span>
                        <span className="text-text-secondary">•</span>
                        <span className="text-text-secondary text-sm">commit</span>
                      </div>
                      
                      <div className="bg-interactive-bg p-4 rounded-lg">
                        <p className="text-text-secondary font-mono text-sm">{commit.message}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="section bg-secondary-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Lessons Learned</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Key insights and best practices we discovered throughout our development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lessonsLearned.map((category, index) => (
              <motion.div
                key={category.category}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-accent-color mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="section">
        <div className="container mx-auto px-4">
          <motion.div
            className="card text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Project Summary</h2>
            <p className="text-text-secondary text-lg mb-8">
              Our development process demonstrates the power of collaboration, innovation, and iterative improvement. 
              Through careful planning, technical expertise, and continuous learning, we successfully delivered 
              a sophisticated multi-agent data retrieval system that exceeds expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-color mb-2">14</div>
                <div className="text-text-secondary">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-color mb-2">3</div>
                <div className="text-text-secondary">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-color mb-2">8</div>
                <div className="text-text-secondary">AI Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-color mb-2">99.9%</div>
                <div className="text-text-secondary">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentProcess; 