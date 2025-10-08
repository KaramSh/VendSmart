import { Zap, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'About', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#0B1120] border-t border-[#00F0B5]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00F0B5] to-[#00C2A0] flex items-center justify-center shadow-[0_0_20px_rgba(0,240,181,0.3)]">
              <Zap className="w-6 h-6 text-[#0B1120]" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Vendsmart
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-[#00F0B5] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[#1a2332] border border-[#00F0B5]/20 flex items-center justify-center text-gray-400 hover:text-[#00F0B5] hover:border-[#00F0B5]/40 hover:bg-[#00F0B5]/5 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#00F0B5]/10 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Vendsmart Systems. Smart infrastructure made simple.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0B5]/20 to-transparent"></div>
    </footer>
  );
}
