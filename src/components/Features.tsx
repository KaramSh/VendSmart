import { Cpu, Brain, Globe } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Plug-and-Play Hardware',
    description: 'Connect to any vending machine in minutes. Universal MDB compatibility with zero configuration.',
  },
  {
    icon: Brain,
    title: 'AI Forecasting',
    description: 'Predictive analytics that learns your inventory patterns and prevents stockouts before they happen.',
  },
  {
    icon: Globe,
    title: 'Universal Compatibility',
    description: 'Works with every major vending machine brand. One platform for your entire fleet.',
  },
];

export default function Features() {
  return (
    <section className="relative py-32 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#00F0B5] tracking-[0.3em] mb-4 uppercase">
            WHAT IT DOES
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white">
            Intelligence Built In
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#0d1521] border border-[#00F0B5]/10 transition-all duration-500 hover:border-[#00F0B5]/40 hover:shadow-[0_0_40px_rgba(0,240,181,0.1)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00F0B5]/0 to-[#00F0B5]/0 group-hover:from-[#00F0B5]/5 group-hover:to-[#00F0B5]/0 transition-all duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-[#00F0B5]/10 flex items-center justify-center mb-6 group-hover:bg-[#00F0B5]/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-[#00F0B5]" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#00F0B5] to-transparent group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
