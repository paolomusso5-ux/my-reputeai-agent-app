import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Repute<span className="text-blue-500">AI</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-blue-400 transition">Platform</a>
          <a href="#" className="text-white hover:text-blue-400 transition">Features</a>
          <a href="#" className="text-white hover:text-blue-400 transition">Pricing</a>
          <a href="#" className="text-white hover:text-blue-400 transition">About</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white hover:text-blue-400 transition">Login</a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
            Start Free Trial
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-400 transition">Platform</a>
            <a href="#" className="text-white hover:text-blue-400 transition">Features</a>
            <a href="#" className="text-white hover:text-blue-400 transition">Pricing</a>
            <a href="#" className="text-white hover:text-blue-400 transition">About</a>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-white hover:text-blue-400 transition">Login</a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition text-center">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
