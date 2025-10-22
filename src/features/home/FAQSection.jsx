import Button from "../../ui/Button";
import Main from "../../ui/Main";

function FAQSection() {
  return (
    <Main>
      <div className="my-7 flex flex-col items-center justify-between gap-0 md:flex-row lg:gap-16">
        <div>
          <h2 className="text-text-primary mb-3 text-2xl font-bold capitalize">
            Frequently asked question
          </h2>
          <p className="text-text-tertiary mb-7">
            Got a question? We've got answers! Check out our FAQ to find answers
            to the most common question about Cineverse.
          </p>
        </div>

        <Button>Ask a Question</Button>
      </div>
    </Main>
  );
}

export default FAQSection;
