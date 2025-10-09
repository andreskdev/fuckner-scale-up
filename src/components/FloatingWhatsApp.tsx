import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("servicos");
      const inicioSection = document.getElementById("inicio");
      
      if (servicesSection && inicioSection) {
        const servicesSectionTop = servicesSection.offsetTop;
        const inicioSectionBottom = inicioSection.offsetTop + inicioSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show button after services section, hide when at inicio section
        if (scrollPosition > servicesSectionTop && window.scrollY > inicioSectionBottom) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-600 hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
      aria-label="Falar no WhatsApp"
      style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
