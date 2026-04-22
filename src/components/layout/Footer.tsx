import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Thermometer, Sparkles, Facebook, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_CONFIG } from '../../constants/services';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative pt-24 pb-12 text-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-2 group">
                  <div className="bg-primary-600 p-2 rounded-xl text-white shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
                    <Thermometer size={24} />
                  </div>
                  <span className="font-display font-black text-2xl tracking-tighter uppercase">
                    CONDI<span className="text-primary-600">.GE</span>
                  </span>
                </Link>
                <div className="w-px h-8 bg-slate-200" />
                <motion.a 
                  href="https://facebook.com/profile.php?id=61575836853685" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary-600 shadow-sm hover:shadow-md hover:border-primary-100 transition-all font-bold"
                  aria-label="Facebook"
                >
                  <Facebook size={20} fill="currentColor" />
                </motion.a>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-xs">
                {t('footer.description')}
              </p>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h5 className="font-display font-bold text-sm text-slate-400 uppercase tracking-widest">{t('footer.services')}</h5>
              <ul className="space-y-3">
                {SERVICES_CONFIG.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`} className="text-slate-600 hover:text-primary-600 transition-all text-sm font-semibold flex items-center gap-1 group uppercase">
                      {t(`services.items.${service.id}.title`)}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="font-display font-bold text-sm text-slate-400 uppercase tracking-widest">{t('footer.links')}</h5>
              <ul className="space-y-3">
                {[
                  { name: t('nav.services'), link: '/#services' },
                  { name: t('nav.whyUs'), link: '/#why-us' },
                  { name: 'Pricing Guide', link: '#' },
                  { name: 'Contact Support', link: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="text-slate-600 hover:text-primary-600 transition-all text-sm font-semibold flex items-center gap-1 group">
                      {item.name}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Office Info */}
          <div className="space-y-6">
            <h5 className="font-display font-bold text-sm text-slate-400 uppercase tracking-widest">{t('footer.hours')}</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white/50 border border-white/50 p-3 rounded-2xl">
                <span className="text-xs font-bold text-slate-500 uppercase">Mon-Fri</span>
                <span className="text-sm font-bold text-primary-600">8:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center bg-white/50 border border-white/50 p-3 rounded-2xl">
                <span className="text-xs font-bold text-slate-500 uppercase">Sat-Sun</span>
                <span className="text-sm font-bold text-primary-600">9:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center bg-accent-teal/5 border border-accent-teal/10 p-3 rounded-2xl text-accent-teal">
                <span className="text-xs font-bold uppercase flex items-center gap-1.5"><Sparkles size={14}/> 24/7 Support</span>
                <span className="text-[10px] font-black uppercase tracking-tighter">Active Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest order-2 md:order-1">
            &copy; 2026 CONDI.GE. {t('footer.allRights')}
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <a href="#" className="text-[10px] font-black text-slate-400 hover:text-primary-600 transition-colors uppercase tracking-widest">{t('footer.privacy')}</a>
            <a href="#" className="text-[10px] font-black text-slate-400 hover:text-primary-600 transition-colors uppercase tracking-widest">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
