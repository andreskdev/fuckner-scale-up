import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Banner = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="h-screen w-full relative overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {/* Banner 1 - Crescimento Digital */}
          <CarouselItem className="h-full">
            <div className="relative h-full flex items-center justify-center bg-gradient-primary">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="relative z-20 text-center text-white px-6 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Transforme seu negócio em uma{" "}
                  <span className="text-accent-light">máquina de vendas</span>
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Estratégias comprovadas que já geraram mais de R$ 28 milhões em vendas
                </p>
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Começar Agora
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Banner 2 - Experiência */}
          <CarouselItem className="h-full">
            <div className="relative h-full flex items-center justify-center bg-gradient-accent">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="relative z-20 text-center text-white px-6 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-accent-light">+14 anos</span> de experiência
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Mais de 10 nichos de mercado dominados com estratégias personalizadas
                </p>
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Ver Cases de Sucesso
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Banner 3 - Resultados */}
          <CarouselItem className="h-full">
            <div className="relative h-full flex items-center justify-center bg-gradient-subtle">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="relative z-20 text-center text-white px-6 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Do zero a{" "}
                  <span className="text-accent-light">R$ 1,5M/mês</span>
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Casos reais de crescimento exponencial em poucos meses
                </p>
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Quero Crescer Assim
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        {/* Botões de navegação */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 border-white/30" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 border-white/30" />
      </Carousel>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
          <div className="w-3 h-3 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;