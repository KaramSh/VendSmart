import { TrendingDown, TrendingUp, Zap } from 'lucide-react';

const metrics = [
  {
    icon: TrendingDown,
    value: '−28%',
    label: 'Miles Driven',
    description: 'Optimized routing reduces fuel costs and driver hours',
    trend: 'down',
  },
  {
    icon: TrendingDown,
    value: '−41%',
    label: 'Stockouts',
    description: 'Predictive restocking keeps machines full and earning',
    trend: 'down',
  },
  {
    icon: TrendingUp,
    value: '+12%',
    label: 'Sales Increase',
    description: 'Better availability drives higher revenue per machine',
    trend: 'up',
  },
];

export default function ROIMetrics() {
  return (
    <section className="relative py-32 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#00F0B5] tracking-[0.3em] mb-4 uppercase">
            PROVEN RESULTS
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white">
            Real Impact, Real ROI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F0B5]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0d1521] border border-[#00F0B5]/20 rounded-2xl p-8 group-hover:border-[#00F0B5]/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#00F0B5]/10 flex items-center justify-center group-hover:bg-[#00F0B5]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#00F0B5]" />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      metric.trend === 'down'
                        ? 'bg-[#00F0B5]/10 text-[#00F0B5]'
                        : 'bg-green-500/10 text-green-400'
                    }`}>
                      {metric.trend === 'down' ? 'Cost Savings' : 'Revenue Growth'}
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="text-5xl font-bold text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-lg font-semibold text-[#00F0B5]">
                      {metric.label}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1a2332]/80 to-[#0d1521]/80 border border-[#00F0B5]/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="absolute -inset-px bg-gradient-to-r from-[#00F0B5]/20 via-[#00F0B5]/5 to-[#00F0B5]/20 rounded-2xl blur"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#00F0B5] to-[#00C2A0] flex items-center justify-center shadow-[0_0_30px_rgba(0,240,181,0.3)]">
                <Zap className="w-8 h-8 text-[#0B1120]" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Based on Early Operator Deployments
                </h3>
                <p className="text-gray-400">
                  Average metrics from pilot operators managing 50+ machines with Vendsmart over 6-month periods. Individual results vary by fleet size, route density, and operational baseline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
