import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        }
      });
      
      gsap.from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipe Mwinda à Goma" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-bold text-lg mb-1">Basé à Goma</p>
              <p className="text-sm text-slate-300">Au cœur de la région des Grands-Lacs, RDC.</p>
            </div>
          </div>

          <div ref={textRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
              <MapPin size={16} />
              À Propos de Nous
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              L'Excellence Locale, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mwinda-green to-mwinda-orange">Standards Internationaux</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              MWINDA GRANDS-LACS Sarl est née d'une vision simple : apporter des solutions professionnelles de haute qualité aux entreprises et particuliers de la RDC.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Que ce soit pour maintenir la propreté irréprochable de vos locaux ou pour propulser votre image de marque dans l'ère numérique, nous engageons notre réputation sur chaque mission.
            </p>

            <ul className="space-y-4">
              {[
                "Équipe locale formée et passionnée",
                "Support client réactif 7j/7",
                "Solutions sur-mesure adaptées au marché congolais",
                "Innovation constante dans nos méthodes"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="text-mwinda-green shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;