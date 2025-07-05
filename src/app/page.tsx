import Landing from "../components/sections/Landing";
import Services from "../components/sections/Services";
import AccordionPage from "../components/sections/AccordionPage";
import Slider from "@/src/components/sections/Slider";
export default function Home() {
  return (
    <div className="bg-white">
      <Landing />
      <Slider />
      <Services />
      <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center px-4 lg:px-16 ">
        <h1 className="text-lg lg:text-2xl"> ხშირად დასმული კითხვები</h1>
        <AccordionPage />
      </div>
    </div>
  );
}
