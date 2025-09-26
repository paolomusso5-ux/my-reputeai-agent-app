import React from 'react';

function Dashboard() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-xl p-6 md:p-10 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Real-Time Reputation Dashboard
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Sentiment Analysis */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Sentiment Analysis</h3>
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <div className="text-green-400 text-2xl font-bold">68%</div>
                  <div className="text-sm text-gray-300">Positive</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400 text-2xl font-bold">17%</div>
                  <div className="text-sm text-gray-300">Neutral</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 text-2xl font-bold">15%</div>
                  <div className="text-sm text-gray-300">Negative</div>
                </div>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div className="bg-green-400 h-2.5 rounded-l-full" style={{ width: '68%' }}></div>
                <div className="bg-gray-400 h-2.5" style={{ width: '17%', marginLeft: '68%' }}></div>
                <div className="bg-red-400 h-2.5 rounded-r-full" style={{ width: '15%', marginLeft: '85%' }}></div>
              </div>
            </div>
            
            {/* Social Media Mentions */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Social Media Mentions</h3>
              <div className="text-center">
                <div className="text-blue-400 text-5xl font-bold mb-2">120</div>
                <div className="text-sm text-gray-300">in the last 24 hours</div>
              </div>
              <div className="mt-4 flex justify-between">
                <div className="text-center">
                  <div className="text-blue-300 text-xl font-bold">42</div>
                  <div className="text-xs text-gray-300">Twitter</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-300 text-xl font-bold">38</div>
                  <div className="text-xs text-gray-300">Facebook</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-300 text-xl font-bold">25</div>
                  <div className="text-xs text-gray-300">Instagram</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-300 text-xl font-bold">15</div>
                  <div className="text-xs text-gray-300">LinkedIn</div>
                </div>
              </div>
            </div>
            
            {/* Reviews */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Reviews</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="text-yellow-400 text-5xl font-bold mr-2">4.2</div>
                <div className="flex text-yellow-400 text-xl">
                  <span>★★★★</span><span className="text-gray-500">★</span>
                </div>
              </div>
              <div className="text-center text-sm text-gray-300 mb-4">
                Based on 283 reviews
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <div>Google: 4.3★</div>
                <div>Yelp: 4.0★</div>
                <div>Facebook: 4.5★</div>
              </div>
            </div>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-900 bg-opacity-40 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-300 mb-1">Reputation Score</div>
              <div className="text-3xl font-bold text-white">87%</div>
            </div>
            <div className="bg-blue-900 bg-opacity-40 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-300 mb-1">Positive Sentiment</div>
              <div className="text-3xl font-bold text-white">73%</div>
            </div>
            <div className="bg-blue-900 bg-opacity-40 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-300 mb-1">Response Rate</div>
              <div className="text-3xl font-bold text-white">94%</div>
            </div>
            <div className="bg-blue-900 bg-opacity-40 rounded-lg p-4 text-center">
              <div className="text-sm text-gray-300 mb-1">Crisis Prevention</div>
              <div className="text-3xl font-bold text-white">85%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
