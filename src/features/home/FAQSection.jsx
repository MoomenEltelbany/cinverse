import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Main from "../../components/common/Main";
import AccordionCard from "./AccordionCard";

const FAQ_LIST = [
  {
    num: "01",
    question: "What is Cineverse?",
    answer:
      "Cineverse is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    num: "02",
    question: "How much does Cineverse cost?",
    answer:
      "Cineverse offers multiple plans starting from $9.99/month, with discounts on yearly subscriptions.",
  },
  {
    num: "03",
    question: "What content is available on Cineverse?",
    answer:
      "You'll find a wide range of movies, TV shows, and exclusive releases across all genres.",
  },
  {
    num: "04",
    question: "How can I watch Cineverse?",
    answer:
      "You can stream Cineverse on smartphones, tablets, smart TVs, and web browsers — anytime, anywhere.",
  },
  {
    num: "05",
    question: "How do I signup for Cineverse?",
    answer:
      "Visit cineverse.com, choose a plan, and create an account using your email and payment method.",
  },
  {
    num: "06",
    question: "What is the Cineverse free trial?",
    answer:
      "New users can enjoy a 7-day free trial with full access to Cineverse's content library.",
  },
  {
    num: "07",
    question: "How do I contact Cineverse customer support?",
    answer:
      "You can reach support via live chat, email, or the help center available in your account dashboard.",
  },
  {
    num: "08",
    question: "What are the Cineverse payment methods?",
    answer:
      "Cineverse accepts major credit cards, debit cards, and digital wallets like PayPal and Apple Pay.",
  },
];

function FAQSection() {
  return (
    <Main>
      <div
        id="faq"
        className="my-7 flex flex-col items-center justify-between gap-0 md:flex-row lg:gap-16"
      >
        <div>
          <h2 className="text-text-primary mb-3 text-2xl font-bold capitalize">
            Frequently asked question
          </h2>
          <p className="text-text-tertiary mb-7">
            Got a question? We've got answers! Check out our FAQ to find answers
            to the most common question about Cineverse.
          </p>
        </div>

        {/* TODO: A button that will take to a form to fill a question */}
        <Link
          to="/form"
          className="bg-brand text-text=primary hover:bg-surface-alt rounded px-2 py-1 font-semibold transition-colors duration-200"
        >
          Ask a Question
        </Link>
      </div>

      {/* ACCORDION SECTION */}
      <div className="flex flex-col gap-3">
        {FAQ_LIST.map((item) => (
          <AccordionCard
            key={item.num}
            num={item.num}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </Main>
  );
}

export default FAQSection;
