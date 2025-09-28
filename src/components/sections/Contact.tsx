import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve para discutir como podemos ajudar seu negócio.",
      });
    }, 2000);
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Vamos conversar sobre seu projeto</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" required placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input id="phone" required placeholder="(41) 99999-9999" />
                  </div>
                  <div>
                    <Label htmlFor="segment">Segmento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="servicos">Serviços</SelectItem>
                        <SelectItem value="industria">Indústria</SelectItem>
                        <SelectItem value="varejo">Varejo</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nome da sua empresa" />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Conte-nos sobre seu negócio e objetivos..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Quero aumentar meu faturamento agora!"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Direct Contact */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Ou fale diretamente:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/10">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a 
                      href="mailto:taylla@fuckner.com.br"
                      className="text-accent hover:underline"
                    >
                      taylla@fuckner.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-success/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
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