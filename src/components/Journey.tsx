import sectionImage from '../assets/images/Section-3.png';

const Journey = () => {
  return (
    <section>
      {/* Dark top section with header */}
      <div className="bg-[#26262B] pb-6 sm:pb-8 relative pt-[24px] sm:pt-[34px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 md:mb-0">
              Your Setapp journey.
            </h2>
            <p className="text-gray-400 text-sm max-w-sm">
              Type in your task into Setapp search and get instant app recommendations.
            </p>
          </div>

          {/* Divider - thinner line */}
          <div className="w-full h-[1px] bg-[#E5E5E5] mt-[40px] sm:mt-[60px] md:mt-[74px] mb-4 sm:mb-6"></div>
        </div>
      </div>

      {/* Half black / half white section (horizontal split) */}
      <div className="relative">
        {/* Top half black background */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#26262B]"></div>
        {/* Bottom half white background */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

        {/* Content on top */}
        <div className="relative py-8 sm:py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Video Testimonial Card with Image */}
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
              {/* Background Image */}
              <img
                src={sectionImage}
                alt="Jason Staczek testimonial"
                className="w-full h-auto object-cover"
              />

              {/* Navigation arrows - invisible clickable overlay */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 flex gap-2 z-10">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Previous"
                />
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Next"
                />
              </div>

              {/* Play button - invisible clickable overlay */}
              <a
                href="#"
                className="absolute left-4 sm:left-6 md:left-8 bottom-16 sm:bottom-24 md:bottom-32 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer z-10"
                aria-label="Play video"
              />
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-7 md:mt-8">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1e1e2e]"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
