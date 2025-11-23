import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Home, 
  Shirt, 
  HardHat, 
  Building2, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Megaphone, 
  Settings, 
  Newspaper,
  ArrowRight
} from 'lucide-react';
import { ServiceCategory } from '../types';

gsap.registerPlugin(ScrollTrigger);

const cleaningServices: ServiceCategory = {
  id: 'cleaning',
  title: 'Pôle Nettoyage',
  subtitle: 'Hygiène & Entretien',
  description: 'Un environnement sain pour un confort optimal. Nous intervenons chez les particuliers et les professionnels.',
  colorTheme: 'green',
  items: [
    { 
      title: 'Nettoyage Résidentiel', 
      description: 'Ménage professionnel pour maisons. Personnel expérimenté et de confiance.', 
      icon: Home,
      image: '/nettoyage-residentiel.jpg'
    },
    { 
      title: 'Repassage Professionnel', 
      description: 'Service soigné à domicile. Formules abonnement mensuel ou journalier.', 
      icon: Shirt,
      image: '/repassage-professionnel.jpg'
    },
    { 
      title: 'Fin de Chantier', 
      description: 'Remise en état après travaux. Élimination des débris et poussières.', 
      icon: HardHat,
      image: '/fin-de-chantier.jpg'
    },
    { 
      title: 'Nettoyage Commercial', 
      description: 'Bureaux, magasins, écoles, hôpitaux et salles de fête.', 
      icon: Building2,
      image: '/nettoyage-commercial.jpg'
    },
    { 
      title: 'Nettoyage Profond', 
      description: 'Shampouinage canapés, matelas, tapis et nettoyage automobile.', 
      icon: Sparkles,
      image: '/nettoyage-profond.jpg'
    },
  ]
};

const digitalServices: ServiceCategory = {
  id: 'digital',
  title: 'Pôle Digital',
  subtitle: 'Communication & Média',
  description: 'Propulsez votre marque. De la création web à la gestion médiatique via "Digital Media News".',
  colorTheme: 'orange',
  items: [
    { 
      title: 'Création Web', 
      description: 'Sites vitrines, E-commerce, WordPress, PrestaShop sur mesure.', 
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600' // Black woman tech/laptop
    },
    { 
      title: 'Apps & CRM', 
      description: 'Développement d\'applications mobiles et outils de gestion CRM.', 
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' // Diverse team working
    },
    { 
      title: 'Marketing Digital', 
      description: 'Stratégie, SEO/SEA, Social Ads et Gestion des réseaux sociaux.', 
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=600' // Black man presenting/strategy
    },
    { 
      title: 'Maintenance & Branding', 
      description: 'Identité visuelle, maintenance technique et optimisation.', 
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' // Creative team office
    },
    { 
      title: 'Média en Ligne', 
      description: 'Digital Media News : Reportages, publicités et relations presse.', 
      icon: Newspaper,
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=600' // Woman with camera/media
    },
  ]
};

const ServiceCard: React.FC<{ item: any; color: string; index: number }> = ({ item, color, index }) => {
  const Icon = item.icon;
  const isGreen = color === 'green';
  const iconClass = isGreen ? 'text-mwinda-green bg-emerald-50' : 'text-mwinda-orange bg-orange-50';

  return (
    <div className="group flex flex-col sm:flex-row bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="sm:w-32 h-32 sm:h-auto shrink-0 relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback if local image is missing
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/150?text=Image+Manquante';
          }}
        />
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${isGreen ? 'bg-mwinda-green' : 'bg-mwinda-orange'}`}></div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 flex flex-col justify-center flex-grow">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-8 h-8 rounded-md flex items-center justify-center ${iconClass}`}>
            <Icon size={16} strokeWidth={2} />
          </div>
          <h4 className="text-lg font-bold text-slate-800 leading-tight">{item.title}</h4>
        </div>
        <p className="text-slate-500 text-sm leading-snug">{item.description}</p>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cleaningRef = useRef<HTMLDivElement>(null);
  const digitalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cleaning section animation
      gsap.fromTo(cleaningRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cleaningRef.current,
            start: 'top 85%',
          }
        }
      );

      // Digital section animation
      gsap.fromTo(digitalRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: digitalRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Nos Domaines d'Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Des Solutions Concrètes et Visuelles
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Cleaning Section - Left */}
          <div ref={cleaningRef} id="cleaning" className="flex flex-col bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-emerald-900/5 border-t-4 border-mwinda-green relative">
            <div className="mb-6 pb-4 border-b border-slate-100">
               <h3 className="text-2xl font-bold text-mwinda-dark-green mb-1">{cleaningServices.title}</h3>
               <p className="text-mwinda-green font-medium text-sm">{cleaningServices.subtitle}</p>
            </div>
            <div className="flex flex-col gap-4 mb-8 flex-grow">
              {cleaningServices.items.map((item, idx) => (
                <ServiceCard key={idx} item={item} color="green" index={idx} />
              ))}
            </div>
            <button 
              onClick={scrollToContact}
              className="w-full py-4 mt-auto rounded-xl bg-emerald-50 text-mwinda-dark-green font-bold text-sm hover:bg-mwinda-green hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              Demander un devis Nettoyage
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Digital Section - Right */}
          <div ref={digitalRef} id="digital" className="flex flex-col bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-orange-900/5 border-t-4 border-mwinda-orange relative">
            <div className="mb-6 pb-4 border-b border-slate-100">
               <h3 className="text-2xl font-bold text-mwinda-dark-orange mb-1">{digitalServices.title}</h3>
               <p className="text-mwinda-orange font-medium text-sm">{digitalServices.subtitle}</p>
            </div>
            <div className="flex flex-col gap-4 mb-8 flex-grow">
               {digitalServices.items.map((item, idx) => (
                <ServiceCard key={idx} item={item} color="orange" index={idx} />
              ))}
            </div>
            <button 
              onClick={scrollToContact}
              className="w-full py-4 mt-auto rounded-xl bg-orange-50 text-mwinda-dark-orange font-bold text-sm hover:bg-mwinda-orange hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              Lancer mon projet Digital
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;