import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Phone,
  ArrowRight,
  MessageCircle,
  Star,
  Clock,
} from "lucide-react";
import airCond2 from "../../assets/images/air-cond-2.jpg";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-40 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-bl from-primary-100/50 to-transparent blur-3xl opacity-60 transition-all" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-2/3 bg-blue-100/30 blur-3xl rounded-full opacity-40 translate-y-20 -translate-x-20 transition-all" />

      <div className="max-w-336 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-bold mb-6 tracking-wide uppercase rounded-full">
              <Sparkles size={16} />
              <span>{t("hero.badge")}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8 uppercase tracking-tight">
              {t("hero.title")} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-accent-teal">
                {t("hero.subtitle")}
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-10 leading-snug max-w-xl mx-auto lg:mx-0 font-medium">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+995598242220"
                className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-200/50 flex items-center justify-center gap-2 group uppercase tracking-wide"
              >
                <Phone size={22} />
                {t("hero.ctaCall")}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/995598242220"
                className="px-8 py-4 bg-white text-green-600 border border-green-200 rounded-2xl font-bold text-lg hover:border-green-300 hover:bg-green-50 transition-all flex items-center justify-center gap-3 shadow-sm uppercase tracking-wide"
              >
                <MessageCircle size={22} />
                {t("hero.ctaWhatsapp")}
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100`}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-4 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                    alt="User"
                  />
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex text-amber-400 gap-1 mb-1 justify-center sm:justify-start">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-xs lg:text-sm font-semibold text-slate-600 uppercase tracking-widest">
                  {t("hero.happyClients")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/10 border-8 border-white/40 backdrop-blur-sm">
              <img
                src={airCond2}
                alt="Modern Air Conditioning System"
                className="w-full h-auto object-cover aspect-video lg:aspect-4/5"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50">
                <div className="bg-accent-green text-white p-2 rounded-lg shadow-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Fastest Response
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    Under 60 Mins
                  </p>
                </div>
              </div>
            </div>
            {/* Background Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-200/20 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
