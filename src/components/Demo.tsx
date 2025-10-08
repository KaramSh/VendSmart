import { ArrowRight } from 'lucide-react';

interface DemoProps {
  onGetEarlyAccess: () => void;
}

export default function Demo({ onGetEarlyAccess }: DemoProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0d1829] via-[#0B1120] to-[#0d1829] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F0B5] opacity-5 blur-[150px] rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-[#00F0B5]/20 shadow-[0_0_80px_rgba(0,240,181,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00F0B5]/5 to-transparent"></div>

          <div className="relative bg-[#0B1120]/40 backdrop-blur-xl p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00F0B5]/10 border border-[#00F0B5]/20 mb-6">
                  <div className="w-1.5 h-1.5 bg-[#00F0B5] rounded-full animate-pulse"></div>
                  <span className="text-[#00F0B5] text-xs font-bold tracking-wider">LIVE DEMO</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  From route chaos<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0B5] to-[#00C2A0]">
                    to real-time clarity.
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  See how VendSmart transforms scattered machines into a connected, intelligent network that tells you exactly what to do next.
                </p>

                <button
                  onClick={onGetEarlyAccess}
                  className="group px-8 py-4 bg-[#00F0B5] text-[#0B1120] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#00d9a3] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,181,0.4)] flex items-center gap-2"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#00F0B5] blur-3xl opacity-20 animate-pulse-slower"></div>

                <div className="relative space-y-4">
                  <div className="bg-[#0B1120]/80 backdrop-blur-xl border border-[#00F0B5]/30 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(0,240,181,0.1)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F0B5] to-[#00C2A0] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#0B1120] rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Machine #23</div>
                        <div className="text-xs text-gray-400">Downtown Plaza</div>
                      </div>
                      <div className="ml-auto">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-[#00F0B5] rounded-full animate-pulse"></div>
                          <span className="text-[#00F0B5] text-xs font-semibold">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Today's Sales</span>
                        <span className="text-white font-semibold">$147.50</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Stock Level</span>
                        <span className="text-orange-400 font-semibold">32%</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Restock Alert</span>
                        <span className="text-[#00F0B5] font-semibold">2 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B1120]/80 backdrop-blur-xl border border-[#00F0B5]/30 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(0,240,181,0.1)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F0B5] to-[#00C2A0] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#0B1120] rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Machine #47</div>
                        <div className="text-xs text-gray-400">City Hall</div>
                      </div>
                      <div className="ml-auto">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-[#00F0B5] rounded-full animate-pulse"></div>
                          <span className="text-[#00F0B5] text-xs font-semibold">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Today's Sales</span>
                        <span className="text-white font-semibold">$203.25</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Stock Level</span>
                        <span className="text-[#00F0B5] font-semibold">78%</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Restock Alert</span>
                        <span className="text-gray-500 font-semibold">5 days</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B1120]/80 backdrop-blur-xl border border-orange-500/30 rounded-xl p-5 transform hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm">Low Stock Alert</div>
                        <div className="text-xs text-gray-400">3 machines need restocking</div>
                      </div>
                    </div>
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
