// pages/about.js

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">ჩვენს შესახებ</h1>

        <p className="text-lg text-gray-700 mb-4">
          <strong>CoolFlow Installations</strong> სპეციალიზდება{" "}
          <span className="text-blue-600 font-semibold">
            კლიმატიზატორების პროფესიონალურ მონტაჟში
          </span>
          , როგორც საცხოვრებელი, ასევე კომერციული სივრცეებისთვის. ჩვენი
          სერტიფიცირებული ტექნიკოსები უზრუნველყოფენ კომფორტს უსაფრთხოდ,
          ეფექტურად და ზუსტად.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          ❄️ რას ვაკეთებთ
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>✅ კონდიციონერების მონტაჟი (სპლიტ, ცენტრალური, ფანჯრის ტიპის)</li>
          <li>✅ ჭკვიანი თერმოსტატების დაყენება</li>
          <li>✅ HVAC სისტემების ინტეგრაცია</li>
          <li>✅ ენერგოეფექტური გაგრილების გადაწყვეტილებები</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          🧑‍🔧 რატომ ჩვენ?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>⚡ სწრაფი და სანდო მომსახურება</li>
          <li>🛠️ ლიცენზირებული და დაზღვეული ტექნიკოსები</li>
          <li>🌱 ეკომეგობრული გადაწყვეტილებები</li>
          <li>💬 გამჭვირვალე ფასები და უფასო კონსულტაცია</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          🚀 ტექნოლოგიით შექმნილი
        </h2>
        <p className="text-gray-700 mb-4">
          ეს ვებსაიტი შექმნილია <span className="font-medium">Next.js</span> და{" "}
          <span className="font-medium">Tailwind CSS</span>-ის გამოყენებით, რაც
          უზრუნველყოფს სწრაფ, მობილურზე მორგებულ და თანამედროვე გამოცდილებას.
          ჩვენ გვჯერა, რომ კარგი მომსახურება იწყება კარგად შესრულებული
          ვებსაიტით.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          📍 სად ვმუშაობთ
        </h2>
        <p className="text-gray-700 mb-4">
          ვემსახურებით{" "}
          <span className="font-medium">[მიუთითეთ ქალაქი/რეგიონი]</span>-ს.
          დამატებითი ინფორმაციისთვის ეწვიეთ ჩვენს{" "}
          <a href="/contact" className="text-blue-600 underline">
            კონტაქტის გვერდს
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          💬 დავიწყოთ?
        </h2>
        <p className="text-gray-700">
          გსურთ იყოს გრილად?{" "}
          <a href="/contact" className="text-blue-600 underline">
            დაგვიკავშირდით კონსულტაციისთვის
          </a>{" "}
          ან დაგვირეკეთ — სიამოვნებით დაგეხმარებით, რომ თქვენი სივრცე იყოს
          მაქსიმალურად კომფორტული.
        </p>
      </div>
    </div>
  );
}
