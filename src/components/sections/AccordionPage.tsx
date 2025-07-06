import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    question: "რა ტიპის კონდიციონერებს აყენებთ?",
    answer:
      "ვაყენებთ ყველანაირი ზომის კონდიციონერს. ასევე შეგვიძლია დაგეხმაროთ არჩევაში, რაც ყველაზე მეტად შეესაბამება თქვენს სივრცესა და ბიუჯეტს.",
  },
  {
    question: "როგორ გავიგო, რა ზომის კონდიციონერი მჭირდება?",
    answer:
      "ზომა დამოკიდებულია ოთახის ფართობზე, იზოლაციაზე და გამოყენების ინტენსივობაზე. ჩვენ შეგიფასებთ სივრცეს და გირჩევთ შესაბამის მოწყობილობას.",
  },
  {
    question: "ადგილზე კონსულტაცია და შეფასება გაქვთ?",
    answer: "დიახ, გთავაზობთ ადგილზე შეფასებასა და კონსულტაციას.",
  },
  {
    question: "რამდენი დრო სჭირდება კონდიციონერის დამონტაჟებას?",
    answer:
      "უმეტეს შემთხვევაში სტანდარტულ მონტაჟს 2 საათი სჭირდება, თუმცა რთული ან დიდი პროექტები მეტი დროითაც შეიძლება დასრულდეს. ზუსტ დროს შეფასების შემდეგ გეტყვით.",
  },
  {
    question: "უნდა მოვამზადო რამე მონტაჟამდე?",
    answer:
      "საჭიროა მხოლოდ იმ ადგილის გათავისუფლება, სადაც მოხდება მონტაჟი. დანარჩენს ჩვენი გუნდი მიხედავს.",
  },
  {
    question: "შეგიძლიათ ძველი კონდიციონერის მოხსნა და გატანაც?",
    answer:
      "დიახ, საჭიროების შემთხვევაში ვხსნით და გაგვაქვს ძველი თქვენი სურვილის შესაბამისად.",
  },
  {
    question: "რა გარანტიას იძლევით მონტაჟზე?",
    answer: "მონტაჟზე ვიძლევით მწარმოებლის გარანტიის პერიოდს.",
  },
  {
    question: "თავაზობთ თუ არა კონდიციონერის სერვის მომსახურებას?",
    answer:
      "დიახ, გვაქვს სერვისის პაკეტები, რომლებიც დაგეხმარებათ სისტემის გამართულად მუშაობაში მთელი წლის განმავლობაში.",
  },
  {
    question: "რომელ ტერიტორიებს ემსახურებით?",
    answer:
      "ვემსახურებით თბილისა და რუსთავის ქალაქებს და მის მიმდებარე ტერიტორიებს.",
  },
];

export default function AccordionPage() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full xl:px-48 px-4"
      defaultValue="item-1"
    >
      {data.map((data, i) => (
        <div key={i}>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger className="text-lg lg:text-2xl">
              {data.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-white ">
              <p>{data.answer}</p>
            </AccordionContent>
          </AccordionItem>
          <div className="w-full h-1 bg-white"></div>
        </div>
      ))}
    </Accordion>
  );
}
