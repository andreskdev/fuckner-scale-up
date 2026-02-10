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
    controlsTheme: "light",
  },
  {
    desktop: bannerLogoDesktop,
    mobile: bannerLogoMobile,
    alt: "Fuckner - A consultoria em marketing digital e e-commerce que seu negócio precisa",
    controlsTheme: "dark",
  },
];

const controlStyles = {
  dark: {
    button: "bg-black/60 hover:bg-black/80 text-white",
    icon: "text-white",
  },
  light: {
    button: "bg-white/70 hover:bg-white text-black",
    icon: "text-black",
  },
};



export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    // valor inicial
    handleChange();

    // listener para resize / mudança de orientação
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return isMobile;
}

export const BannerInitial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile(768)

  const theme = controlStyles[banners[currentIndex].controlsTheme];

  useEffect(() => {

    if (isMobile) {
      return
    }
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  if (isMobile === null) {
    return
  }
  return (

    <>
      {
        isMobile ? (
          <div className="relative w-full group pt-16">
            <div className="w-full">
              <img
                src={banners[currentIndex].desktop}
                alt={banners[currentIndex].alt}
                className="hidden md:block w-full h-auto object-cover"
                style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" }}
              />
              <img
                src={banners[currentIndex].mobile}
                alt={banners[currentIndex].alt}
                className="block md:hidden w-full h-auto object-cover"
                style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" }}
              />
            </div>
          </div>
        ) : (
          <div className="relative w-full group pt-16">
            <div className="w-full">
              <img
                src={banners[currentIndex].desktop}
                alt={banners[currentIndex].alt}
                className="hidden md:block w-full h-auto object-cover"
                style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" }}
              />
              <img
                src={banners[currentIndex].mobile}
                alt={banners[currentIndex].alt}
                className="block md:hidden w-full h-auto object-cover"
                style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.6)" }}
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
    opacity-0 group-hover:opacity-100 transition-opacity
    ${theme.button}`}
            >
              <ChevronLeft className={`w-6 h-6 ${theme.icon}`} />
            </button>
            <button
              onClick={goToNext}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
    opacity-0 group-hover:opacity-100 transition-opacity
    ${theme.button}`}
              aria-label="Próximo banner"
            >
              <ChevronRight className={`w-6 h-6 ${theme.icon}`} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-accent w-8" : "bg-accent/50"
                    }`}
                  aria-label={`Ir para banner ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )
      }
    </>

  )

}