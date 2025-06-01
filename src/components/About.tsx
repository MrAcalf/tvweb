import React from "react";
import { Users, Award, Clock, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a UniTv Oficial Recargas
          </h2>
          <p className="text-lg text-gray-600">
            Somos líderes em entretenimento digital, oferecendo soluções premium
            de TV para milhares de clientes satisfeitos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Nossa Missão
                  </h3>
                  <p className="text-gray-600">
                    Fornecer entretenimento de alta qualidade a preços
                    acessíveis, garantindo a melhor experiência de visualização
                    para nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Nossa Experiência
                  </h3>
                  <p className="text-gray-600">
                    Com mais de 10 anos no mercado, construímos uma reputação
                    sólida baseada em qualidade, confiabilidade e atendimento
                    excepcional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Atendimento por WhatsApp
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe de suporte está disponível para te ajudar com
                    qualquer problema, para garantir que você tenha a melhor
                    experiência possível.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Compromisso com o Cliente
                  </h3>
                  <p className="text-gray-600">
                    A satisfação do cliente é nossa prioridade número um.
                    Trabalhamos incansavelmente para superar suas expectativas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg"
                alt="Nossa Equipe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
