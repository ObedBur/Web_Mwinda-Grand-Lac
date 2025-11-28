import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Info Column
      gsap.from(infoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 80%',
        }
      });

      // Animate Form Column
      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Configuration EmailJS
      const serviceID = 'service_u2pwpa5'; // ✅ Gmail Service
      const templateID = 'template_n7k0sz9'; // ✅ Contact Us Template
      const publicKey = 'llDCHpqelGMiQRs-P'; // ✅ Public Key configurée

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        message: formData.message,
        to_email: 'obedburindi@gmail.com'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus('success');
      // Reset form
      setFormData({ name: '', email: '', service: '', message: '' });
      if (formRef.current) formRef.current.reset();

    } catch (error: any) {
      console.error('Erreur d\'envoi EmailJS:', error);
      setSubmitStatus('error');

      // Message d'erreur plus détaillé
      let errorMsg = 'Une erreur est survenue. ';

      if (error.text) {
        errorMsg += `Détails: ${error.text}. `;
      } else if (error.message) {
        errorMsg += `${error.message}. `;
      }

      errorMsg += 'Veuillez vérifier votre configuration EmailJS ou nous contacter par téléphone.';
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mwinda-green/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mwinda-orange/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-mwinda-orange uppercase mb-2">Contactez-nous</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Démarrons votre Projet
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Besoin d'un <span className="text-mwinda-green font-bold">devis nettoyage</span> ou d'une <span className="text-mwinda-orange font-bold">stratégie digitale</span> ? 
            Notre équipe à Goma est prête à vous écouter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info & Map */}
          <div ref={infoRef} className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Nos Coordonnées</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-mwinda-green/10 flex items-center justify-center text-mwinda-dark-green shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Adresse</p>
                    <p className="text-slate-600">Avenue du Lac, Quartier Himbi<br />Goma, Nord-Kivu, RDC</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-mwinda-orange/10 flex items-center justify-center text-mwinda-dark-orange shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Téléphone</p>
                    <p className="text-slate-600">+243 972 718 660</p>
                    <a href="https://wa.me/243972718660" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#25D366] hover:underline flex items-center gap-1 mt-1">
                      Envoyer un message WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">contact@mwindagrandslacs.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embed Map (Goma Placeholder) */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-md relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.348677732924!2d29.2223!3d-1.6783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f76372b62d1%3A0x6b42b10228740529!2sGoma%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-4 border-slate-900 relative">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Demander un Devis</h4>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-mwinda-green focus:ring-2 focus:ring-mwinda-green/20 outline-none transition-all disabled:opacity-50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-mwinda-green focus:ring-2 focus:ring-mwinda-green/20 outline-none transition-all disabled:opacity-50"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service concerné</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-mwinda-green focus:ring-2 focus:ring-mwinda-green/20 outline-none transition-all text-slate-700 appearance-none font-medium disabled:opacity-50"
                  >
                    <option value="" disabled>Sélectionnez une option...</option>
                    <optgroup label="NETTOYAGE & ENTRETIEN">
                      <option>Nettoyage Résidentiel (Ménage)</option>
                      <option>Nettoyage Commercial (Bureaux/Magasins)</option>
                      <option>Repassage Professionnel</option>
                      <option>Fin de Chantier</option>
                    </optgroup>
                    <optgroup label="DIGITAL & MEDIA">
                      <option>Création de Site Web / App</option>
                      <option>Marketing Digital & SEO</option>
                      <option>Publicité sur Digital Media News</option>
                      <option>Branding & Identité</option>
                    </optgroup>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Détails du projet</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-mwinda-green focus:ring-2 focus:ring-mwinda-green/20 outline-none transition-all resize-none disabled:opacity-50"
                  placeholder="Décrivez vos besoins (surface à nettoyer, type de site web, etc.)..."
                ></textarea>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800">
                  <CheckCircle size={20} className="shrink-0" />
                  <p className="text-sm font-medium">Message envoyé avec succès ! Nous vous répondrons sous peu.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-800">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                      <span>Envoyer ma demande</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;