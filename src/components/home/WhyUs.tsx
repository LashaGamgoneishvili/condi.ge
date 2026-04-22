import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  ShieldCheck, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight uppercase">{t('whyUs.title')}</h2>
            <div className="space-y-6 lg:space-y-8">
              {[
                { 
                  icon: <ShieldCheck className="text-primary-600" size={32} />, 
                  title: t('whyUs.items.0.title'),
                  text: t('whyUs.items.0.text')
                },
                { 
                  icon: <CheckCircle2 className="text-accent-teal" size={32} />, 
                  title: t('whyUs.items.1.title'),
                  text: t('whyUs.items.1.text')
                },
                { 
                  icon: <MapPin className="text-accent-orange" size={32} />, 
                  title: t('whyUs.items.2.title'),
                  text: t('whyUs.items.2.text')
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 p-6 glass rounded-2xl text-left"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide leading-tight">{item.title}</h4>
                    <p className="text-slate-600 leading-snug font-medium text-sm sm:text-base">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col lg:justify-center gap-6 sm:gap-8 lg:gap-12 glass-heavy rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-center border-white/50">
               <div className="flex flex-col items-center">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-primary-600 mb-2 tracking-tighter">99%</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">{t('whyUs.stats.satisfaction')}</p>
               </div>
               <div className="flex flex-col items-center">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-accent-teal mb-2 tracking-tighter">15k+</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">{t('whyUs.stats.cleaned')}</p>
               </div>
               <div className="flex flex-col items-center">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-accent-orange mb-2 tracking-tighter">1hr</p>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">{t('whyUs.stats.response')}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
