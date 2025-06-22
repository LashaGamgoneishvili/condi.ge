import Image from "next/image";
import Navbar from "../components/navbar";
import Landing from "../sections/Landing";
import Services from "../sections/Services";
import AccordionPage from "../components/AccordionPage";
export default function Home() {
  return (
    <div className="w-full h-full bg-amber-50">
      <Navbar />
      <Landing />
      <Services />
      <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center px-4 lg:px-16 ">
        <h1 className="text-lg lg:text-2xl"> ხშირად დასმული კითხვები</h1>
        <AccordionPage />
      </div>
    </div>
  );
}
