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
            <p className="text-lg mb-4">
              კონდიციონერების შეკეთება – სანდოდ, ხარისხიანად და სწრაფად!
            </p>
            <p className="mb-6 text-lg">
              ცხელ დღეებში თქვენი კომფორტი იწყება სწორად მოქმედი კონდიციონერით!
              გთავაზობთ კონდიციონერების პროფესიონალურ შეკეთებასა და ტექნიკურ
              მომსახურებას თბილისსა და რუსთავში.
            </p>

            <div className="px-4 py-6">
              <h2 className="text-lg font-semibold mb-4">ჩვენი სერვისები:</h2>
              <ul className="list-disc list-inside space-y-2 text-md">
                <li>დიზინფექცია და პრობლემის სრულად გაგნსაზღვრა</li>
                <li>გაზრილების სისტემების შემოწმება</li>
                <li>გაზის შევსება (ფრეონი)</li>
                <li>ფილტრების და ორმხრივი გამონაბოლქვი სისტემის წმენდა</li>
                <li>ელექტრო და ელექტრონული სისტემების აწყობა</li>
                <li>რეგულარული მომსახურება და პროფილაქტიკური შემოწმება</li>
              </ul>
            </div>

            <div className="px-4 py-6">
              <h2 className="text-lg font-semibold mb-4">რატომ ჩვენ?</h2>
              <ul className="list-none space-y-2 text-md">
                <li>✓ გაფართოებული სერვისები</li>
                <li>✓ ორიგინალური ნაწილები და გარანტია</li>
                <li>✓ ოპერატიული გაწირვება</li>
                <li>✓ ხანგრძლივვადიანი ფასები</li>
              </ul>
            </div>

            <p className="mt-6 text-md">
              დაგვიკავშირდით დღესვე და აღადგინეთ თქვენი კონდიციონერის
              ეფექტურობა!
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
