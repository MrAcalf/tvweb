import React from "react";
import { Tv, Globe, Zap, Shield, Headphones, Clock } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl hover:bg-purple-50 transition-colors duration-300">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Tv size={24} />,
      title: "Conteúdo HD",
      description:
        "Aproveite a qualidade de imagem cristalina com nossos canais HD e 4K para a melhor experiência de visualização.",
    },
    {
      icon: <Globe size={24} />,
      title: "Canais Globais",
      description:
        "Acesse canais de todo o mundo com nossos pacotes internacionais e conteúdo regional.",
    },
    {
      icon: <Zap size={24} />,
      title: "Streaming Rápido",
      description:
        "Nossos servidores otimizados garantem streaming sem buffer mesmo durante os horários de pico.",
    },
    {
      icon: <Shield size={24} />,
      title: "Conexão Segura",
      description:
        "Seus hábitos de visualização e dados pessoais são protegidos com nossas conexões criptografadas seguras.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Suporte por WhatsApp",
      description:
        "Nossa equipe de suporte dedicada está disponível para te ajudar com qualquer problema.",
    },
    {
      icon: <Clock size={24} />,
      title: "Recurso de Replay",
      description:
        "Perdeu seu programa favorito? Sem problemas! Nosso recurso de replay permite que você assista ao conteúdo passado.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos Premium
          </h2>
          <p className="text-lg text-gray-600">
            Experimente a televisão como nunca antes com nossos recursos de
            ponta projetados para melhorar sua experiência de visualização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
