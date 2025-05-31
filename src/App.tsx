import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlanSection from "./components/PlanSection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import About from "./components/About";
import VideoModal from "./components/VideoModal";
import { Play } from "lucide-react";
import { ModalProvider } from "./providers/Modal.provider";
import { useModal } from "./hooks/useModal";

function AppContent() {
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    // Set the document title
    document.title = "Luis Lima Sat - Premium TV Plans";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <PlanSection />
        <Features />
        <About />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />

      {/* Video Modal */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Video Button */}
      <button
        onClick={openModal}
        className="fixed bottom-24 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center"
        aria-label="Watch video"
      >
        <Play size={24} />
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/5512982003016?text=${encodeURIComponent(
          "Hello, I'd like to know more about your TV plans."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>
    </div>
  );
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
