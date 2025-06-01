import React from "react";
import { Check, ExternalLink } from "lucide-react";
import { Plan } from "../types";
import { createWhatsAppLink } from "../utils/whatsapp";

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div
      className={`relative rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full
        ${
          plan.popular
            ? "border-2 border-purple-500 scale-105 md:scale-110 z-10"
            : "border border-gray-200"
        }
      `}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium text-nowrap">
          Mais Popular
        </div>
      )}

      <div
        className={`px-6 py-8 rounded-t-2xl ${
          plan.popular ? "bg-purple-50" : "bg-white"
        }`}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
        <h4 className="text-lg text-gray-600 mb-2">{plan.subtitle}</h4>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold text-gray-900">
            R${plan.price}
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className={`mr-2 flex-shrink-0 ${plan.color}`} />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto p-6 bg-gray-50 rounded-b-2xl">
        <a
          href={createWhatsAppLink(plan.name, plan.price)}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center ${plan.color} ${plan.hoverColor} text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg`}
        >
          Escolher Plano
          <ExternalLink size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default PlanCard;
