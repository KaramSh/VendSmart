import { Plug, Upload, Cloud, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Plug,
    number: '01',
    title: 'DEX/MDB Read-Only',
    description: 'Device connects to vending machine port and reads transaction data without sending control signals.',
    badge: 'Read-Only Connection',
  },
  {
    icon: Upload,
    number: '02',
    title: 'Secure Upload',
    description: 'Encrypted sales, inventory, and diagnostic data transmits to cloud via cellular or WiFi.',
    badge: 'TLS Encrypted',
  },
  {
    icon: Cloud,
    number: '03',
    title: 'AI Pre-Kitting',
    description: 'Machine learning analyzes consumption patterns and generates optimal picklists per route stop.',
    badge: 'Predictive Analytics',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Route Dashboard',
    description: 'Operators receive stop-by-stop picklists, stockout forecasts, and route optimization.',
    badge: 'Actionable Insights',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0B1120] to-[#0d1829]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#00F0B5] tracking-[0.3em] mb-4 uppercase">
            HOW IT WORKS
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white">
            Four Steps to Smarter Operations
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00F0B5]/20 to-transparent hidden lg:block"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-[#00F0B5] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#00F0B5] to-[#00C2A0] flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,181,0.3)]">
                        <Icon className="w-10 h-10 text-[#0B1120]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B1120] border-2 border-[#00F0B5] flex items-center justify-center">
                        <span className="text-[#00F0B5] text-xs font-bold">{step.number}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="inline-block bg-[#00F0B5]/10 border border-[#00F0B5]/30 rounded-full px-3 py-1 mb-3">
                        <span className="text-[#00F0B5] text-xs font-semibold">{step.badge}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00F0B5] to-transparent"></div>
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
