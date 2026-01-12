import HeroImage from '../assets/images/Section-1.png';

const Hero = () => {
  return (
    <section
      className="min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 mt-[56px] sm:mt-[64px] relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[#26262B]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative h-full">
        {/* Invisible clickable buttons overlay - positioned to match the image buttons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 mt-[150px] sm:mt-[200px] md:mt-[295px]">
            {/* Try free for 7 days button - invisible overlay */}
            <a
              href="#"
              className="w-[120px] sm:w-[140px] md:w-[155px] h-[36px] sm:h-[40px] md:h-[44px] rounded-lg cursor-pointer opacity-0 hover:opacity-10 hover:bg-white transition-opacity"
              aria-label="Try free for 7 days"
            />

            {/* Apple button - invisible overlay */}
            <a
              href="#"
              className="w-[36px] sm:w-[40px] md:w-[44px] h-[36px] sm:h-[40px] md:h-[44px] rounded-xl cursor-pointer opacity-0 hover:opacity-10 hover:bg-white transition-opacity"
              aria-label="Download on Apple"
            />

            {/* Google button - invisible overlay */}
            <a
              href="#"
              className="w-[36px] sm:w-[40px] md:w-[44px] h-[36px] sm:h-[40px] md:h-[44px] rounded-xl cursor-pointer opacity-0 hover:opacity-10 hover:bg-white transition-opacity"
              aria-label="Download on Google"
            />
          </div>
        </div>
      </div>

      {/* Bottom Divider Line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full h-px bg-[#E5E5E5]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
