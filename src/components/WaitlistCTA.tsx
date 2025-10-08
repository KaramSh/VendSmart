import { useState } from 'react';
import { Shield, Cloud, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface WaitlistCTAProps {
  id?: string;
}

export default function WaitlistCTA({ id }: WaitlistCTAProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('This email is already on the waitlist!');
        } else {
          setMessage('Something went wrong. Please try again.');
        }
        setStatus('error');
      } else {
        setMessage('Welcome to the waitlist! We\'ll be in touch soon.');
        setStatus('success');
        setEmail('');
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const trustIcons = [
    { icon: Shield, label: 'Secure' },
    { icon: Cloud, label: 'Reliable' },
    { icon: Zap, label: 'Fast' },
  ];

  return (
    <section id={id} className="relative py-32 bg-gradient-to-br from-[#0B1120] via-[#0d1829] to-[#0B1120] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0B5] opacity-10 blur-[120px] rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0B5]/10 border border-[#00F0B5]/20 mb-8">
          <div className="w-2 h-2 bg-[#00F0B5] rounded-full animate-pulse"></div>
          <span className="text-[#00F0B5] text-sm font-medium tracking-wide">EARLY ACCESS</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Be the First to Connect<br />Your Fleet
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join operators who are transforming their vending operations with real-time intelligence.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-6 py-4 bg-[#1a2332] border border-[#00F0B5]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0B5] focus:ring-2 focus:ring-[#00F0B5]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-4 bg-[#00F0B5] text-[#0B1120] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#00d9a3] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,181,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>

          {message && (
            <div className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${
              status === 'success'
                ? 'bg-[#00F0B5]/10 border border-[#00F0B5]/30 text-[#00F0B5]'
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}>
              {status === 'success' ? (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <p className="text-sm">{message}</p>
            </div>
          )}
        </form>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {trustIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-[#00F0B5]/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#00F0B5]" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
