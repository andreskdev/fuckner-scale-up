import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Copy, Check, Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().min(1, "Assunto é obrigatório").max(200),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000),
  phone: z.string().trim().max(20).optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const DEST_EMAIL = "leonlucassuckow@hotmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const titleAnimation = useScrollAnimation({ direction: "up" });

  const copyEmail = () => {
    navigator.clipboard.writeText(DEST_EMAIL);
    setCopied(true);
    toast({
      title: "E-mail copiado!",
      description: "O endereço de e-mail foi copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("_subject") as string,
      message: formData.get("message") as string,
      phone: (formData.get("phone") as string) || undefined,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${DEST_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          _subject: result.data.subject,
          message: result.data.message,
          phone: result.data.phone || "Não informado",
        }),
      });

      if (res.ok) {
        toast({ title: "Mensagem enviada! ✅", description: "Entraremos em contato em breve." });
        formRef.current?.reset();
      } else {
        throw new Error("Erro no envio");
      }
    } catch {
      toast({ title: "Erro ao enviar ❌", description: "Tente novamente ou entre em contato pelo WhatsApp.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleAnimation.ref} className={`text-3xl md:text-5xl font-bold text-white mb-6 ${titleAnimation.className}`}>
            Vamos{" "}
            <span className="text-accent">transformar</span>{" "}
            seu negócio?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato e descubra como alcançar resultados extraordinários
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Contact Form */}
            <Card className="lg:col-span-3 shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Envie sua mensagem</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="_honey" className="hidden" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Nome *</Label>
                      <Input id="name" name="name" placeholder="Seu nome" maxLength={100} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" placeholder="seu@email.com" maxLength={255} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input id="subject" name="_subject" placeholder="Assunto da mensagem" maxLength={200} />
                      {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Telefone (opcional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(41) 99999-9999" maxLength={20} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea id="message" name="message" placeholder="Escreva sua mensagem aqui..." rows={5} maxLength={2000} />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={sending}>
                    {sending ? (
                      <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Enviando...</>
                    ) : (
                      <><Send className="h-4 w-4 mr-2" /> Enviar Mensagem</>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Side cards */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <a href={`mailto:${DEST_EMAIL}`} className="text-lg text-accent hover:underline transition-all">
                        {DEST_EMAIL}
                      </a><br />
                      <Button onClick={copyEmail} size="lg" className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-600">
                        {copied ? <><Check className="h-4 w-4 mr-2" /> Copiado!</> : <><Copy className="h-4 w-4 mr-2" /> Copiar e-mail</>}
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
                      <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                      <Button variant="default" size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                        <a href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21" target="_blank" rel="noopener noreferrer">
                          💬 Conversar Agora
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Section */}
          <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-center mb-8">Por que escolher a Fuckner?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {["+14 anos de experiência comprovada", "R$ 28+ milhões em vendas gerenciadas", "Estratégias personalizadas, não fórmulas prontas", "Foco em resultados mensuráveis"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;