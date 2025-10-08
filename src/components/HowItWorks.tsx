import { Plug, Wifi, Monitor, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Plug,
    number: '01',
    title: 'Plug In the Read-Only Module',
    description: 'Detects the machine automatically',
  },
  {
    icon: Wifi,
    number: '02',
    title: 'Transmit Data Securely',
    description: 'LTE/Wi-Fi — no manual sync',
  },
  {
    icon: Monitor,
    number: '03',
    title: 'View Insights Instantly',
    description: 'Sales, stock, and performance updates',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Plan Smarter Routes',
    description: 'Save time, fuel, and waste',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 bg-gradient-to-b from-[#0B1120] to-[#0d1829]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-4xl md:text-5xl font-bold text-white mb-3">
            How It Works
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From route chaos to real-time clarity.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00F0B5]/20 to-transparent hidden lg:block"></div>

          <div className="grid lg:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-[#00F0B5] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#00F0B5] to-[#00C2A0] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,181,0.3)]">
                        <Icon className="w-9 h-9 text-[#0B1120]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0B1120] border-2 border-[#00F0B5] flex items-center justify-center">
                        <span className="text-[#00F0B5] text-xs font-bold">{step.number}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-6 w-12 h-0.5">
                      <div className="w-full h-full bg-gradient-to-r from-[#00F0B5] to-transparent animate-pulse-slow"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
