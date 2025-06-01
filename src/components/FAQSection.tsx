import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | string[];
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Como posso realizar um teste do serviço?",
      answer:
        "O UniTV é compatível exclusivamente com Android TV, TV Box, dispositivos Firestick e celulares Android. Cada usuário tem direito a realizar um teste gratuito no aplicativo. Caso já tenha utilizado o período de teste, infelizmente, não será possível gerar outro.",
    },
    {
      question: "Quantas conexões simultâneas são permitidas?",
      answer:
        "Cada login (usuário e senha) permite o uso simultâneo em um dispositivo de TV e um aparelho celular.",
    },
    {
      question: "Em quais dispositivos é possível utilizar o serviço?",
      answer: [
        "O UniTV foi desenvolvido exclusivamente para dispositivos Android. Confira os aparelhos compatíveis:",
        "Android TV: Televisores com sistema operacional Android integrado.",
        "TV Box Android: Caixas de streaming que utilizam o sistema Android.",
        "Firestick: Dispositivos Fire TV da Amazon com suporte a aplicativos Android.",
        "Celulares Android: Smartphones com sistema Android instalado.",
      ],
    },
    {
      question: "Quais são os métodos de pagamentos disponíveis?",
      answer: ["PIX", "Cartão de crédito"],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre nossos serviços e planos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  {Array.isArray(item.answer) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {item.answer.map((line, i) => (
                        <li key={i} className="text-gray-600">
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">{item.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
