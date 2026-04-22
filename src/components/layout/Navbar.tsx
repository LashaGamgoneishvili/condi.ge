import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Thermometer,
  MessageCircle,
  Facebook,
} from "lucide-react";
import { SERVICES_CONFIG } from "../../constants/services";

interface NavbarProps {
  scrolled: boolean;
  isHome: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, isHome }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/70 shadow-sm py-3 border-b border-white/50"
            : "bg-transparent py-5"
        }`}
      >
        <div
          className={`${scrolled || !isHome ? "backdrop-blur-md" : ""} w-full h-full absolute top-0 left-0 z-10`}
        ></div>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-20">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary-600 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Thermometer size={24} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-primary-900 uppercase">
              CONDI<span className="text-primary-600">.GE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 font-semibold text-slate-600 tracking-wide text-xs lg:text-sm">
            <Link
              to="/"
              className="hover:text-primary-600 transition-colors uppercase"
            >
              {t("nav.home")}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-primary-600 transition-colors uppercase py-2">
                {t("nav.services")}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.95,
                      backdropFilter: "blur(0px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      backdropFilter: "blur(16px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.95,
                      backdropFilter: "blur(0px)",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-0 w-64 mt-2 border border-white/50 shadow-xl rounded-2xl"
                  >
                    <div className="glass-heavy rounded-2xl p-2 border border-white/50 shadow-xl">
                      {SERVICES_CONFIG.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="flex items-center gap-2 p-2 rounded-xl hover:bg-primary-50 transition-colors group/item"
                        >
                          <div className="p-2 bg-white rounded-lg text-primary-600 shadow-sm group-hover/item:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <div>
                            <p className="text-slate-900 font-bold text-sm uppercase">
                              {t(`services.items.${service.id}.title`)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/#why-us"
              className="hover:text-primary-600 transition-colors uppercase"
            >
              {t("nav.whyUs")}
            </Link>

            <div className="flex items-center gap-1.5 lg:gap-3 px-2 lg:px-3 py-1 lg:py-1.5 glass rounded-full border border-white/50">
              <button
                onClick={() => toggleLanguage("ka")}
                className={`transition-colors hover:text-primary-600 text-[10px] lg:text-sm ${i18n.language === "ka" ? "text-primary-600 font-bold" : "text-slate-400"}`}
              >
                KA
              </button>
              <span className="w-px h-3 bg-slate-300" />
              <button
                onClick={() => toggleLanguage("en")}
                className={`transition-colors hover:text-primary-600 text-[10px] lg:text-sm ${i18n.language === "en" ? "text-primary-600 font-bold" : "text-slate-400"}`}
              >
                EN
              </button>
              <span className="w-px h-3 bg-slate-300" />
              <button
                onClick={() => toggleLanguage("ru")}
                className={`transition-colors hover:text-primary-600 text-[10px] lg:text-sm ${i18n.language === "ru" ? "text-primary-600 font-bold" : "text-slate-400"}`}
              >
                RU
              </button>
            </div>

            <a
              href="tel:+995598242220"
              className="flex items-center gap-2 group hover:text-primary-600 transition-colors"
            >
              <Phone size={16} />
              {t("nav.callToBook")}
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://facebook.com/profile.php?id=61575836853685"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} fill="currentColor" />
            </a>

            <button
              className="p-2 text-slate-600 hover:text-primary-600 transition-colors"
              onClick={() => {
                const newState = !isMenuOpen;
                setIsMenuOpen(newState);
                if (!newState) setIsMobileServicesOpen(false);
              }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-8 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-lg sm:text-xl font-bold text-slate-800 uppercase tracking-wide overflow-y-auto pb-10 custom-scrollbar">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => {
                    toggleLanguage("ka");
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm rounded-lg border ${i18n.language === "ka" ? "bg-primary-600 text-white border-primary-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}
                >
                  KA
                </button>
                <button
                  onClick={() => {
                    toggleLanguage("en");
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm rounded-lg border ${i18n.language === "en" ? "bg-primary-600 text-white border-primary-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    toggleLanguage("ru");
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm rounded-lg border ${i18n.language === "ru" ? "bg-primary-600 text-white border-primary-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}
                >
                  RU
                </button>
              </div>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                {t("nav.home")}
              </Link>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span>{t("nav.services")}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-2 pl-4 border-l-2 border-primary-100 py-1"
                    >
                      {SERVICES_CONFIG.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services/${s.id}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="flex items-center gap-2 text-sm py-1.5"
                        >
                          <span className="text-primary-600">{s.icon}</span>
                          {t(`services.items.${s.id}.title`)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/#why-us" onClick={() => setIsMenuOpen(false)}>
                {t("nav.whyUs")}
              </Link>
              <a
                href="tel:+995598242220"
                className="bg-primary-600 text-white py-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={24} />
                {t("hero.ctaCall")}
              </a>
              <a
                href="https://wa.me/995598242220"
                className="bg-green-500 text-white py-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle size={24} />
                {t("hero.ctaWhatsapp")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
