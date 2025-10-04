import { Card } from "@/components/ui/card";
import { Award, Target, TrendingUp, Globe2 } from "lucide-react";
import taylaProfile from "@/assets/tayla-fuckner-profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "+14 anos em Marketing | +7 anos em E-commerce",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Experiência em +10 Nichos de Mercado",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "Mais de R$ 28 milhões em vendas gerenciadas",
      color: "text-accent"
    },
    {
      icon: Globe2,
      title: "Expertise em Estratégias Multicanais (B2C, B2B) e Mercados Brasil/EUA",
      color: "text-primary"
    }
  ];

  return (
    <section id="quem-sou" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={taylaProfile}
                alt="Tayla Fuckner - Consultora Digital"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl max-w-md mx-auto"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por trás da{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Fuckner Consultoria
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A trajetória é marcada por conquistas expressivas em vendas digitais, 
                gestão de equipes e projetos de alto impacto. O foco sempre foi criar 
                estratégias personalizadas, transformar negócios e gerar resultados consistentes.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-4 border-0 shadow-card bg-card/70 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg bg-${highlight.color.split('-')[1]}/10`}>
                      <highlight.icon className={`h-5 w-5 ${highlight.color}`} />
                    </div>
                    <p className="text-sm font-medium leading-relaxed pt-1">
                      {highlight.title}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;