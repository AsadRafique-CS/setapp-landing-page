import Logo from '../assets/images/logo.png';
import US from '../assets/images/us-flag.png';
import Insta from '../assets/images/insta-footer.png';
import Twitter from '../assets/images/twitter-footer.png';
import Fb from '../assets/images/fb-footer.png';
import Youtube from '../assets/images/youtube-footer.png';
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
    <footer className="bg-[#26262B] pt-[30px] sm:pt-[40px] md:pt-[55px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Top Divider - full width */}
        <div className="w-full h-[1px] bg-[#E5E5E5]"></div>

        <div className="px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Logo and Newsletter */}
            <div className="w-full lg:w-[480px] flex-shrink-0">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <img src={Logo} alt="Setapp Logo" className="h-4 sm:h-5" />
                <span className="text-white ml-[-49px] text-sm sm:text-base">SETAPP</span>
              </div>

              {/* Newsletter */}
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Updates from our team, written with love 💛
              </p>
              <div className="flex max-w-full sm:max-w-[400px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 bg-[#3a3a42] border-none rounded-tl-[6px] rounded-bl-[6px] py-3 sm:pt-[14px] sm:pr-[12px] sm:pb-[14px] px-3 sm:pl-[12px] text-sm text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-[#FFFF] w-[40px] sm:w-[50px] border-none rounded-tr-[6px] rounded-br-[6px] py-3 sm:pt-[14px] sm:pr-[12px] sm:pb-[14px] sm:pl-[12px] hover:bg-[#4a4a52] transition-colors flex items-center justify-center">
                  <span className="text-[20px] sm:text-[25px]">›</span>
                </button>
              </div>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.column1.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.column2.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.column3.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* DMCA and Language row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="mt-2 mb-6 sm:mb-9">
              <div className="inline-flex items-center text-xs">
                <span className="bg-[#969799] text-white px-2 py-1 font-bold">DMCA</span>
                <span className="bg-[#1e1e2e] text-white px-2 py-1 border border-gray-600">PROTECTED</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm hover:text-white transition-colors h-fit">
              <img src={US} alt="US Flag" className="h-3 sm:h-4 w-auto" />
              <span>English</span>
              <span>▾</span>
            </button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 sm:pt-6 border-t border-[#E5E5E5]">
            <div>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-2">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <a href="#" className="text-gray-500 text-[10px] sm:text-xs hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="text-gray-500 text-[10px] sm:text-xs hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="#" className="  flex items-center justify-center hover:bg-gray-500 transition-colors">
              <img src={Fb} alt="" />
              </a>
              <a href="#" className="   flex items-center justify-center hover:bg-gray-500 transition-colors">
                <img src={Twitter} alt="" />
              </a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8   flex items-center justify-center hover:bg-gray-500 transition-colors">
                <img src={Insta} alt="" />
              </a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8   flex items-center justify-center hover:bg-gray-500 transition-colors">
                <img src={Youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
