const CTA = () => {
  return (
    <section className="relative pt-[34px]">
      {/* Top dark section */}
      <div className=" h-40"></div>

      {/* Bottom dark section (matches footer) */}
      <div className="bg-[#26262B] h-40"></div>

      {/* CTA Card - positioned to overlap both sections */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="bg-[#F5F5F5] rounded-3xl p-12 max-w-4xl w-full shadow-lg">
          {/* Setapp Logo */}
          <div className="mb-8">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 12L18 20L32 28L46 20L32 12Z" fill="#D4A574"/>
              <path d="M32 28L18 20V36L32 44V28Z" fill="#C4956A"/>
              <path d="M32 28L46 20V36L32 44V28Z" fill="#E4B584"/>
              <path d="M32 28L18 36L32 44L46 36L32 28Z" fill="#D4A574"/>
              <path d="M32 44L18 36V52L32 60V44Z" fill="#C4956A"/>
              <path d="M32 44L46 36V52L32 60V44Z" fill="#E4B584"/>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e2e] mb-2">
            Superpowers starting $9.99/month.
          </h2>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e2e] mb-8">
            Free for 7 days.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1e1e2e] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2a2a3e] transition-colors">
              Get started now
            </button>
            <button className="bg-transparent border border-[#1e1e2e] text-[#1e1e2e] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1e1e2e] hover:text-white transition-colors">
              More about Setapp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
