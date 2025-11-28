import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load non-critical components
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const About = React.lazy(() => import('./components/About'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
const Footer = React.lazy(() => import('./components/Footer'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));

// Loading fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mwinda-orange"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <WhyChooseUs />
          <ServicesSection />
          <Portfolio />
          <Testimonials />
          <About />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}

export default App;