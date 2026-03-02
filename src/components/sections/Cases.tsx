import { TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Cases = ({ casesSectionRef }: { casesSectionRef: React.RefObject<HTMLDivElement> }) => {
  const titleAnimation = useScrollAnimation({ direction: "up" });

  const cases = [
    {
      id: "case1",
      title: "Rede de 12 Lojas",
      description: "Implantação de marketplaces",
      result: "+45% faturamento",
      details: "Estruturação de catálogo, otimização de preços e estratégia de presença digital resultaram em crescimento expressivo de vendas."
    },
    {
      id: "case2",
      title: "Migração de Plataforma",
      description: "Migração para VTEX",
      result: "R$400k → R$1,5M/mês",
      details: "Reestruturação completa de processos, integração de sistemas e otimização da experiência do usuário."
    },
    {
      id: "case3",
      title: "Contas Zeradas",
      description: "Reestruturação após perda de contas",
      result: "R$0 → R$100k em 4 meses",
      details: "Nova estratégia, criação de campanhas do zero e estruturação de funil de vendas eficiente."
    },
    {
      id: "case4",
      title: "Mobiliário Técnico",
      description: "Foco em atendimento e SAC",
      result: "R$500k → R$740k em 3 meses",
      details: "Implementação de CRM personalizado e treinamento de equipe comercial."
    },
    {
      id: "case5",
      title: "Marca de Móveis",
      description: "Reestruturação de fluxos e gestão",
      result: "R$30k → R$200k em 3 meses",
      details: "Automações, reestruturação do funil de vendas e otimização da gestão comercial."
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

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-5 [&>div]:w-full [&>div]:md:w-[calc(50%-0.625rem)] [&>div]:lg:w-[calc(33.333%-0.875rem)]">
          {cases.map((caseItem, index) => {
            const anim = useScrollAnimation({ direction: "up", delay: index * 100 });
            return (
              <div
                key={caseItem.id}
                ref={anim.ref}
                className={`group relative border border-border rounded-xl p-6 bg-card/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-[600ms] ease-smooth ${anim.className}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-success shrink-0" />
                  <span className="text-sm font-semibold text-success">{caseItem.result}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{caseItem.title}</h3>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">{caseItem.description}</p>
                <div className="h-px w-10 bg-gradient-accent mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cases;