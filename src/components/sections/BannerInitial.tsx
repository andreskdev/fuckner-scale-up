import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerLogoDesktop from "@/assets/banner-logo-fuckner-desktop.png";
import bannerLogoMobile from "@/assets/banner-logo-fuckner-mobile.png";
import bannerFormulaDesktop from "@/assets/banner-sem-formula-magica-fuckner-desktop.png";
import bannerFormulaMobile from "@/assets/banner-sem-formula-magica-fuckner-mobile.png";

const banners = [
  {
    desktop: bannerFormulaDesktop,
    mobile: bannerFormulaMobile,
    alt: "Sem fórmula mágica - Seu projeto precisa de compreensão de mercado, entendimento do comportamento de compra e dados",
  },
  {
    desktop: bannerLogoDesktop,
    mobile: bannerLogoMobile,
    alt: "Fuckner - A consultoria em marketing digital e e-commerce que seu negócio precisa",
  },
];

const BannerInitial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full group pt-16">
      <div className="w-full">
        <img
          src={banners[currentIndex].desktop}
          alt={banners[currentIndex].alt}
          className="hidden md:block w-full h-auto object-cover"
        />
        <img
          src={banners[currentIndex].mobile}
          alt={banners[currentIndex].alt}
          className="block md:hidden w-full h-auto object-cover"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Próximo banner"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-accent w-8" : "bg-accent/50"
            }`}
            aria-label={`Ir para banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerInitial;
