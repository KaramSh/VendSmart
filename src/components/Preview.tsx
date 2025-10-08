import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const previews = [
  {
    image: 'https://images.pexels.com/photos/17483874/pexels-photo-17483874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Universal Telemetry Device',
    description: 'Plug-in module with DEX cable, GPS tracking, LTE/Wi-Fi connectivity, and backup power',
    labels: ['DEX Read-Only', 'GPS Tracking', 'LTE/Wi-Fi', 'Backup Power'],
  },
  {
    image: 'https://images.pexels.com/photos/7651907/pexels-photo-7651907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Predictive Restocking Dashboard',
    description: 'Fleet map colored by days-to-stockout, machine slot details, and AI-generated picklists',
    labels: ['Fleet Map', 'Stockout Forecast', 'Route Planning', 'Slot-Level Data'],
  },
  {
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Mobile Driver App',
    description: 'Optimized route stops with per-machine picklists and fill-confirmation checkboxes',
    labels: ['Stop Order', 'Picklist View', 'Mark Filled', 'GPS Navigation'],
  },
];

export default function Preview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % previews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + previews.length) % previews.length);
  };

  return (
    <section className="relative py-32 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#00F0B5] tracking-[0.3em] mb-4 uppercase">
            PREVIEW
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white">
            See Vendsmart in Action
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {previews.map((preview, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10 pointer-events-none"></div>
                    <img
                      src={preview.image}
                      alt={preview.title}
                      className="w-full h-[600px] object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 border-2 border-[#00F0B5]/20 rounded-2xl group-hover:border-[#00F0B5]/40 transition-all duration-300"></div>
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,240,181,0.1)]"></div>

                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
                      {preview.labels.map((label, labelIndex) => (
                        <div
                          key={labelIndex}
                          className="bg-[#0B1120]/90 backdrop-blur-sm border border-[#00F0B5]/40 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#00F0B5] shadow-[0_0_20px_rgba(0,240,181,0.2)]"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="bg-[#0B1120]/90 backdrop-blur-xl border border-[#00F0B5]/30 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {preview.title}
                      </h3>
                      <p className="text-gray-300">
                        {preview.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0B1120]/80 backdrop-blur-sm border border-[#00F0B5]/30 flex items-center justify-center text-[#00F0B5] hover:bg-[#00F0B5]/10 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0B1120]/80 backdrop-blur-sm border border-[#00F0B5]/30 flex items-center justify-center text-[#00F0B5] hover:bg-[#00F0B5]/10 hover:scale-110 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {previews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-12 bg-[#00F0B5]'
                    : 'w-2 bg-[#00F0B5]/30 hover:bg-[#00F0B5]/50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
