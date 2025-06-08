import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, Users, Award, Star, CheckCircle } from 'lucide-react'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'

const HomePage = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Secure & Compliant',
      description: 'Bank-grade security with full regulatory compliance across all jurisdictions.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics to optimize your investment strategy.'
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-Portal Access',
      description: 'Dedicated interfaces for investors, AMCs, and distributors with role-based features.'
    },
    {
      icon: <Award size={24} />,
      title: 'Award-Winning Platform',
      description: 'Recognized globally for innovation in financial technology and user experience.'
    }
  ]

  const solutions = [
    {
      title: 'For Investors',
      description: 'Elite portfolio management with dynamic insights and real-time updates.',
      features: ['Portfolio Analytics', 'Risk Assessment', 'Performance Tracking', 'Tax Optimization'],
      cta: 'Explore Investor Portal'
    },
    {
      title: 'For AMCs',
      description: 'Complete fund management suite with compliance tools and regulatory reporting.',
      features: ['Fund Administration', 'Compliance Monitoring', 'Performance Attribution', 'Client Reporting'],
      cta: 'Explore AMC Portal'
    },
    {
      title: 'For Distributors',
      description: 'Sales enablement tools with commission tracking and client management.',
      features: ['Sales Analytics', 'Commission Management', 'Lead Generation', 'Client Onboarding'],
      cta: 'Explore Distributor Portal'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Portfolio Manager, Apex Capital',
      content: 'Credvora has transformed how we manage our clients\' portfolios. The analytics are incredibly detailed and the interface is intuitive.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Investment Advisor',
      content: 'The multi-portal approach is genius. Each stakeholder gets exactly what they need without complexity.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Fund Manager, GlobalTech Fund',
      content: 'Compliance reporting used to take days. Now it\'s automated and accurate. Game-changer for our operations.',
      rating: 5
    }
  ]

  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-secondary-600/5 to-accent-600/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              The Future of
              <span className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-gradient">
                Financial Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering investors, AMCs, and distributors with cutting-edge technology for smarter financial decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Why Choose Credvora?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Built for the modern financial ecosystem with enterprise-grade security and intuitive design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Tailored Solutions
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Three specialized portals designed for different user needs, all integrated seamlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card hover className="h-full">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700 dark:text-neutral-300">
                        <CheckCircle size={16} className="text-secondary-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/login">
                    <Button variant="outline" className="w-full group">
                      {solution.cta}
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              See what our clients say about their experience with Credvora.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 dark:text-neutral-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust Credvora for their investment management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-white text-white hover:bg-neutral-100">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage