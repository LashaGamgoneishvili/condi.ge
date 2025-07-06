"use client";
import { useEffect, useState } from "react";
import installation from "../../../public/assets/images/installation.jpg";
import repair from "../../../public/assets/images/sheketeba.jpg";
import cleaning from "../../../public/assets/images/wmenda.jpg";
import addingFreon from "../../../public/assets/images/freoni.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "მონტაჟი",
    description:
      "ჩვენი მაღალი პროფესიონალიზმის დონე და გამართული პროცესინალური გუნდი გარანტიას გაძლევთ, რომ მიიღებთ სუფთა, ეფექტურ და შენარჩუნებულ ვენტილაციის სისტემას.",
    image: installation,
    buttonText: "დეტალურად",
    url: "/installation",
  },
  {
    id: 2,
    title: "შეკეთება",
    description:
      "კონდიციონერების შეკეთება – სანდოდ, ხარისხიანად და სწრაფად!ცხელ დღეებში თქვენი კომფორტი იწყება სწორად მოქმედი კონდიციონერით! გთავაზობთ კონდიციონერების პროფესიონალურ შეკეთებასა და ტექნიკურ მომსახურებას თბილისსა და რუსთავში.",

    image: repair,
    buttonText: "დეტალურად",
    url: "/repair",
  },
  {
    id: 3,
    title: "წმენდა",
    description:
      "🔧 წმენდაკონდიციონერის რეგულარული გაწმენდა აუცილებელია ჰაერის ხარისხის, ენერგოეფექტურობისა და მოწყობილობის ხანგრძლივ მუშაობის უზრუნველსაყოფად. ვასუფთავებთ ფილტრებს, ორთქლის გამცივრებელს და დრენაჟის სისტემას სპეციალური საშუალებებით, რაც ხელს უშლის მტვრის, სოკოსა და ბაქტერიების დაგროვებას.",
    image: cleaning,
    buttonText: "დეტალურად",
    url: "/cleaning",
  },
  {
    id: 4,
    title: "ფრების დამატება",
    description:
      "🌀 ფრეონის დამატება თუ კონდიციონერი აღარ აგრილებს ეფექტურად, შესაძლებელია საჭირო იყოს ფრეონის (საგრილებელი გაზის) შევსება. ვიყენებთ ხარისხიან და სერტიფიცირებულ ფრეონს, ვამოწმებთ გაჟონვის ადგილებს და უზრუნველვყოფთ სისტემის უსაფრთხო მუშაობას.",
    image: addingFreon,
    buttonText: "დეტალურად",
    url: "/addingFreon",
  },
];

export default function Page() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  function handleRoute(path: string) {
    console.log("path", path);
    console.log("baseUrl", baseUrl);
    redirect(`${baseUrl}${path}`);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            კონდიციონერების სერვისი
          </h1>
          <p className="text-gray-600 text-center mt-2">
            პროფესიონალური მომსახურება თბილისსა და რუსთავში
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12 cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleRoute(service.url)}
            >
              {/* Service Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-gray-600 flex items-center justify-center">
                  {service.id === 1 && (
                    <div className="text-white text-6xl">🔧</div>
                  )}
                  {service.id === 2 && (
                    <div className="text-white text-6xl">🔨</div>
                  )}
                  {service.id === 3 && (
                    <div className="text-white text-6xl">🧽</div>
                  )}
                  {service.id === 4 && (
                    <div className="text-white text-6xl">⚙️</div>
                  )}
                </div>
                {hoveredCard === service.id && (
                  <Image
                    src={service.image}
                    alt="service image"
                    className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300"
                  />
                )}
              </div>

              {/* Service Content */}
              <div className="p-6 flex justify-center items-center flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={`${service.url}`}
                  className="w-full cursor-pointer text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {service.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
