import Logo from '../assets/images/logo.png';
import US from '../assets/images/us-flag.png';

const Footer = () => {
  const footerLinks = {
    column1: [
      { label: "Home", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "All Apps", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Setapp for Teams", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "Download", href: "#" },
    ],
    column2: [
      { label: "About", href: "#" },
      { label: "Support", href: "#" },
      { label: "Education Discount", href: "#" },
      { label: "Family Plan", href: "#" },
      { label: "For Developers", href: "#" },
      { label: "Gift Cards", href: "#" },
      { label: "Redeem Card or Code", href: "#" },
      { label: "Setapp Reviews", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Mac Developer Survey 2023", href: "#" },
    ],
    column3: [
      { label: "Getting started with Setapp", href: "#" },
      { label: "Remote access to other Mac", href: "#" },
      { label: "Fix macOS Ventura problems", href: "#" },
      { label: "Best productivity apps", href: "#" },
      { label: "Best YouTube downloaders", href: "#" },
      { label: "Uninstall apps", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#26262B] pt-[100px] pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Newsletter */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <img src={Logo} alt="Setapp Logo" className="h-5" />
            </div>

            {/* Newsletter */}
            <p className="text-gray-400 text-sm mb-4">
              Updates from our team, written with love 💛
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#3a3a42] border border-gray-600 rounded-l-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
              <button className="bg-[#3a3a42] border border-l-0 border-gray-600 rounded-r-full px-4 py-2 hover:bg-[#4a4a52] transition-colors">
                <span className="text-gray-400">→</span>
              </button>
            </div>

            {/* DMCA Badge */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 bg-[#1e1e2e] text-white text-xs px-3 py-1 rounded border border-gray-600">
                <span className="font-bold">DMCA</span>
                <span className="text-green-400">PROTECTED</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-1">
            <ul className="space-y-2">
              {footerLinks.column1.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <ul className="space-y-2">
              {footerLinks.column2.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <ul className="space-y-2">
              {footerLinks.column3.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Selector */}
          <div className="md:col-span-1 flex md:justify-end">
            <button className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors h-fit">
              <img src={US} alt="US Flag" className="h-5 w-auto" />
              <span>English</span>
              <span>▾</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-gray-500 text-xs mb-2">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-gray-300 text-xs">f</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-gray-300 text-xs">𝕏</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-gray-300 text-xs">📷</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-gray-300 text-xs">▶</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
