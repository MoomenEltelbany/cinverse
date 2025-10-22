import { useState } from "react";
import Main from "../../ui/Main";
import PlanCard from "./PlanCard";

const PLANS = [
  {
    title: "Basic Plan",
    text: "Enjoy an extensive library of movies and shows, featuring a wide range of content including recent releases.",
    monthly: {
      price: "9.99",
      type: "month",
    },
    yearly: {
      price: "95.99",
      type: "year",
    },
  },
  {
    title: "Standard Plan",
    text: "Unlock a broader selection of movies and shows, including most new releases and exclusive content.",
    monthly: {
      price: "12.99",
      type: "month",
    },
    yearly: {
      price: "124.99",
      type: "year",
    },
  },
  {
    title: "Premium Plan",
    text: "Get access to the widest selection of movies and shows, including all new releases and offline viewing.",
    monthly: {
      price: "14.99",
      type: "month",
    },
    yearly: {
      price: "139.99",
      type: "year",
    },
  },
];

function PlansSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [subscribed, setIsSubscribed] = useState(null);

  return (
    <Main>
      <div
        id="plans"
        className="my-7 flex flex-col items-center justify-between gap-0 md:flex-row lg:gap-36"
      >
        <div>
          <h2 className="text-text-primary mb-3 text-2xl font-bold">
            We provide you streaming experiences across various devices
          </h2>
          <p className="text-text-tertiary mb-7">
            With Cineverse, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
        <div className="border-border-strong flex items-center gap-3 rounded border-2 p-1 text-base">
          <button
            className={`cursor-pointer rounded px-6 py-3 ${billingCycle === "monthly" ? "bg-border-subtle" : ""} hover:bg-border-subtle transition-colors duration-300`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`cursor-pointer rounded px-6 py-3 ${billingCycle === "yearly" ? "bg-border-subtle" : ""} hover:bg-border-subtle transition-colors duration-300`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.title}
            title={plan.title}
            text={plan.text}
            plan={billingCycle === "monthly" ? plan.monthly : plan.yearly}
            subscribed={subscribed}
            onSubscribed={setIsSubscribed}
          />
        ))}
      </div>
    </Main>
  );
}

export default PlansSection;
