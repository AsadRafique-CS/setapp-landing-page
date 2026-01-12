import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import US from '../assets/images/us-flag.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#26262B] py-4 px-4 sm:px-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Setapp Logo" className="h-5 sm:h-6" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">How it works</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">All apps</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Pricing</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">For Teams</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Blog</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Podcast</a>
        </nav>

        {/* Right side - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">|</span>
            <button className="flex items-center space-x-1">
              <img src={US} alt="US Flag" className="h-6" />
            </button>
          </div>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Sign In</a>
          <button className="bg-transparent border border-white text-white text-sm hover:bg-white hover:text-[#1e1e2e] transition-colors rounded-[6px] py-[6px] px-[23px]">
            Try free
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-600 pt-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">How it works</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">All apps</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Pricing</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">For Teams</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Blog</a>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Podcast</a>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-600">
              <button className="flex items-center space-x-1">
                <img src={US} alt="US Flag" className="h-5" />
              </button>
              <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Sign In</a>
              <button className="bg-transparent border border-white text-white text-sm hover:bg-white hover:text-[#1e1e2e] transition-colors rounded-[6px] py-[6px] px-[16px]">
                Try free
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
