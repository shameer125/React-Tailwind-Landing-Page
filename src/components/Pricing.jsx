import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic Features", "Limited Storage", "Community Support"],
  },
  {
    name: "Personal",
    price: "$19",
    popular: true,
    features: ["All Free Features", "Unlimited Storage", "Priority Support"],
  },
  {
    name: "Organization",
    price: "$49",
    features: ["Team Collaboration", "Advanced Security", "Dedicated Support"],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
      <p className="text-gray-500 mb-12">Simple pricing. No hidden fees.</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative p-8 rounded-2xl shadow-lg transition transform hover:-translate-y-2 ${
              plan.popular ? "bg-blue-900 text-white scale-105" : "bg-white"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-blue-500 text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

            <p className="text-3xl font-bold mb-6">
              {plan.price}
              <span className="text-sm font-normal"> /month</span>
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6 text-sm text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg transition ${
                plan.popular
                  ? "bg-white text-blue-900 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
