import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 mt-12">
      <section className="bg-gradient-to-tr from-[#6569E0] to-[#6569E0]] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">დაგვიკავშირდით დღესვე</h2>
          <p className="text-xl mb-8 opacity-90">
            24/7 ხელმისაწვდომი სერვისი თბილისში
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+995598222420"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              📞 გამოძახება
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer">
              ✉️ შეტყობინება
            </button>
          </div>
        </div>
      </section>

      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} კონდიციონერების სერვისი. ყველა უფლება
            დაცულია ( MyCompany. All rights reserved.)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
