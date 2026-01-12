import leftArrow from '../assets/images/left-arrow.png';
import Youtube from '../assets/images/youtube.png';
import Twitter from '../assets/images/twitter.png';
import Facebook from '../assets/images/facbook.png';
import Insta from '../assets/images/insta.png';
import Fb from '../assets/images/fb-testimonial.png';
import Instagram from '../assets/images/insta-testimonial.png';
import Tweet from '../assets/images/twitter-testimonial.png';
const Testimonials = () => {
  const testimonials = [
    {
      text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
      author: "Arash Pourhabibi",
      handle: "@ArashPourhabibi",
      platform: "twitter",
      contentBgColor: "bg-[#6b7280]",
    },
    {
      text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
      author: "Mauricio Sanchez",
      handle: "@m741s",
      platform: "instagram",
      contentBgColor: "bg-[#d4a574]",
    },
    {
      text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
      author: "Meredith Sweet",
      handle: "@meredith.sweet.silberstein",
      platform: "facebook",
      contentBgColor: "bg-[#9f7aea]",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1e1e2e] mb-4 lg:mb-0">
            Setapp in your words.
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-[96px]">
              <p className="text-[#26262B] text-sm max-w-[220px]">
                What you say about how Setapp powers you up.
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Social icons */}
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={Facebook} alt="Facebook" className="w-6 h-6 sm:w-auto sm:h-auto" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={Twitter} alt="Twitter" className="w-6 h-6 sm:w-auto sm:h-auto" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={Insta} alt="Instagram" className="w-6 h-6 sm:w-auto sm:h-auto" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={Youtube} alt="YouTube" className="w-6 h-6 sm:w-auto sm:h-auto" />
                </a>
              </div>
            </div>
            {/* Navigation arrows */}
            <div className="flex gap-8 sm:gap-[46px]">
              <button className="hover:opacity-100 transition-opacity">
                <img src={leftArrow} alt="Previous" className="w-[12px] h-[18px] sm:w-[14px] sm:h-[22px] opacity-60 rotate-180" />
              </button>
              <button className="hover:opacity-100 transition-opacity">
                <img src={leftArrow} alt="Next" className="w-[12px] h-[18px] sm:w-[14px] sm:h-[22px] opacity-60" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Colored content area */}
              <div className={`${testimonial.contentBgColor} p-4 sm:p-6 min-h-[140px] sm:min-h-[180px]`}>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* White author area */}
              <div className="bg-[#F5F5F5] p-3 sm:p-4 flex items-center justify-between">
                <div>
                  <p className="text-[#1e1e2e] font-medium text-xs sm:text-sm">{testimonial.author}</p>
                  <p className="text-gray-400 text-xs">{testimonial.handle}</p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                  {testimonial.platform === "twitter" && (
                  <img src={Tweet} alt="" /> )}
                  {testimonial.platform === "instagram" && (
                   <img src={Instagram} alt="" /> )}
                  {testimonial.platform === "facebook" && (
                    <img src={Fb} alt="" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1e1e2e]"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
