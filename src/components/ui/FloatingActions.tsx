import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 md:hidden">
      <a 
        href="https://wa.me/9955550199" 
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href="tel:+9955550199" 
        className="bg-primary-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};
