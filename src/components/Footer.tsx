import React from "react";
import {
  Tv2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Tv2 size={32} className="text-purple-400 mr-2" />
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
                UniTv Oficial Recargas
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Fornecendo soluções premium de entretenimento TV desde 2010.
              Serviço de qualidade que você pode confiar.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#plans"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone
                  size={20}
                  className="text-purple-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">+55 12 98200-3016</span>
              </li>
              <li className="flex">
                <MapPin
                  size={20}
                  className="text-purple-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">Guaratinguetá, São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} UniTv Oficial Recargas. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
