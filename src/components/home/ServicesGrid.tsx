import React from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { SERVICES_CONFIG } from "../../constants/services";

export const ServicesGrid: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 text-slate-900">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 tracking-tight uppercase tracking-wider leading-none">
            {t("services.title")}
          </h2>
          <p className="text-lg text-slate-600 leading-snug font-medium">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES_CONFIG.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                onClick={() => navigate(`/services/${service.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`/services/${service.id}`);
                  }
                }}
                role="button"
                tabIndex={0}
                className="glass rounded-4xl p-5 sm:p-8 h-full hover:bg-white/60 hover:shadow-xl group-hover:-translate-y-1 cursor-pointer transition-all focus:outline-hidden focus:ring-2 focus:ring-primary-600 outline-none "
              >
                <div className="mb-6 sm:mb-8 overflow-hidden rounded-2xl h-32 sm:h-48 relative shadow-inner">
                  <img
                    src={service.image}
                    alt={t(`services.items.${service.id}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent group-hover:from-primary-900/40 transition-colors" />
                  <div className="absolute bottom-3 left-3 bg-white/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-800 border border-white/50 uppercase tracking-widest">
                    {t(`services.items.${service.id}.price`)}
                  </div>
                </div>
                <div
                  className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white/60 backdrop-blur shadow-sm rounded-xl sm:rounded-2xl border border-white group-hover:scale-110 transition-transform ${
                    index === 0
                      ? "text-primary-600"
                      : index === 1
                        ? "text-accent-teal"
                        : "text-accent-orange"
                  }`}
                >
                  {service.icon}
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="h-16 text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 font-display uppercase tracking-wide leading-tight">
                    {t(`services.items.${service.id}.title`)}
                  </h3>
                  <p className="text-xs sm:text-base text-slate-600 leading-snug mb-4 sm:mb-6 font-medium line-clamp-3">
                    {t(`services.items.${service.id}.description`)}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className={`flex items-center gap-2 font-bold group/btn uppercase tracking-widest text-[10px] sm:text-sm ${
                      index === 0
                        ? "text-primary-600"
                        : index === 1
                          ? "text-accent-teal"
                          : "text-accent-orange"
                    }`}
                  >
                    {t("services.learnMore")}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
