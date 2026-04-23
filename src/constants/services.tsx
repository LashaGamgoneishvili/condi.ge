import { Wind, ShieldCheck, Wrench } from "lucide-react";
import installation from "../assets/images/Conditioner-Installation.jpg";
import cleaning from "../assets/images/cleaning.webp";
import repairing from "../assets/images/repairing.jpeg";
export const SERVICES_CONFIG = [
  {
    id: "cleaning",
    icon: <Wind className="w-8 h-8" />,
    image: cleaning,
  },
  {
    id: "installation",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: installation,
  },
  {
    id: "repair",
    icon: <Wrench className="w-8 h-8" />,
    image: repairing,
  },
];
