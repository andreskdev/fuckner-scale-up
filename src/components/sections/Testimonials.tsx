import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechMóveis",
      image: "",
      text: "A Tayla revolucionou nossa operação digital. Em apenas 4 meses saímos do zero para R$ 100 mil mensais. Profissionalismo e resultados excepcionais."
    },
    {
      name: "Marina Santos",
      role: "Diretora Comercial",
      company: "Rede MultiLojas",
      image: "",
      text: "Implementação dos marketplaces foi perfeita. 45% de aumento no faturamento foi além das nossas expectativas. Parceria estratégica fundamental."
    },
    {
      name: "Roberto Lima",
      role: "Fundador",
      company: "LimaTech Solutions",
      image: "",
      text: "Migração para VTEX executada com maestria. De R$ 400 mil para R$ 1,5 milhão mensais. A Fuckner entende de crescimento real."
    },
    {
      name: "Ana Paula Costa",
      role: "Gerente Marketing",
      company: "Móveis Premium",
      image: "",
      text: "Reestruturação completa dos processos internos. De R$ 30 mil para R$ 200 mil em 3 meses. Metodologia comprovada e eficiente."
    },
    {
      name: "Felipe Martins",
      role: "Diretor Operacional",
      company: "Industrial Móveis",
      image: "",
      text: "Foco no atendimento ao cliente transformou nossos resultados. R$ 500 mil para R$ 740 mil em apenas 3 meses. Excelência em execução."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A visão de{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              parceiros
            </span>
            , clientes e equipe
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="shadow-elegant border-0 backdrop-blur-sm relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
                    <CardContent className="p-8 text-center">
                      <Quote className="h-8 w-8 text-accent mx-auto mb-6" />
                      
                      <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8">
                        "{testimonial.text}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.image} />
                          <AvatarFallback className="bg-gradient-accent text-accent-foreground font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="text-left">
                          <div className="font-bold text-white">{testimonial.name}</div>
                          <div className="text-sm text-white/80">
                            {testimonial.role} • {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-8 rounded-full transition-smooth ${
                  index === currentIndex ? 'bg-accent' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;