import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 bg-gradient-to-br from-mwinda-green to-mwinda-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}>
            MWINDA <span className="font-light">GRANDS-LACS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('cleaning')} className={`text-sm font-semibold hover:text-mwinda-green transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
            NETTOYAGE
          </button>
          <button onClick={() => scrollToSection('digital')} className={`text-sm font-semibold hover:text-mwinda-orange transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
            DIGITAL
          </button>
          <button onClick={() => scrollToSection('about')} className={`text-sm font-semibold hover:text-slate-900 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
            À PROPOS
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 ${
              isScrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-slate-100">
          <button onClick={() => scrollToSection('cleaning')} className="text-left font-semibold text-slate-700 hover:text-mwinda-green">
            NETTOYAGE
          </button>
          <button onClick={() => scrollToSection('digital')} className="text-left font-semibold text-slate-700 hover:text-mwinda-orange">
            DIGITAL
          </button>
          <button onClick={() => scrollToSection('about')} className="text-left font-semibold text-slate-700">
            À PROPOS
          </button>
          <button onClick={() => scrollToSection('contact')} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold">
            CONTACTEZ-NOUS
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;