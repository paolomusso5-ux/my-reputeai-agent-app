import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Shield, 
  Brain, 
  TrendingUp, 
  Eye, 
  Star, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  Globe,
  Zap,
  Users,
  MessageSquare,
  ArrowRight,
  Play,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import assets
import logoReputeAI from './assets/logo_reputeai.png'
import heroBackground from './assets/hero_background.png'
import dashboardMockup from './assets/dashboard_mockup.png'
import featureSentiment from './assets/feature_sentiment.png'
import featureMonitoring from './assets/feature_monitoring.png'
import featurePredictive from './assets/feature_predictive.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced machine learning algorithms analyze customer sentiment across all platforms in real-time.",
      image: featureSentiment,
      stats: "99.2% accuracy"
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Monitor mentions across social media, review sites, news outlets, and forums 24/7.",
      image: featureMonitoring,
      stats: "500+ sources"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast reputation trends and identify potential issues before they become crises.",
      image: featurePredictive,
      stats: "85% crisis prevention"
    }
  ]

  const metrics = [
    { label: "Reputation Score", value: 87, color: "bg-green-500" },
    { label: "Positive Sentiment", value: 73, color: "bg-blue-500" },
    { label: "Response Rate", value: 94, color: "bg-purple-500" },
    { label: "Crisis Prevention", value: 85, color: "bg-orange-500" }
  ]

  const testimonials = [
    {
      company: "TechCorp",
      quote: "ReputeAI helped us increase our positive reviews by 340% and prevented 3 potential PR crises.",
      author: "Sarah Johnson, CMO"
    },
    {
      company: "HealthPlus",
      quote: "The predictive analytics saved our reputation when we caught negative sentiment trends early.",
      author: "Dr. Michael Chen, CEO"
    },
    {
      company: "RetailMax",
      quote: "Our customer satisfaction scores improved by 45% after implementing ReputeAI's recommendations.",
      author: "Lisa Rodriguez, Brand Manager"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logoReputeAI} alt="ReputeAI" className="h-8 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-slate-300 hover:text-white transition-colors">Platform</a>
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                Login
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#platform" className="block px-3 py-2 text-slate-300 hover:text-white">Platform</a>
              <a href="#features" className="block px-3 py-2 text-slate-300 hover:text-white">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-slate-300 hover:text-white">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-slate-300 hover:text-white">About</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full border-blue-500 text-blue-400">Login</Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-500">
              AI-Powered Reputation Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Reputation with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Monitor, analyze, and optimize your online reputation across all digital channels. 
              Predict crises before they happen and turn customer feedback into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              See Your Reputation in Real-Time
            </h2>
            <p className="text-slate-300 text-lg">
              Comprehensive dashboard with AI-powered insights and actionable recommendations
            </p>
          </div>
          <div className="relative">
            <img 
              src={dashboardMockup} 
              alt="ReputeAI Dashboard" 
              className="w-full rounded-lg shadow-2xl border border-slate-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">{metric.label}</span>
                    <span className="text-white font-bold text-2xl">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Our cutting-edge AI algorithms provide unprecedented insights into your online reputation
            </p>
          </div>
          
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500">
                      {feature.stats}
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 text-lg mb-6">{feature.description}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-300 text-lg">
              See how companies are transforming their reputation management with ReputeAI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-slate-400 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Reputation?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of companies using AI to protect and enhance their online reputation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={logoReputeAI} alt="ReputeAI" className="h-8 w-auto mb-4" />
              <p className="text-slate-400">
                AI-powered reputation management for the modern enterprise.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 ReputeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
