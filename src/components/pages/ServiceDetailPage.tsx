import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SERVICES_CONFIG } from "../../constants/services";

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (
    !serviceId ||
    !["cleaning", "installation", "repair"].includes(serviceId)
  ) {
    return (
      <div className="pt-40 text-center font-bold uppercase tracking-widest text-slate-400 min-h-[60vh] flex items-center justify-center">
        Service not found.
      </div>
    );
  }

  const config = SERVICES_CONFIG.find((s) => s.id === serviceId);

  return (
    <div className="pt-28 md:pt-32 pb-24 max-w-7xl mx-auto px-6 relative z-10 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors mb-8 font-bold uppercase tracking-widest text-sm"
      >
        <ArrowLeft size={18} />
        {t("serviceDetails.backToHome")}
      </button>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-2 lg:order-1 outline-none"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight leading-[1.05]">
            {t(`serviceDetails.${serviceId}.title`)}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-primary-600 mb-8 uppercase tracking-widest leading-6.5">
            {t(`serviceDetails.${serviceId}.subtitle`)}
          </p>
          <p className="text-base sm:text-lg text-slate-600 mb-12 leading-snug font-medium mx-auto lg:mx-0 max-w-2xl">
            {t(`serviceDetails.${serviceId}.description`)}
          </p>

          <div className="glass p-6 sm:p-8 rounded-4xl mb-12 border-white/50 text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-6 flex items-center justify-center lg:justify-start gap-2 uppercase tracking-wider">
              <Sparkles className="text-accent-teal" size={20} />
              {t("serviceDetails.whatsIncluded")}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {(
                t(`serviceDetails.${serviceId}.points`, {
                  returnObjects: true,
                }) as string[]
              ).map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-600 font-bold uppercase tracking-wide text-[10px] sm:text-xs"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary-600 shrink-0"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="tel:+995598242220"
              className="px-8 py-5 bg-primary-600 text-white rounded-2xl font-black text-lg hover:bg-primary-700 hover:scale-[1.02] transition-all shadow-xl shadow-primary-500/20 flex items-center justify-center gap-3 group uppercase tracking-widest leading-none"
            >
              <Phone
                size={22}
                className="group-hover:rotate-12 transition-transform"
              />
              {t("serviceDetails.bookService")}
            </a>
            <a
              href="https://wa.me/995598242220"
              className="px-8 py-5 bg-white text-green-600 border-2 border-green-100 rounded-2xl font-black text-lg hover:border-green-300 hover:bg-green-50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-sm uppercase tracking-widest leading-none"
            >
              <MessageCircle
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="rounded-4xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white/40 backdrop-blur-sm">
            <img
              src={config?.image}
              alt={t(`serviceDetails.${serviceId}.title`)}
              className="w-full h-auto aspect-video sm:aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 bg-primary-200/30 rounded-full blur-3xl opacity-60 -z-10" />
          <div className="absolute -top-10 -left-10 w-32 sm:w-48 h-32 sm:h-48 bg-accent-teal/20 rounded-full blur-2xl opacity-60 -z-10" />
        </motion.div>
      </div>
    </div>
  );
};
