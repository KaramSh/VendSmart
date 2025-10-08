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
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#0d1521] border border-[#00F0B5]/20 shadow-[0_0_60px_rgba(0,240,181,0.15)] p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0B5]/5 to-transparent"></div>

            <div className="relative space-y-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#00F0B5] rounded-full animate-pulse"></div>
                    <span className="text-[#00F0B5] text-xs font-bold tracking-wider">LIVE DASHBOARD</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Fleet Overview</h3>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Active Machines</div>
                  <div className="text-2xl font-bold text-[#00F0B5]">24/27</div>
                </div>
              </div>

              <div className="bg-[#0B1120]/60 rounded-xl p-4 border border-[#00F0B5]/10">
                <div className="text-xs text-gray-400 mb-3 font-semibold">FLEET MAP</div>
                <div className="relative h-48 bg-[#0d1521] rounded-lg overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path d="M 0,100 Q 50,80 100,90 T 200,100 T 300,95 T 400,100"
                          stroke="#00F0B5"
                          strokeWidth="1"
                          fill="none"
                          opacity="0.2"/>
                    <path d="M 0,120 Q 50,100 100,110 T 200,120 T 300,115 T 400,120"
                          stroke="#00F0B5"
                          strokeWidth="1"
                          fill="none"
                          opacity="0.2"/>

                    <circle cx="80" cy="90" r="4" fill="#00F0B5" opacity="0.8">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="150" cy="70" r="4" fill="#00F0B5" opacity="0.8">
                      <animate attributeName="r" values="4;6;4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="220" cy="110" r="4" fill="#00F0B5" opacity="0.8">
                      <animate attributeName="r" values="4;6;4" dur="2s" begin="1s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="290" cy="80" r="4" fill="#00F0B5" opacity="0.8">
                      <animate attributeName="r" values="4;6;4" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="350" cy="120" r="4" fill="#00F0B5" opacity="0.8">
                      <animate attributeName="r" values="4;6;4" dur="2s" begin="0.8s" repeatCount="indefinite"/>
                    </circle>

                    <circle cx="180" cy="140" r="4" fill="#f97316" opacity="0.9">
                      <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1s" repeatCount="indefinite"/>
                    </circle>

                    <text x="82" y="85" fill="#00F0B5" fontSize="8" fontWeight="bold">23</text>
                    <text x="152" y="65" fill="#00F0B5" fontSize="8" fontWeight="bold">47</text>
                    <text x="222" y="105" fill="#00F0B5" fontSize="8" fontWeight="bold">12</text>
                    <text x="292" y="75" fill="#00F0B5" fontSize="8" fontWeight="bold">08</text>
                    <text x="352" y="115" fill="#00F0B5" fontSize="8" fontWeight="bold">31</text>
                    <text x="182" y="135" fill="#f97316" fontSize="8" fontWeight="bold">19</text>
                  </svg>

                  <div className="absolute top-3 left-3 bg-[#0B1120]/90 backdrop-blur-sm border border-[#00F0B5]/30 rounded-lg px-3 py-1.5">
                    <div className="text-[10px] text-gray-400">Downtown Region</div>
                    <div className="text-xs text-white font-semibold">6 Machines</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-[#00F0B5] rounded-full"></div>
                    <span className="text-gray-400">Active</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-400">Needs Restock</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0B1120]/60 rounded-xl p-4 border border-[#00F0B5]/10">
                  <div className="text-xs text-gray-400 mb-2">Today's Revenue</div>
                  <div className="text-2xl font-bold text-white">$3,247</div>
                  <div className="text-xs text-[#00F0B5] mt-1">↑ 12% vs yesterday</div>
                </div>

                <div className="bg-[#0B1120]/60 rounded-xl p-4 border border-[#00F0B5]/10">
                  <div className="text-xs text-gray-400 mb-2">Avg Stock Level</div>
                  <div className="text-2xl font-bold text-white">68%</div>
                  <div className="text-xs text-gray-400 mt-1">Across all machines</div>
                </div>
              </div>

              <div className="bg-[#0B1120]/60 rounded-xl p-4 border border-orange-500/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white mb-1">Priority Restocking Alert</div>
                    <div className="text-xs text-gray-400 mb-2">Machine #19 - City Hall</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-orange-500/10 border border-orange-500/30 text-orange-300 px-2 py-0.5 rounded">Coke: 2 left</span>
                      <span className="bg-orange-500/10 border border-orange-500/30 text-orange-300 px-2 py-0.5 rounded">Chips: 1 left</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#0B1120]/60 rounded-xl p-3 border border-[#00F0B5]/20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#00F0B5] rounded-full animate-pulse"></div>
                  <span className="text-xs text-white font-semibold">MDB/DEX Connected</span>
                </div>
                <div className="text-xs text-gray-400">Last sync: 2 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
