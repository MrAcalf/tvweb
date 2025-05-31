import React from "react";
import { ExternalLink } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-500 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-800 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Elevar Sua Experiência de TV?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-purple-100">
            Junte-se a milhares de clientes satisfeitos desfrutando de
            entretenimento premium. Escolha seu plano hoje e comece a assistir
            em minutos!
          </p>

          <a
            href="#plans"
            className="inline-flex items-center justify-center bg-white text-purple-600 font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:bg-purple-50 hover:shadow-xl"
          >
            Começar Agora
            <ExternalLink size={18} className="ml-2" />
          </a>

          <p className="mt-8 text-purple-100">
            Tem dúvidas?{" "}
            <a
              href={`https://wa.me/5512982003016?text=${encodeURIComponent(
                "Olá, tenho algumas dúvidas sobre seus planos de TV."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-purple-200"
            >
              Entre em contato com nossa equipe de suporte
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
