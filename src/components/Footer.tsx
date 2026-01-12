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
    <footer className="bg-[#26262B] pt-[55px] ">
      <div className='w-full max-w-[1440px] mx-auto'>
      {/* Top Divider - full width */}
      <div className="w-full h-[1px] bg-[#E5E5E5]"></div>

      <div className="px-6 pt-12 pb-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Logo and Newsletter */}
          <div className="md:w-[480px] flex-shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
                <img src={Logo} alt="Setapp Logo" className="h-5" />
                <span className="text-white ml-[-49px]">SETAPP</span>
            </div>

            {/* Newsletter */}
            <p className="text-gray-400 text-sm mb-4">
              Updates from our team, written with love 💛
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#3a3a42] border-none rounded-tl-[6px] rounded-bl-[6px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] text-sm text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-[#FFFF] w-[50px] border-none rounded-tr-[6px] rounded-br-[6px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] hover:bg-[#4a4a52] transition-colors">
                <span className=" text-[25px]">›</span>
              </button>
            </div>

            {/* DMCA Badge */}
           
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
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

            <div>
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

            <div>
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
            
            </div>
           
        </div>
 <div className='flex justify-between items-center'>
               <div className="mt-2 mb-9">
              <div className="inline-flex items-center  text-xs">
                <span className="bg-[#969799] text-white px-2 py-1 font-bold">DMCA</span>
                <span className="bg-[#1e1e2e] text-white px-2 py-1 border border-gray-600">PROTECTED</span>
              </div>
             
             
            
            </div>
             <button className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors h-fit">
                <img src={US} alt="US Flag" className="h-4 w-auto" />
                <span>English</span>
                <span>▾</span>
              </button>
            </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-[#E5E5E5]">
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
            <a href="#" className="w-8 h-8 rounded-full bg-[#969799] flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-gray-300 text-sm">f</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#969799] flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-black text-sm">𝕏</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#969799] flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-black text-sm">📷</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#969799] flex items-center justify-center hover:bg-gray-500 transition-colors">
              <span className="text-black text-sm">▶</span>
            </a>
          </div>
        </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
