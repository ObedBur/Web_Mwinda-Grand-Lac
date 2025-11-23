import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Zap, Users, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: ShieldCheck,
    title: "Expertise Certifiée",
    desc: "Des protocoles stricts pour le nettoyage et une maîtrise technique pointue pour le digital.",
    color: "text-mwinda-green",
    bg: "bg-emerald-50"
  },
  {
    icon: Zap,
    title: "Double Compétence",
    desc: "Un partenaire unique pour votre image physique (locaux) et virtuelle (web).",
    color: "text-mwinda-orange",
    bg: "bg-orange-50"
  },
  {
    icon: Users,
    title: "Ancrage Local Goma",
    desc: "Nous comprenons parfaitement les défis et les opportunités du marché en RDC.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: HeartHandshake,
    title: "Service Sur-Mesure",
    desc: "Des solutions personnalisées, qu'il s'agisse d'un abonnement ménage ou d'une stratégie SEO.",
    color: "text-purple-600",
    bg: "bg-purple-50"
  }
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Nos Valeurs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Pourquoi choisir <span className="text-mwinda-green">Mwinda</span> Grands-Lacs ?
          </h2>
          <p className="mt-4 text-slate-600">
            Nous ne nous contentons pas de fournir un service, nous bâtissons des relations de confiance basées sur la qualité et le résultat.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="feature-card p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;