import Image from "next/image";
import image4 from "../../../public/assets/images/installation-service-fix.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-8 gap-4">
      <Link
        href="tel:+995598222420"
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer"
      >
        📞 დაგვიკავშირდით
      </Link>
      <Link href="tel:+995598222420">
        <strong className="text-მდ md:text-xl lg:text-2xl mb-4">
          598 22 24 20 თენგიზი კობახიძე
        </strong>
      </Link>
      <div className=" flex gap-4 flex-col lg:flex-row-reverse bg-white text-black px-4 py-8 md:px-16">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src={image4}
            alt="Air conditioner service"
            width={400}
            height={900}
            layout="responsive"
            className="h-fit"
          />
        </div>

        {/* Main Content */}
        <div className="mt-12 grid md:grid-cols-1 gap-8 items-start">
          <div>
            <p className="mb-6 text-lg">
              ჩვენი მაღალი პროფესიონალიზმის დონე და გამართული პროცესინალური
              გუნდი გარანტიას გაძლევთ, რომ მიიღებთ სუფთა, ეფექტურ და
              შენარჩუნებულ ვენტილაციის სისტემას.
            </p>

            <h2 className="text-xl font-bold mb-4">ჩვენი უპირატესობები:</h2>
            <ul className="list-none space-y-3">
              <li>
                ✅ <strong>გარანტია</strong> — ყველა შესრულებულ სამსახურზე
                გვეძლევა ოფიციალური გარანტია
              </li>
              <li>
                ✅ <strong>დროული რეაგირება</strong> — სწრაფად ვპასუხობთ ყველა
                შეკვეთას და ზარს
              </li>
              <li>
                ✅ <strong>კონსულტაცია</strong> — ეხმარებით კონდიციონერის და
                მისი დასუფთავების სერვისის სწორად შერჩევაში
              </li>
              <li>
                ✅ <strong>პროფესიონალი გუნდი</strong> — ჩვენი გამოცდილება
                გვეხმარება მაქსიმალურად ეფექტურ მომსახურებაზე დაყრდნობით
                მუშაობაში
              </li>
            </ul>

            <p className="mt-6 text-md">
              ჩვენი მომსახურების მიღება თხემამდე კომფორტულია — სთხოვეთ აგრეთვე
              ვირტუალური კონსულტაცია ტელეფონით ან ონლაინ.
            </p>

            <p className="mt-6 text-md">
              სურვილის შემთხვევაში დაგვიკაშირდით შემდეგ ნომერზე
            </p>

            <p className="mt-6 text-md font-medium">
              <Link
                href="tel:+995598222420"
                className="text-blue-600 hover:underline"
              >
                598 22 24 20 – ტელეფონის ნომერი
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
