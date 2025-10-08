import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Preview from './components/Preview';
import ROIMetrics from './components/ROIMetrics';
import Testimonial from './components/Testimonial';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

function App() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Hero onJoinWaitlist={scrollToWaitlist} />
      <Features />
      <HowItWorks />
      <Preview />
      <ROIMetrics />
      <Testimonial />
      <WaitlistCTA id="waitlist" />
      <Footer />
    </div>
  );
}

export default App;
