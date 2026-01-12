import setapp1 from '../assets/images/setapp 1.png';
import setapp2Left from '../assets/images/setapp 2 left-side.png';
import setapp2Right from '../assets/images/setapp 2 right side.png';

const Features = () => {
  return (
    <section className="bg-[#26262B] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-0">
            What you get on Setapp.
          </h2>
          <p className="text-gray-400 text-sm max-w-sm">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>

        {/* Feature Images */}
        <div className="space-y-6">
          {/* First image - setapp 1.png (full width) */}
          <div className="w-full">
            <img
              src={setapp1}
              alt="Keep your Mac clean - CleanMyMac"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Second row - setapp 2 left and right side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={setapp2Left}
                alt="Write code"
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div>
              <img
                src={setapp2Right}
                alt="Join meetings in a click"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* View all superpowers link */}
        <div className="flex justify-center mt-12">
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:underline">
            <span className="text-[31px] font-bold">→</span>
            <span>View all superpowers</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
