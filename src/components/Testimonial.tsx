import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0d1829] to-[#0B1120]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#00F0B5] to-transparent"></div>

          <div className="relative bg-gradient-to-br from-[#1a2332]/50 to-[#0d1521]/50 border border-[#00F0B5]/20 rounded-2xl p-12 backdrop-blur-sm">
            <div className="absolute -top-6 left-12">
              <div className="w-12 h-12 rounded-full bg-[#00F0B5] flex items-center justify-center shadow-[0_0_30px_rgba(0,240,181,0.4)]">
                <Quote className="w-6 h-6 text-[#0B1120]" />
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light italic">
              "Finally, real data from every machine — not guesswork. Vendsmart transformed how we manage our routes and inventory."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F0B5] to-[#00C2A0]"></div>
              <div>
                <p className="text-white font-semibold">Early Operator</p>
                <p className="text-gray-400 text-sm">Los Angeles, CA</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-[#00F0B5] opacity-5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
