import Button from "../../ui/Button";
import Main from "../../ui/Main";

function TrialSection() {
  return (
    <main
      className="border-border-subtle m-8 mx-auto max-w-7xl rounded-xl border bg-neutral-900 p-6 tracking-wider sm:p-8 lg:py-14"
      style={{
        background: `linear-gradient(to right, #0f0f0f 20%, rgba(255,0,0,0.1))`,
      }}
    >
      <div className="flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
        <div>
          <h3 className="text-text-primary text-3xl font-semibold">
            Start your free trial today!
          </h3>
          <p className="text-text-tertiary my-4 text-base">
            This is a clear and concise call to action that encourages users to
            sign up for free trial of Cineverse
          </p>
        </div>
        <Button>Start a free trial</Button>
      </div>
    </main>
  );
}

export default TrialSection;
