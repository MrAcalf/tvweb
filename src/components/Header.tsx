import React, { useState, useEffect } from "react";
import { Tv2, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Tv2 size={32} className="text-purple-600 mr-2" strokeWidth={2.5} />
          <a href="#hero">
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
              UniTv Oficial Recargas
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#plans"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Planos
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Recursos
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Contato
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#plans"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recursos
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
