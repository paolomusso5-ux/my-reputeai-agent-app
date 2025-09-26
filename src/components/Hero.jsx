import React from 'react';

function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-6">
          AI-Powered Reputation Intelligence
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Reputation with <span className="text-blue-400">AI Intelligence</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Monitor, analyze, and optimize your online reputation across all digital channels. 
          Predict crises before they happen with our advanced AI technology.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition">
            Start Free Trial
          </a>
          <a href="#" className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:bg-opacity-10 transition">
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
