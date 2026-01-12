import leftArrow from '../assets/images/left-arrow.png';
import Youtube from '../assets/images/youtube.png';
import Twitter from '../assets/images/twitter.png';
import Facebook from '../assets/images/facbook.png';
import Insta from '../assets/images/insta.png';
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e2e] mb-4 md:mb-0">
            Setapp in your words.
          </h2>
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-[96px]">
              <p className="text-[#26262B] text-sm max-w-[220px]">
                What you say about how Setapp powers you up.
              </p>
              <div className="flex items-center gap-3">
                {/* Social icons */}
                <a href="#" className="w-10 h-10 rounded-full  flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src={Facebook} alt="" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                 <img src={Twitter} alt="" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br  flex items-center justify-center hover:opacity-80 transition-opacity">
                 <img src={Insta} alt="" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                 <img src={Youtube} alt="" />
                </a>
              </div>
            </div>
            {/* Navigation arrows */}
            <div className="flex gap-[46px]">
              <button className="hover:opacity-100 transition-opacity">
                <img src={leftArrow} alt="Previous" className="w-[14px] h-[22px] opacity-60 rotate-180" />
              </button>
              <button className="hover:opacity-100 transition-opacity">
                <img src={leftArrow} alt="Next" className="w-[14px] h-[22px] opacity-60" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Colored content area */}
              <div className={`${testimonial.contentBgColor} p-6 min-h-[180px]`}>
                <p className="text-white text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* White author area */}
              <div className="bg-[#F5F5F5] p-4 flex items-center justify-between">
                <div>
                  <p className="text-[#1e1e2e] font-medium text-sm">{testimonial.author}</p>
                  <p className="text-gray-400 text-xs">{testimonial.handle}</p>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  {testimonial.platform === "twitter" && (
                    <span className="text-[#1da1f2] text-lg font-bold">𝕏</span>
                  )}
                  {testimonial.platform === "instagram" && (
                    <span className="text-[#c13584] text-lg">📷</span>
                  )}
                  {testimonial.platform === "facebook" && (
                    <span className="text-[#1877f2] text-lg font-bold">f</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-[#1e1e2e]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
