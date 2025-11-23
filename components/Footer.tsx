import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-mwinda-green to-mwinda-orange rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                MWINDA
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour l'entretien professionnel et la communication digitale en RDC.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#cleaning" className="hover:text-mwinda-green transition-colors">Nettoyage Résidentiel</a></li>
              <li><a href="#cleaning" className="hover:text-mwinda-green transition-colors">Nettoyage Commercial</a></li>
              <li><a href="#digital" className="hover:text-mwinda-orange transition-colors">Création Web</a></li>
              <li><a href="#digital" className="hover:text-mwinda-orange transition-colors">Marketing Digital</a></li>
              <li><a href="#digital" className="hover:text-mwinda-orange transition-colors">Digital Media News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mwinda-green mt-0.5" />
                <span>Goma, République Démocratique du Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-mwinda-green" />
                <span>+243 972 718 660</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mwinda-green" />
                <span>contact@mwindagrandslacs.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold mb-6">Restez informés</h4>
            <p className="text-sm mb-4">Abonnez-vous pour recevoir nos actualités.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-mwinda-orange outline-none"
              />
              <button className="bg-mwinda-orange text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-mwinda-dark-orange transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MWINDA GRANDS-LACS Sarl. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;