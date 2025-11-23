import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    category: "Site E-commerce",
    title: "MarketPlace Goma",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-600 to-cyan-500"
  },
  {
    category: "Branding & Social",
    title: "Campagne Kivu Bio",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
    color: "from-mwinda-orange to-amber-500"
  },
  {
    category: "Application Mobile",
    title: "Transport RDC App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-600 to-pink-500"
  }
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Card Entrance Animation
      gsap.from(".portfolio-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // 2. Parallax Image Animation
      // We animate the wrapper inside the card to move vertically slightly
      // creating a depth effect as if the image is 'further back'.
      itemsRef.current.forEach((item) => {
        if (!item) return;
        
        const imageWrapper = item.querySelector('.parallax-image');
        
        if (imageWrapper) {
          gsap.fromTo(imageWrapper, 
            { yPercent: -15 }, 
            {
              yPercent: 0, // Move down to original position (creating upward drag feel)
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Smooth scrubbing
              }
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-mwinda-orange font-bold tracking-widest text-xs uppercase mb-2 block">Portfolio Digital</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Nos Réalisations Récentes</h2>
            <p className="text-slate-400">
              Découvrez comment nous aidons les entreprises locales à se digitaliser et à accroître leur visibilité.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-slate-900 transition-all font-semibold text-sm">
            Voir tous les projets
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              ref={el => { itemsRef.current[idx] = el; }}
              className="portfolio-item group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] md:aspect-[3/4] shadow-xl"
            >
              {/* Parallax Wrapper controlled by GSAP */}
              {/* Height 120% allows room for the parallax movement without showing gaps */}
              <div className="parallax-image absolute inset-0 w-full h-[120%] -top-[10%]">
                 {/* Image controlled by CSS Hover */}
                 <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-10">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.color} text-white mb-3 shadow-lg backdrop-blur-md`}>
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                
                {/* Reveal on hover */}
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                    Voir l'étude de cas <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;