import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import bispoDourado from "@/assets/bispo_dourado.png";
import reiDourado from "@/assets/rei_dourado.png";
import rainhaDourada from "@/assets/rainha_dourada.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const titleAnimation = useScrollAnimation({ direction: "up" });
  
  const services = [
    {
      image: bispoDourado,
      title: "Marketing Digital",
      description: "Campanhas de Social ADS, Google Ads e YouTube Ads, SEO, gestão de redes sociais.",
      features: [
        "Social ADS (Meta, TikTok, LinkedIn)",
        "Google Ads (Search, Display, Shopping)",
        "SEO (Otimização para Google)",
        "Gestão de Redes Sociais"
      ]
    },
    {
      image: reiDourado,
      title: "Criação de Sites",
      description: "E-commerce, sites institucionais e landing pages otimizadas para conversão.",
      features: [
        "E-commerces Completos",
        "Sites Institucionais",
        "Landing Pages de Alta Conversão"
      ]
    },
    {
      image: rainhaDourada,
      title: "Consultoria Estratégica",
      description: "Planejamento, estruturação e treinamento para escalar seu negócio.",
      features: [
        "Planejamento Estratégico",
        "Implantação de Marketplaces",
        "Google Meu Negócio",
        "Treinamento de Equipes",
        "Migração de Plataformas"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleAnimation.ref} className={`text-3xl md:text-4xl font-bold mb-4 ${titleAnimation.className}`}>
            Soluções que fazem a{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              diferença
            </span>{" "}
            no seu negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experiência, inovação e execução prática aplicadas para levar empresas a outro nível no digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={`${service.title} icon`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;