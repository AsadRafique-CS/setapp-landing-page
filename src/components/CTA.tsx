import Logo from '../assets/images/ctx-logo.png';

const CTA = () => {
  return (
    <section className="relative pt-[20px] sm:pt-[34px]">
      {/* Top dark section */}
      <div className="h-24 sm:h-32 md:h-40"></div>

      {/* Bottom dark section (matches footer) */}
      <div className="bg-[#26262B] h-24 sm:h-32 md:h-40"></div>

      {/* CTA Card - positioned to overlap both sections */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
        <div className="bg-[#F5F5F5] rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl w-full shadow-lg">
          {/* Setapp Logo */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <img src={Logo} alt="Setapp" className="h-6 sm:h-8 md:h-auto" />
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1e1e2e] mb-1 sm:mb-2">
            Superpowers starting $9.99/month.
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1e1e2e] mb-4 sm:mb-6 md:mb-8">
            Free for 7 days.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button className="bg-[#1e1e2e] text-white rounded-[6px] py-3 px-6 sm:pt-[13px] sm:pr-[31px] sm:pb-[13px] sm:pl-[31px] text-sm font-medium hover:bg-[#2a2a3e] transition-colors w-full sm:w-auto text-center">
              Get started now
            </button>
            <button className="bg-transparent border border-[#1e1e2e] text-[#1e1e2e] rounded-[6px] py-3 px-6 sm:pt-[13px] sm:pr-[31px] sm:pb-[13px] sm:pl-[31px] text-sm font-medium hover:bg-[#1e1e2e] hover:text-white transition-colors w-full sm:w-auto text-center">
              More about Setapp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
