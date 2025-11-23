import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Marie K.",
    role: "Gérante Restaurant",
    text: "Le service de nettoyage commercial de Mwinda est impeccable. Nos salles sont toujours prêtes pour accueillir les clients dans les meilleures conditions.",
    stars: 5,
    service: "Nettoyage"
  },
  {
    name: "Jean-Paul B.",
    role: "Entrepreneur",
    text: "Grâce à leur équipe marketing, notre visibilité sur les réseaux sociaux a explosé en 3 mois. Une approche très pro et orientée résultats.",
    stars: 5,
    service: "Digital"
  },
  {
    name: "Famille Mumbere",
    role: "Résidentiel",
    text: "Nous utilisons le service de repassage et ménage depuis un an. Le personnel est de confiance et très minutieux. Je recommande vivement.",
    stars: 5,
    service: "Nettoyage"
  }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Ce que disent nos clients</h2>
          <div className="w-20 h-1 bg-mwinda-green mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 text-slate-100 fill-slate-100" size={60} />
              
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>

              <p className="text-slate-600 mb-6 relative z-10 italic leading-relaxed">"{t.text}"</p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white ${t.service === 'Nettoyage' ? 'bg-mwinda-green' : 'bg-mwinda-orange'}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;