import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

function App() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Hero onJoinWaitlist={scrollToWaitlist} onSeeHowItWorks={scrollToHowItWorks} />
      <Features />
      <Demo onGetEarlyAccess={scrollToWaitlist} />
      <HowItWorks />
      <WaitlistCTA id="waitlist" />
      <Footer />
    </div>
  );
}

export default App;
