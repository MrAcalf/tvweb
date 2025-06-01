import React from "react";
import { PlayCircle } from "lucide-react";
import { useModal } from "../hooks/useModal";
const Hero: React.FC = () => {
  const { openModal } = useModal();
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 z-0"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-green-300 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-green-500">
                Planos Premium de TV
              </span>
              <br />
              <span className="text-gray-800">Para Seu Entretenimento</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Tenha acesso a centenas de canais com qualidade HD cristalina.
              Encontre o plano perfeito para suas necessidades de
              entretenimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#plans"
                className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-purple-200"
              >
                Ver Planos
              </a>

              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center bg-white text-purple-600 border border-purple-200 font-medium py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <PlayCircle size={20} className="mr-2" />
                Como Funciona
              </button>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg"
                  alt="TV Entertainment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Esportes ao Vivo</span>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Canais HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
