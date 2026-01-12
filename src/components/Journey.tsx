import sectionImage from '../assets/images/Section-3.png';

const Journey = () => {
  return (
    <section>
      {/* Dark top section with header */}
      <div className="bg-[#26262B] pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-0">
              Your Setapp journey.
            </h2>
            <p className="text-gray-400 text-sm max-w-sm">
              Type in your task into Setapp search and get instant app recommendations.
            </p>
          </div>

          {/* Divider - thinner line */}
          <div className="w-full h-[1px] bg-gray-600"></div>
        </div>
      </div>

      {/* White/light section with testimonial */}
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Video Testimonial Card with Image */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
              src={sectionImage}
              alt="Jason Staczek testimonial"
              className="w-full h-auto object-cover"
            />

            {/* Navigation arrows - invisible clickable overlay */}
            <div className="absolute top-6 right-6 flex gap-2 z-10">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Previous"
              />
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Next"
              />
            </div>

            {/* Play button - invisible clickable overlay */}
            <a
              href="#"
              className="absolute left-8 bottom-32 w-14 h-14 rounded-full bg-transparent flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer z-10"
              aria-label="Play video"
            />
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-[#1e1e2e]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
