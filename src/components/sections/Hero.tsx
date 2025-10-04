import { Button } from "@/components/ui/button";
import Tabuleiro from "@/assets/tabuleiro.png";
import { useRef } from "react";

const Hero = ({casesSectionRef}) => {
    
    function goToSectionCases() {
      casesSectionRef.current.scrollIntoView({
        behavior: "smooth"
      })
    }
    

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Do planejamento à{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                performance
              </span>
              : crescimento sem achismos.
            </h1>
            
            <p className="text-lg md:text-xl text-primary-light leading-relaxed max-w-xl">
              Estratégias digitais construídas para gerar resultados reais. Nada de fórmulas prontas: 
              cada negócio pede um único caminho, e esse caminho começa aqui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero escalar meu negócio
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={goToSectionCases}>
                Ver Cases de Sucesso
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">+14</div>
                <div className="text-sm text-muted-foreground">Anos em Marketing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">R$ 28M+</div>
                <div className="text-sm text-muted-foreground">Em vendas gerenciadas</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-accent">+10</div>
                <div className="text-sm text-muted-foreground">Nichos de mercado</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={Tabuleiro}
                alt="Crescimento digital e estratégias de marketing"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;