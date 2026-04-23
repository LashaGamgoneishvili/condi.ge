import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        whyUs: "Why Choose Us",
        callToBook: "Call to Book",
      },
      hero: {
        badge: "Professional HVAC Solutions",
        title: "Breathe Better,",
        subtitle: "Live Cooler.",
        description:
          "From emergency repairs to precision installations and deep sanitizing cleans. Expert AC solutions tailored to your space and comfort.",
        ctaCall: "Call to Book",
        ctaWhatsapp: "WhatsApp",
        happyClients: "500+ Happy Clients",
      },
      services: {
        title: "Expert Solutions for Every Unit",
        description:
          "Whether it's a routine checkup or a complete overhaul, our team brings precision to every task.",
        items: {
          cleaning: {
            title: "Deep Cleaning",
            description:
              "Remove allergens, mold, and dust from your units to breathe cleaner air and improve efficiency.",
            price: "From $79",
          },
          installation: {
            title: "Professional Installation",
            description:
              "Professional sizing and installation of split systems, central air, and smart climate control.",
            price: "Free Quote",
          },
          repair: {
            title: "Rapid Repair",
            description:
              "Diagnosis and fix for cooling failures, leaks, or strange noises. Same-day emergency calls.",
            price: "Call for Pricing",
          },
        },
        learnMore: "Learn More",
      },
      serviceDetails: {
        backToHome: "Back to Home",
        bookService: "Book this Service",
        whatsIncluded: "What's Included",
        whyChooseThis: "Why choose this service?",
        cleaning: {
          title: "Deep Cleaning & Sanitization",
          subtitle: "Pure air for a healthier home environment.",
          description:
            "Our professional deep cleaning service goes beyond just the filters. We use specialized equipment to sanitize every internal component, removing 99.9% of bacteria, mold, and hidden dust.",
          points: [
            "Filter & Coil Sanitization",
            "Drain Pan & Pipe Flushing",
            "Anti-Bacterial Treatment",
            "Air Flow Efficiency Test",
          ],
        },
        installation: {
          title: "Professional Installation",
          subtitle: "Certified mounting for long-term reliability.",
          description:
            "Getting the right unit and installing it correctly is crucial for energy efficiency and lifespan. Our certified engineers handle everything from site assessment to final calibration.",
          points: [
            "Site Survey & Unit Sizing",
            "High-Grade Copper Piping",
            "Pressure Testing & Vacuuming",
            "User Operation Walkthrough",
          ],
        },
        repair: {
          title: "Rapid Repair & Diagnosis",
          subtitle: "Restoring your comfort in record time.",
          description:
            "AC failure can happen at the worst times. Our emergency response team carries most common spare parts to fix leaks, cooling issues, and electrical faults on the same day.",
          points: [
            "Leak Leak Detection & Fix",
            "Gas Refill (Recharge)",
            "Compressor & Fan Repair",
            "Electrical Board Diagnosis",
          ],
        },
      },
      whyUs: {
        title: "Engineering Comfort Since 2012.",
        items: [
          {
            title: "Fully Licensed & Insured",
            text: "Rest easy knowing your property is protected by certified professionals.",
          },
          {
            title: "12-Month Guarantee",
            text: "We stand by our work. All repairs and parts come with a solid warranty.",
          },
          {
            title: "Local Excellence",
            text: "Born and raised in the community, providing tailored local service.",
          },
        ],
        stats: {
          satisfaction: "Customer Satisfaction",
          cleaned: "Units Cleaned & Maintained",
          response: "Average Response Time",
        },
      },
      booking: {
        title: "Ready for Precision Comfort?",
        description:
          "Professional AC service is just a conversation away. We currently accept bookings exclusively via phone calls and WhatsApp to ensure direct communication with our experts.",
        whatsapp: "WhatsApp Chat",
        serving: "Serving all major metro areas",
      },
      footer: {
        description:
          "Premium climate solutions. Dedicated to keeping your environment comfortable all year round.",
        services: "Services",
        links: "Quick Links",
        hours: "Support Hours",
        emergency: "Emergency",
        privacy: "Privacy",
        terms: "Terms",
        allRights: "All rights reserved.",
      },
    },
  },
  ka: {
    translation: {
      nav: {
        home: "მთავარი",
        services: "სერვისები",
        whyUs: "რატომ ჩვენ",
        callToBook: "დაჯავშნა",
      },
      hero: {
        badge: "პროფესიონალური HVAC გადაწყვეტილებები",
        title: "ისუნთქე უკეთესად,",
        subtitle: "იცხოვრე გრილად.",
        description:
          "გადაუდებელი შეკეთებიდან ზუსტ ინსტალაციამდე და ღრმა სანიტარულ წმენდამდე. კონდიცირების პროფესიონალური გადაწყვეტილებები, რომელიც თქვენს კომფორტზეა მორგებული.",
        ctaCall: "დარეკვა",
        ctaWhatsapp: "WhatsApp",
        happyClients: "500+ კმაყოფილი კლიენტი",
      },
      services: {
        title: "ექსპერტული გადაწყვეტილებები ნებისმიერი ერთეულისთვის",
        description:
          "იქნება ეს გეგმიური შემოწმება თუ სრული კაპიტალური რემონტი, ჩვენი გუნდი სიზუსტით ასრულებს ნებისმიერ დავალებას.",
        items: {
          cleaning: {
            title: "ღრმა წმენდა",
            description:
              "ალერგენების, ობისა და მტვრის მოცილება თქვენი აგრეგატებიდან სუფთა ჰაერის და ეფექტურობის გასაუმჯობესებლად.",
            price: "79 ლარიდან",
          },
          installation: {
            title: "პროფესიონალური ინსტალაცია",
            description:
              "სპლიტ სისტემების, ცენტრალური ჰაერისა და ჭკვიანი კლიმატ-კონტროლის პროფესიონალური შერჩევა და მონტაჟი.",
            price: "უფასო კონსულტაცია",
          },
          repair: {
            title: "სწრაფი შეკეთება",
            description:
              "გაგრილების ხარვეზების, გაჟონვის ან უცნაური ხმების დიაგნოსტიკა და გამოსწორება. იმავე დღეს გამოძახება.",
            price: "ფასი შეთანხმებით",
          },
        },
        learnMore: "გაიგე მეტი",
      },
      serviceDetails: {
        backToHome: "მთავარზე დაბრუნება",
        bookService: "სერვისის დაჯავშნა",
        whatsIncluded: "რა შედის სერვისში",
        whyChooseThis: "რატომ უნდა აირჩიოთ ეს სერვისი?",
        cleaning: {
          title: "ღრმა წმენდა და სანიტარია",
          subtitle: "სუფთა ჰაერი ჯანსაღი გარემოსთვის.",
          description:
            "ჩვენი პროფესიონალური ღრმა წმენდის სერვისი სცილდება მხოლოდ ფილტრების გაწმენდას. ჩვენ ვიყენებთ სპეციალიზებულ აღჭურვილობას შიდა კომპონენტების დეზინფექციისთვის.",
          points: [
            "ფილტრების და რადიატორის სანიტარია",
            "სადრენაჟე სისტემის გამორეცხვა",
            "ანტიბაქტერიული დამუშავება",
            "ჰაერის ნაკადის ეფექტურობის ტესტი",
          ],
        },
        installation: {
          title: "პროფესიონალური ინსტალაცია",
          subtitle: "ხარისხიანი მონტაჟი ხანგრძლივი მუშაობისთვის.",
          description:
            "სწორი ერთეულის შერჩევა და მისი სწორი ინსტალაცია გადამწყვეტია ენერგოეფექტურობისა და ხანგრძლივი მუშაობისთვის. ჩვენი ინჟინრები უზრუნველყოფენ ყველაფერს.",
          points: [
            "ადგილის შესწავლა და შერჩევა",
            "მაღალი ხარისხის სპილენძის მილები",
            "წნევის ტესტირება და ვაკუუმირება",
            "ექსპლუატაციის წესების გაცნობა",
          ],
        },
        repair: {
          title: "სწრაფი შეკეთება და დიაგნოსტიკა",
          subtitle: "დაუბრუნეთ კომფორტი თქვენს სივრცეს უმოკლეს დროში.",
          description:
            "კონდიციონერის გაუმართაობა შეიძლება ნებისმიერ დროს მოხდეს. ჩვენი გუნდი მზად არის სწრაფად აღმოფხვრას ნებისმიერი ხარვეზი.",
          points: [
            "ფრეონის გაჟონვის პოვნა და შეკეთება",
            "ფრეონით დატენვა",
            "კომპრესორის და ვენტილატორის შეკეთება",
            "ელექტრო ნაწილის დიაგნოსტიკა",
          ],
        },
      },
      whyUs: {
        title: "თქვენი კომფორტის გეგმარება 2019 წლიდან.",
        items: [
          {
            title: "სრულად ლიცენზირებული და დაზღვეული",
            text: "იყავით მშვიდად, თქვენი ქონება დაცულია სერტიფიცირებული პროფესიონალების მიერ.",
          },
          {
            title: "გარანტია შესრულებულ სამუშაოზე",
            text: "ჩვენ პასუხისმგებლობას ვიღებთ ჩვენს მიერ შესრულებულ სამუშაოზე. ნებისმიერი შეკეთება და ნაწილი გარანტიით.",
          },
          {
            title: "ადგილობრივი მუშახელი",
            text: "ჩვენი გუნდი საქართველოდანაა, რაც ამარტივეს კომუნიკაციას და ურთიერთგაგებას.",
          },
        ],
        stats: {
          satisfaction: "კლიენტთა კმაყოფილება",
          cleaned: "გაწმენდილი და მოვლილი ერთეული",
          response: "რეაგირების საშუალო დრო",
        },
      },
      booking: {
        title: "მზად ხართ იდეალური კომფორტისათვის?",
        description:
          "პროფესიონალური კონდიცირების სერვისი მხოლოდ ერთი ზარის მეშვეობით. ჯავშნებს ვიღებთ ექსკლუზიურად სატელეფონო ზარებით და WhatsApp-ით.",
        whatsapp: "WhatsApp ჩატი",
        serving: "ვემსახურებით თბილისსა და რუსთავს",
      },
      footer: {
        description:
          "პრემიუმ შეთავაზებები. ჩვენ ვზრუნავთ თქვენი გარემოს კომფორტზე მთელი წლის განმავლობაში.",
        services: "სერვისები",
        links: "სწრაფი ლინკები",
        hours: "სამუშაო საათები",
        emergency: "საგანგებო",
        privacy: "კონფიდენციალურობა",
        terms: "წესები",
        allRights: "ყველა უფლება დაცულია.",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        services: "Услуги",
        whyUs: "Почему мы",
        callToBook: "Забронировать",
      },
      hero: {
        badge: "Профессиональные HVAC решения",
        title: "Дышите лучше,",
        subtitle: "Живите в прохладе.",
        description:
          "От аварийного ремонта до точной установки и глубокой санитарной чистки. Экспертные решения для кондиционирования помещений.",
        ctaCall: "Позвонить",
        ctaWhatsapp: "WhatsApp",
        happyClients: "500+ Счастливых клиентов",
      },
      services: {
        title: "Экспертные решения для любой техники",
        description:
          "Будь то плановый осмотр или капитальный ремонт, наша команда подходит к каждой задаче с максимальной точностью.",
        items: {
          cleaning: {
            title: "Глубокая чистка",
            description:
              "Удаление аллергенов, плесени и пыли из ваших блоков для чистого воздуха и повышения эффективности.",
            price: "От 79 Лари",
          },
          installation: {
            title: "Профессиональный монтаж",
            description:
              "Профессиональный подбор и установка сплит-систем, центрального кондиционирования и умного климат-контроля.",
            price: "Бесплатная оценка",
          },
          repair: {
            title: "Быстрый ремонт",
            description:
              "Диагностика и устранение неисправностей охлаждения, утечек или посторонних шумов. Выезд в день обращения.",
            price: "Цена по запросу",
          },
        },
        learnMore: "Узнать больше",
      },
      serviceDetails: {
        backToHome: "На главную",
        bookService: "Забронировать услугу",
        whatsIncluded: "Что включено",
        whyChooseThis: "Почему стоит выбрать эту услугу?",
        cleaning: {
          title: "Глубокая чистка и санитария",
          subtitle: "Чистый воздух для здоровой домашней среды.",
          description:
            "Наша профессиональная услуга глубокой очистки выходит за рамки просто фильтров. Мы используем специализированное оборудование для дезинфекции.",
          points: [
            "Санитарная обработка фильтров и катушек",
            "Промывка дренажной системы",
            "Антибактериальная обработка",
            "Тест эффективности воздушного потока",
          ],
        },
        installation: {
          title: "Профессиональный монтаж",
          subtitle: "Сертифицированная установка для долгосрочной надежности.",
          description:
            "Правильный выбор и установка блока имеют решающее значение для энергоэффективности и срока службы. Наши инженеры позаботятся о каждой детали.",
          points: [
            "Оценка места и подбор мощности",
            "Высококачественные медные трубы",
            "Тестирование давлением и вакуумирование",
            "Инструктаж по эксплуатации",
          ],
        },
        repair: {
          title: "Быстрый ремонт и диагностика",
          subtitle: "Возвращаем комфорт в рекордно короткие сроки.",
          description:
            "Поломка кондиционера может случиться в самый неподходящий момент. Наша команда оперативно устранит любую неисправность.",
          points: [
            "Поиск и устранение утечек",
            "Заправка хладагентом (газом)",
            "Ремонт компрессора и вентилятора",
            "Диагностика электронных плат",
          ],
        },
      },
      whyUs: {
        title: "Создаем комфорт с 2012 года.",
        items: [
          {
            title: "Полностью лицензированы и застрахованы",
            text: "Будьте спокойны, ваша собственность защищена сертифицированными профессионалами.",
          },
          {
            title: "12-месячная гарантия",
            text: "Мы отвечаем за свою работу. На все ремонтные работы и запчасти предоставляется гарантия.",
          },
          {
            title: "Местное превосходство",
            text: "Мы работаем здесь годами, предоставляя услуги, адаптированные к местным условиям.",
          },
        ],
        stats: {
          satisfaction: "Удовлетворенность клиентов",
          cleaned: "Обслужено единиц техники",
          response: "Среднее время ответа",
        },
      },
      booking: {
        title: "Готовы к идеальному климату?",
        description:
          "Профессиональный сервис кондиционирования на расстоянии одного звонка. Мы принимаем заказы исключительно по телефону и WhatsApp.",
        whatsapp: "Чат WhatsApp",
        serving: "Обслуживаем все основные районы",
      },
      footer: {
        description:
          "Климатические решения премиум-класса. Мы заботимся о вашем комфорте круглый год.",
        services: "Услуги",
        links: "Ссылки",
        hours: "Часы работы",
        emergency: "Срочно",
        privacy: "Приватность",
        terms: "Условия",
        allRights: "Все права защищены.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ka", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
