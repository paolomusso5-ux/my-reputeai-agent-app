import React from 'react';

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Reputation?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Join thousands of companies using AI to monitor, analyze, and optimize their online reputation.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-md text-lg font-medium transition">
            Start Free Trial
          </a>
          <a href="#" className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:bg-opacity-10 transition">
            Schedule Demo
          </a>
        </div>
        <p className="text-blue-200 mt-6">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  );
}

export default CallToAction;
