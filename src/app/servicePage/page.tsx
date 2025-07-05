"use client";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "მონტაჟი",
    description:
      "ჩვენი ძალდატა პასუხისმგებლობის დონეა და პროფესიონალიზმი. ჩვენი გარანტია გრძელდება 2 წლამდე. ღირებული რადიუსის გათვლით, რომ მივუახლოვდეთ სწრაფად, ყველასთვის და შეაამბლულ ვაუცანებთ წყალმევლით შიდასაწესი.",
    image: "/api/placeholder/300/200",
    buttonText: "დაკლიკებზე",
  },
  {
    id: 2,
    title: "შეკეთება",
    description:
      "კონდიციონერების რემონტი – სამყარო, ხარისხიანი და სწრაფი! ჩვენი დეზიბული ოქმები ამორტიზებული იწყება სწორად მომსვლელი კონდიციონერით!",
    image: "/api/placeholder/300/200",
    buttonText: "დაკლიკებზე",
  },
  {
    id: 3,
    title: "წმენდა",
    description:
      "კონდიციონერის რეგულარული გწმენდა უაღრეს სეზონეს საწინას, ამონადნი სისუფთავე და მოწყობილობის საჭიროდ ოთმობის უზრუნველყოფა.",
    image: "/api/placeholder/300/200",
    buttonText: "დაკლიკებზე",
  },
  {
    id: 4,
    title: "ფრების დამატება",
    description:
      "თუ კონდიციონერი არ კარგად ყრუებს ატოსფერო სატევის ბურთას, ღანერისაცავი ფრონი (საწრადლები გაზის) შეშება.",
    image: "/api/placeholder/300/200",
    buttonText: "დაკლიკებზე",
  },
];

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            კონდიციონერების სერვისი
          </h1>
          <p className="text-gray-600 text-center mt-2">
            პროფესიონალური მომსახურება თბილისში
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Service Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
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
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300"></div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
