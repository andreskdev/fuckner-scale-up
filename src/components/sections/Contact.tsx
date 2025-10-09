import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const titleAnimation = useScrollAnimation({ direction: "up" });

  const copyEmail = () => {
    navigator.clipboard.writeText("taylla@fuckner.com.br");
    setCopied(true);
    toast({
      title: "E-mail copiado!",
      description: "O endereço de e-mail foi copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleAnimation.ref} className={`text-3xl md:text-5xl font-bold text-white mb-6 ${titleAnimation.className}`}>
            Vamos{" "}
            <span className="text-accent">
              transformar
            </span>{" "}
            seu negócio?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato e descubra como alcançar resultados extraordinários
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a 
                      href="mailto:taylla@fuckner.com.br"
                      className="text-lg text-accent hover:underline transition-all"
                    >
                      taylla@fuckner.com.br
                    </a>
                    <Button
                      onClick={copyEmail}
                      size="lg"
                      className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-600"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copiar e-mail
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                    <Button 
                      variant="default" 
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a 
                        href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        💬 Conversar Agora
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Section */}
          <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-center mb-8">Por que escolher a Fuckner?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">+14 anos de experiência comprovada</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">R$ 28+ milhões em vendas gerenciadas</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">Estratégias personalizadas, não fórmulas prontas</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">Foco em resultados mensuráveis</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;