import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
  onSeeHowItWorks: () => void;
}

export default function Hero({ onJoinWaitlist, onSeeHowItWorks }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#0d1829] to-[#0B1120]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#00F0B5] opacity-10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#00F0B5] opacity-5 blur-[100px] rounded-full animate-pulse-slower"></div>

        <div className="particle-container absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-[#00F0B5] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] animate-fade-in-up">
            Your vending machines<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0B5] to-[#00C2A0]">
              just got smarter.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up-delay max-w-xl">
            VendSmart is a plug-and-play IoT module that connects to any machine and streams real-time sales and inventory data to your dashboard — no rewiring, no tech setup.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up-delay-2">
            <button
              onClick={onJoinWaitlist}
              className="group px-8 py-4 bg-[#00F0B5] text-[#0B1120] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#00d9a3] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,181,0.4)] flex items-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="group px-8 py-4 bg-transparent border-2 border-[#00F0B5]/30 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:border-[#00F0B5] hover:bg-[#00F0B5]/5 flex items-center gap-2"
            >
              See How It Works
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="relative animate-fade-in-up-delay-3">
          <div className="relative rounded-2xl overflow-hidden border border-[#00F0B5]/20 shadow-[0_0_60px_rgba(0,240,181,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0B5]/5 to-transparent"></div>
            <img
              src="https://images.pexels.com/photos/8961521/pexels-photo-8961521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Vending machine with plug-in device and live restock dashboard"
              className="w-full h-[600px] object-cover"
            />

            <div className="absolute top-6 right-6 bg-[#0B1120]/95 backdrop-blur-xl border border-[#00F0B5]/30 rounded-xl p-5 max-w-xs shadow-[0_0_40px_rgba(0,240,181,0.2)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#00F0B5] rounded-full animate-ping"></div>
                <span className="text-[#00F0B5] text-xs font-bold tracking-wider">LIVE DATA</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-white">
                  <span>Machine #47</span>
                  <span className="text-[#00F0B5] font-semibold">Active</span>
                </div>
                <div className="h-px bg-[#00F0B5]/20"></div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs">Coke 12oz</span>
                    <span className="text-[#00F0B5] font-bold text-xs">3 left</span>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs">Lays Classic</span>
                    <span className="text-[#00F0B5] font-bold text-xs">5 left</span>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs">Snickers</span>
                    <span className="text-gray-500 text-xs">Full</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#00F0B5]/20 blur-xl rounded-full"></div>
                <div className="relative bg-[#0B1120]/95 backdrop-blur-xl border-2 border-[#00F0B5] rounded-lg px-4 py-2 flex items-center gap-2 shadow-[0_0_30px_rgba(0,240,181,0.3)]">
                  <div className="w-2.5 h-2.5 bg-[#00F0B5] rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-[9px] text-[#00F0B5] font-bold tracking-wider">MDB/DEX PORT</div>
                    <div className="text-xs text-white font-semibold">Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
