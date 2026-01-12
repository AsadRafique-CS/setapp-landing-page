import Logo from '../assets/images/logo.png';
import US from '../assets/images/us-flag.png';
const Header = () => {
  return (
    <header className="bg-[#26262B] py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-[33%]">
          <img src={Logo} alt="Setapp Logo" className="h-6" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">How it works</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">All apps</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Pricing</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">For Teams</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Blog</a>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Podcast</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-gray-400">|</span>
            <button className="flex items-center space-x-1">
               <img src={US} alt="Setapp Logo" className="h-6" />
        
            </button>
          </div>
          <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Sign In</a>
          <button className="bg-transparent border border-white text-white text-sm hover:bg-white hover:text-[#1e1e2e] transition-colors rounded-[6px] py-[6px] px-[23px]">
            Try free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
