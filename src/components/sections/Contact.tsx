import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {

  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para{" "}
            <span className="text-accent">
              transformar
            </span>{" "}
            seu negócio digital?
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            O próximo resultado expressivo pode ser o seu. Vamos escalar seu negócio? 
            Qual dígito de milhão você quer alcançar?
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main WhatsApp CTA */}
          <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm mb-8">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <MessageSquare className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Vamos <span className="text-accent">transformar</span> seu negócio?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Clique no botão abaixo e inicie uma conversa direta comigo no WhatsApp. 
                  Vamos discutir como posso ajudar seu negócio a alcançar resultados extraordinários.
                </p>
              </div>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-12 py-6 h-auto shadow-elegant hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a 
                  href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Conversar no WhatsApp agora
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/10">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a 
                      href="mailto:taylla@fuckner.com.br"
                      className="text-accent hover:underline"
                    >
                      taylla@fuckner.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-success/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <a 
                      href="https://wa.me/5541998317531"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      (41) 9 9831-7531
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Section */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Por que escolher a Fuckner?</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>+14 anos de experiência comprovada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>R$ 28+ milhões em vendas gerenciadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estratégias personalizadas, não fórmulas prontas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Foco em resultados mensuráveis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;