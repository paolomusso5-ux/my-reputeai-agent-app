import React from 'react';

function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          AI-Powered Features
        </h2>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          Our advanced AI technology helps you monitor, analyze, and optimize your online reputation across all digital channels.
        </p>
        
        {/* Feature 1: Sentiment Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <div className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4">
              99.2% Accuracy
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              AI-Powered Sentiment Analysis
            </h3>
            <p className="text-gray-300 mb-6">
              Our advanced machine learning algorithms analyze customer sentiment across all platforms in real-time, providing you with accurate insights into how people feel about your brand.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Real-time emotion detection
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Multi-platform sentiment tracking
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trend analysis over time
              </li>
            </ul>
          </div>
          <div className="bg-blue-900 bg-opacity-20 rounded-xl p-8 flex justify-center">
            <div className="w-full max-w-md h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4 text-blue-400">🧠</div>
                <div className="text-2xl font-bold text-white">Sentiment Analysis</div>
                <div className="text-gray-300 mt-2">Neural network visualization would appear here</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature 2: Real-Time Monitoring */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-2 md:order-1 bg-blue-900 bg-opacity-20 rounded-xl p-8 flex justify-center">
            <div className="w-full max-w-md h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4 text-blue-400">👁️</div>
                <div className="text-2xl font-bold text-white">Real-Time Monitoring</div>
                <div className="text-gray-300 mt-2">Global monitoring network visualization would appear here</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4">
              500+ Sources Monitored
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Real-Time Monitoring
            </h3>
            <p className="text-gray-300 mb-6">
              Monitor mentions across social media, review sites, news outlets, and forums in real-time. Never miss a mention of your brand again with our comprehensive monitoring system.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 automated monitoring
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Real-time alerts and notifications
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Geographic tracking capabilities
              </li>
            </ul>
          </div>
        </div>
        
        {/* Feature 3: Predictive Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-4">
              85% Crisis Prevention
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Predictive Analytics
            </h3>
            <p className="text-gray-300 mb-6">
              Forecast reputation trends and identify potential issues before they become crises. Our AI predicts problems before they happen, giving you time to take preventive action.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Early warning system for potential threats
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Risk assessment and probability modeling
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Automated recommendations for preventive actions
              </li>
            </ul>
          </div>
          <div className="bg-blue-900 bg-opacity-20 rounded-xl p-8 flex justify-center">
            <div className="w-full max-w-md h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-4 text-blue-400">📈</div>
                <div className="text-2xl font-bold text-white">Predictive Analytics</div>
                <div className="text-gray-300 mt-2">Crystal ball with AI brain and predictive trend arrows would appear here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
