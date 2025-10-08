import { Radio, BarChart3, Bell } from 'lucide-react';

const features = [
  {
    icon: Radio,
    title: 'Plug & Play Hardware',
    description: 'Works with MDB & DEX, no rewiring needed.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    description: 'Track sales, inventory, and temperature live.',
  },
  {
    icon: Bell,
    title: 'Predictive AI Alerts',
    description: 'Get notified when to restock before it runs out.',
  },
];

export default function Features() {
  return (
    <section className="relative py-32 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for vending operators<br />who want clarity, not chaos.
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
