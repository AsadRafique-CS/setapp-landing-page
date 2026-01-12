const Testimonials = () => {
  const testimonials = [
    {
      text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
      author: "Arash Pourhabibi",
      handle: "@ArashPourhabibi",
      platform: "twitter",
      bgColor: "bg-[#6b7280]",
    },
    {
      text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
      author: "Mauricio Sanchez",
      handle: "@m741s",
      platform: "instagram",
      bgColor: "bg-[#d4a574]",
    },
    {
      text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
      author: "Meredith Sweet",
      handle: "@meredith.sweet.silberstein",
      platform: "facebook",
      bgColor: "bg-[#9f7aea]",
    },
  ];

  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e2e] mb-4 md:mb-0">
            Setapp in your words.
          </h2>
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm max-w-xs">
              What you say about how Setapp powers you up.
            </p>
            <div className="flex items-center gap-3">
              {/* Social icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-white text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1da1f2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-white text-sm">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f56040] to-[#c13584] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-white text-sm">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-white text-sm">▶</span>
              </a>
            </div>
            {/* Navigation arrows */}
            <div className="flex gap-2 ml-4">
              <button className="text-gray-400 hover:text-[#1e1e2e] transition-colors">‹</button>
              <button className="text-gray-400 hover:text-[#1e1e2e] transition-colors">›</button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} rounded-2xl p-6 relative`}
            >
              <p className="text-white text-sm leading-relaxed mb-8 min-h-[100px]">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.author}</p>
                  <p className="text-white/70 text-xs">{testimonial.handle}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  {testimonial.platform === "twitter" && <span className="text-white text-xs">𝕏</span>}
                  {testimonial.platform === "instagram" && <span className="text-white text-xs">📷</span>}
                  {testimonial.platform === "facebook" && <span className="text-white text-xs">f</span>}
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
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
