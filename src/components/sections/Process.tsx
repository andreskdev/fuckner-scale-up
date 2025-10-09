import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Process = () => {
  const titleAnimation = useScrollAnimation({ direction: "up" });
  
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico Inicial",
      description: "Análise completa do momento do negócio"
    },
    {
      icon: Target,
      number: "02", 
      title: "Plano Estratégico",
      description: "Definição de metas, prazos e canais"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Execução",
      description: "Implementação das ações de marketing, vendas e tecnologia"
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Otimização Contínua",
      description: "Monitoramento de métricas e ajustes"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleAnimation.ref} className={`text-3xl md:text-4xl font-bold mb-4 ${titleAnimation.className}`}>
            Da estratégia à{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              execução
            </span>
            : um método comprovado
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 h-0.5 bg-gradient-accent transform -translate-y-1/2 w-full opacity-30"></div>

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <Card key={index} className="border-0 shadow-card bg-card/80 backdrop-blur-sm hover:scale-105 transition-all duration-600">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile List */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-card bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;