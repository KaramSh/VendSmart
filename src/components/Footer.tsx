import { Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1120] border-t border-[#00F0B5]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F0B5] to-[#00C2A0] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,181,0.3)]">
                <Zap className="w-6 h-6 text-[#0B1120]" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                VendSmart
              </span>
            </div>
            <p className="text-sm text-gray-400 italic">
              Smarter Machines. Simpler Routes.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@vendsmart.io"
              className="text-gray-400 hover:text-[#00F0B5] transition-colors duration-300 text-sm font-medium"
            >
              contact@vendsmart.io
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#00F0B5]/10 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} VendSmart. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0B5]/20 to-transparent"></div>
    </footer>
  );
}
