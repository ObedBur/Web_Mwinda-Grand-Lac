import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles, MonitorPlay } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        skewY: 7,
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
          Goma • RDC
        </div>
        
        <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Excellence en <span className="text-transparent bg-clip-text bg-gradient-to-r from-mwinda-green to-emerald-300">Propreté</span> <br />
          & Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-mwinda-orange to-amber-300">Digitale</span>
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          MWINDA GRANDS-LACS transforme votre environnement physique et propulse votre présence numérique. Deux pôles, une seule exigence de qualité.
        </p>

        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollTo('cleaning')}
            className="group relative px-8 py-4 bg-mwinda-green text-white rounded-full font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] w-full md:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Nos Services Nettoyage
            </span>
            <div className="absolute inset-0 bg-mwinda-dark-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>

          <button 
            onClick={() => scrollTo('digital')}
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full md:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <MonitorPlay size={20} />
              Pôle Digital & Média
            </span>
            <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-mwinda-green/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-mwinda-orange/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
         <ArrowRight className="rotate-90" />
      </div>
    </section>
  );
};

export default Hero;