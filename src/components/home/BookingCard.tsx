import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export const BookingCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-transparent relative z-10 pb-48">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative group p-1 rounded-[2.5rem] bg-linear-to-br from-primary-200/50 via-white/50 to-accent-teal/20 shadow-2xl">
          <div className="glass rounded-[2.4rem] p-8 sm:p-16 md:p-24 overflow-hidden relative shadow-inner bg-white/40 backdrop-blur-2xl text-center border-white/80">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 text-xs font-black uppercase tracking-widest rounded-full mb-8">
                {t("hero.badge")}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 uppercase leading-[0.85]">
                {t("booking.title")
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className={
                        i === 2 || i === 5 ? "text-primary-600 block" : ""
                      }
                    >
                      {word}{" "}
                    </span>
                  ))}
              </h2>
              <p className="text-lg sm:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-snug font-bold uppercase tracking-tight">
                {t("booking.description")}
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
              <a
                href="tel:+995598242220"
                className="flex items-center justify-between gap-6 px-8 py-6 bg-primary-600 text-white rounded-3xl hover:bg-primary-700 hover:scale-[1.02] transition-all shadow-xl shadow-primary-500/20 group w-full md:w-auto min-w-70"
              >
                <div className="flex flex-col items-start origin-left transition-transform">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1 flex items-center gap-2">
                    <Phone size={10} /> {t("nav.callToBook")}
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-tighter">
                    +995 598 24 22 20
                  </span>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary-600 transition-colors">
                  <Phone size={24} />
                </div>
              </a>

              <a
                href="https://wa.me/995598242220"
                className="flex items-center justify-between gap-6 px-8 py-6 bg-white border-2 border-green-500/20 text-green-600 rounded-3xl hover:bg-green-50 hover:border-green-500/40 hover:scale-[1.02] transition-all shadow-xl shadow-green-500/5 group w-full md:w-auto min-w-70"
              >
                <div className="flex flex-col items-start origin-left transition-transform">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1 flex items-center gap-2">
                    <MessageCircle size={10} /> Secure Chat
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase">
                    {t("booking.whatsapp")}
                  </span>
                </div>
                <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 opacity-40">
              <div className="h-px w-12 bg-slate-400" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                {t("booking.serving")}
              </p>
              <div className="h-px w-12 bg-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
