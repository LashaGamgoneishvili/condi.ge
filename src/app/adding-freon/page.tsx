import Image from "next/image";
import image4 from "../../../public/assets/images/installation.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center mt-8">
      <strong className="text-sm md:text-xl lg:text-2xl mb-4">
        598 22 24 20 თენგიზი კობახიძე
      </strong>
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
              🌀 <strong>ფრეონის დამატება</strong> თუ კონდიციონერი აღარ აგრილებს
              ეფექტურად, შესაძლებელია საჭირო იყოს ფრეონის (საგრილებელი გაზის)
              შევსება. ვიყენებთ ხარისხიან და სერტიფიცირებულ ფრეონს, ვამოწმებთ
              გაჟონვის ადგილებს და უზრუნველვყოფთ სისტემის უსაფრთხო მუშაობას.
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
