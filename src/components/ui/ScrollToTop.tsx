import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
  onClick: () => void;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ show, onClick }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.button 
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={onClick}
          className="fixed bottom-44 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 text-primary-600 hover:bg-white hover:text-primary-700 transition-all group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
