import React from "react";
import { ExternalLink } from "lucide-react";
import PlanCard from "./PlanCard";
import { Plan } from "../types";

const PlanSection: React.FC = () => {
  const plans: Plan[] = [
    {
      id: "basic",
      name: "Plano Gold",
      subtitle: "ACESSO IMEDIATO",
      price: 29.99,
      features: [
        "30 dias de acesso",
        "2 telas",
        "Esportes, Filmes, Séries e Novelas",
        "Stream de alta qualidade (sem travamentos)",
        "Suporte Especializado",
      ],
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      id: "premium",
      name: "Plano Gold",
      subtitle: "ACESSO IMEDIATO",
      price: 69.99,
      features: [
        "90 dias de acesso",
        "2 telas",
        "Esportes, Filmes, Séries e Novelas",
        "Stream de alta qualidade (sem travamentos)",
        "Suporte Especializado",
      ],
      popular: true,
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
    },
    {
      id: "ultimate",
      name: "Plano Gold",
      subtitle: "ACESSO IMEDIATO",
      price: 119.99,
      features: [
        "180 dias de acesso",
        "2 telas",
        "Esportes, Filmes, Séries e Novelas",
        "Stream de alta qualidade (sem travamentos)",
        "Suporte Especializado",
      ],
      color: "bg-green-500",
      hoverColor: "hover:bg-green-400",
    },
    {
      id: "ultimate",
      name: "Plano Gold",
      subtitle: "ACESSO IMEDIATO",
      price: 169.99,
      features: [
        "365 dias de acesso",
        "2 telas",
        "Esportes, Filmes, Séries e Novelas",
        "Stream de alta qualidade (sem travamentos)",
        "Suporte Especializado",
      ],
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
  ];

  return (
    <section id="plans" className="py-16 md:py-24 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha Seu Plano Perfeito
          </h2>
          <p className="text-lg text-gray-600">
            Selecione o plano que melhor atende às suas necessidades de
            entretenimento. Todos os planos incluem acesso ao nosso suporte
            premium ao cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xs:gap-20 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="flex justify-center">
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Não tem certeza de qual plano é o ideal para você?
          </p>
          <a
            href={`https://wa.me/5512982003016?text=${encodeURIComponent(
              "Olá, gostaria de saber mais sobre seus planos de TV."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            Entre em contato para uma recomendação personalizada
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
