import { Wind, ShieldCheck, Wrench } from "lucide-react";
import image from "../assets/images/air-cond-1.jpg";
export const SERVICES_CONFIG = [
  {
    id: "cleaning",
    icon: <Wind className="w-8 h-8" />,
    image: image,
  },
  {
    id: "installation",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: image,
  },
  {
    id: "repair",
    icon: <Wrench className="w-8 h-8" />,
    image: image,
  },
];
