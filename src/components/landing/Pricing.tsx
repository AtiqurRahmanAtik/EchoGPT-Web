import { Check } from "lucide-react";
import Button from "../common/Button";

const plans = [
  {
    name: "Free",
    description: "For exploring AI-powered workflows.",
    price: "$0",
    features: [
      "Access to available features",
      "Basic conversation experience",
      "Personal productivity tools",
    ],
  },
  {
    name: "Pro Concept",
    description: "For users who need more flexibility.",
    price: "Coming soon",
    features: [
      "Extended AI workflows",
      "Advanced productivity features",
      "Enhanced workspace experience",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="mb-3 text-sm font-semibold text-violet-400">
            Pricing
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Simple plans for
            <span className="gradient-text"> every workflow.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Conceptual pricing UI for the redesign assignment.
            Actual plan availability should be confirmed with the product.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`rounded-2xl border p-7 ${
                index === 1
                  ? "border-violet-500/40 bg-violet-500/[0.06]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              <h3 className="text-lg font-semibold">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {plan.description}
              </p>

              <div className="my-6 text-3xl font-bold">
                {plan.price}
              </div>

              <ul className="mb-7 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="/app"
                variant={index === 1 ? "primary" : "secondary"}
                className="w-full"
              >
                {index === 0 ? "Get Started" : "Explore"}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}