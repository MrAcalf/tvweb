import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  rating,
  image,
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }
          />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic">"{quote}"</p>

      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "A qualidade da imagem é incrível e nunca tive nenhuma queda. O atendimento ao cliente também é excepcional!",
      author: "Maria Silva",
      role: "Assinante Premium",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      quote:
        "Já experimentei outros serviços antes, mas o UniTv Oficial Recargas oferece a melhor seleção de canais de longe. Altamente recomendado!",
      author: "Carlos Mendez",
      role: "Assinante Ultimate",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      quote:
        "Ótimo custo-benefício. O plano Básico tem tudo que preciso e a qualidade do streaming é consistente.",
      author: "Ana Pereira",
      role: "Assinante Básico",
      rating: 4,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600">
            Não acredite apenas em nossa palavra. Veja o que nossos assinantes
            pensam sobre nosso serviço.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
