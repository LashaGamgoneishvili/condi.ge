import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollToTop';
import { FloatingActions } from '../ui/FloatingActions';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-slate-800 font-sans selection:bg-primary-100 selection:text-primary-700 relative overflow-hidden">
      {/* Decorative Mesh Gradient Blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-300 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-200 rounded-full blur-[80px] opacity-30 pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-sky-200 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <Navbar scrolled={scrolled} isHome={pathname === '/'} />
      
      <main>
        {children}
      </main>

      <FloatingActions />
      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
      <Footer />
    </div>
  );
};
