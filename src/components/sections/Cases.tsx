import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Cases = ({casesSectionRef}) => {
  const titleAnimation = useScrollAnimation({ direction: "up" });

  console.log(casesSectionRef)

  const cases = [
    {
      id: "case1",
      title: "Rede de 12 Lojas",
      description: "Implantação de marketplaces",
      result: "Aumento de 45% no faturamento",
      details: "Projeto completo de entrada em marketplaces para rede com 12 lojas físicas. Estruturação de catálogo, otimização de preços e estratégia de presença digital resultaram em crescimento expressivo de vendas."
    },
    {
      id: "case2", 
      title: "Migração de Plataforma",
      description: "Migração para VTEX",
      result: "De R$ 400 mil para R$ 1,5 milhão/mês",
      details: "Migração complexa de e-commerce com reestruturação completa de processos, integração de sistemas e otimização da experiência do usuário. O resultado foi um crescimento de quase 4x no faturamento mensal."
    },
    {
      id: "case3",
      title: "Contas Zeradas",
      description: "Reestruturação total após perda de contas",
      result: "De R$0 a R$ 100 mil/mês em 4 meses",
      details: "Reconstrução completa de operação digital após perda total de contas de marketing. Nova estratégia, criação de campanhas do zero e estruturação de funil de vendas eficiente."
    },
    {
      id: "case4",
      title: "Mobiliário Técnico",
      description: "Foco em equipe de atendimento e SAC",
      result: "De R$ 500 mil para R$ 740 mil em 3 meses",
      details: "Reestruturação do atendimento ao cliente e processos de SAC, implementação de CRM personalizado e treinamento de equipe comercial para empresa do setor de mobiliário técnico."
    },
    {
      id: "case5",
      title: "Marca de Móveis",
      description: "Reestruturação de fluxos e gestão",
      result: "De R$ 30 mil para R$ 200 mil em 3 meses",
      details: "Transformação completa dos processos internos, implementação de automações, reestruturação do funil de vendas e otimização da gestão comercial para marca de móveis."
    }
  ];

  return (
    <section id="cases" className="py-20 bg-background" ref={casesSectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleAnimation.ref} className={`text-3xl md:text-4xl font-bold mb-4 ${titleAnimation.className}`}>
            Estratégia em{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              ação
            </span>
            : resultados que falam por si.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Projetos reais, com números que comprovam o impacto de uma estratégia bem construída.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {cases.map((caseItem) => (
              <AccordionItem 
                key={caseItem.id} 
                value={caseItem.id}
                className="border border-border rounded-lg px-6 shadow-card bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">{caseItem.title}</h3>
                      <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                    </div>
                    <Badge variant="secondary" className="ml-4 bg-green-100 text-green-700 border-green-300">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {caseItem.result}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {caseItem.details}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Cases;