import React from 'react';
import { Wind, ShieldCheck, Wrench } from 'lucide-react';

export const SERVICES_CONFIG = [
  {
    id: 'cleaning',
    icon: <Wind className="w-8 h-8" />,
    image: "https://picsum.photos/seed/cleaning/800/600"
  },
  {
    id: 'installation',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "https://picsum.photos/seed/install/800/600"
  },
  {
    id: 'repair',
    icon: <Wrench className="w-8 h-8" />,
    image: "https://picsum.photos/seed/repair/800/600"
  }
];
