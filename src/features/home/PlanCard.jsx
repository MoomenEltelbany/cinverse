import toast from "react-hot-toast";
import Button from "../../components/common/Button";

function PlanCard({ title, text, plan, subscribed, onSubscribed }) {
  function handleTrial() {
    if (subscribed) {
      toast.error(
        `You can't start a free trial while subscribed to the ${subscribed}.`,
      );
    } else {
      toast.success("🎉 Your trial is live! You've got 7 days of free access.");
    }
  }

  function handleSubscriptions() {
    if (subscribed) {
      toast.error(
        `You're already subscribed to the ${subscribed}. Please cancel it before switching plans.`,
      );
    } else {
      onSubscribed(title);
      toast.success(
        `${title} activated! Your entertainment journey begins now — stream anytime, anywhere.`,
      );
    }
  }

  function handleCancelSubscriptions() {
    if (confirm("Are you sure you want to cancel your subscription?")) {
      onSubscribed(null);
      toast.success(`Your subscription was cancelled successfully.`);
    }
  }

  return (
    <div
      className={`bg-surface-card rounded border p-6 ${
        subscribed === title ? "border-red-600" : "border-border-subtle"
      }`}
    >
      <h3 className="text-text-primary text-2xl font-semibold">{title}</h3>
      <p className="text-text-tertiary my-4">{text}</p>
      <p>
        <span className="text-4xl font-semibold">${plan.price}</span>
        <span className="text-text-tertiary text-sm">/{plan.type}</span>
      </p>
      <div className="my-6 flex gap-4">
        <Button type="secondary" onClick={handleTrial}>
          Start free trial
        </Button>
        {subscribed === title ? (
          <Button onClick={handleCancelSubscriptions}>
            Cancel Subscription
          </Button>
        ) : (
          <Button onClick={handleSubscriptions}>Choose Plan</Button>
        )}
      </div>
    </div>
  );
}

export default PlanCard;
