import React from 'react';

function Testimonials() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
          See how businesses like yours have transformed their online reputation with ReputeAI.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-700 rounded-xl p-8 relative">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "ReputeAI has completely transformed how we manage our online reputation. We've seen a 340% increase in positive reviews and prevented 3 potential PR crises before they happened."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                SJ
              </div>
              <div>
                <h4 className="text-white font-semibold">Sarah Johnson</h4>
                <p className="text-gray-400 text-sm">CMO, TechCorp</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-gray-700 rounded-xl p-8 relative">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "The predictive analytics feature saved our reputation during a potential crisis. ReputeAI detected the issue early, allowing us to address it before it escalated."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                MC
              </div>
              <div>
                <h4 className="text-white font-semibold">Dr. Michael Chen</h4>
                <p className="text-gray-400 text-sm">CEO, HealthPlus</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-gray-700 rounded-xl p-8 relative">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 mb-6">
              "Since implementing ReputeAI, we've seen a 45% improvement in customer satisfaction scores and a significant increase in positive online reviews across all platforms."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                LR
              </div>
              <div>
                <h4 className="text-white font-semibold">Lisa Rodriguez</h4>
                <p className="text-gray-400 text-sm">Brand Manager, RetailMax</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition">
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
