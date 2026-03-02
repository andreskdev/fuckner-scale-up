import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Copy, Check, Send, Loader2, ArrowRight } from "lucide-react";
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

const DEST_EMAIL = "taylla@fucker.com.br";

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
      description: "O endereço foi copiado para a área de transferência.",
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
    <section id="contato" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleAnimation.ref} className={`text-3xl md:text-5xl font-bold text-white mb-4 ${titleAnimation.className}`}>
            Vamos{" "}
            <span className="text-accent">transformar</span>{" "}
            seu negócio?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Entre em contato e descubra como alcançar resultados extraordinários
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 mb-12">
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nome *"
                  maxLength={100}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:border-accent focus:ring-accent/30"
                />
                {errors.name && <p className="text-xs text-red-300 mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail *"
                  maxLength={255}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:border-accent focus:ring-accent/30"
                />
                {errors.email && <p className="text-xs text-red-300 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  id="subject"
                  name="_subject"
                  placeholder="Assunto *"
                  maxLength={200}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:border-accent focus:ring-accent/30"
                />
                {errors.subject && <p className="text-xs text-red-300 mt-1">{errors.subject}</p>}
              </div>
              <div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Telefone (opcional)"
                  maxLength={20}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus:border-accent focus:ring-accent/30"
                />
              </div>
            </div>

            <div>
              <Textarea
                id="message"
                name="message"
                placeholder="Sua mensagem *"
                rows={5}
                maxLength={2000}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none focus:border-accent focus:ring-accent/30"
              />
              {errors.message && <p className="text-xs text-red-300 mt-1">{errors.message}</p>}
            </div>

            <div className="flex justify-center pt-2">
              <Button type="submit" variant="cta" size="default" className="px-8" disabled={sending}>
                {sending ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Enviando...</>
                ) : (
                  <><Send className="h-4 w-4 mr-2" /> Enviar Mensagem</>
                )}
              </Button>
            </div>
          </form>

          {/* Quick contact row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
            >
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Mail className="h-4 w-4 text-white/60" />}
              <span className="text-sm text-white/80 group-hover:text-white transition-colors">{DEST_EMAIL}</span>
              {!copied && <Copy className="h-3.5 w-3.5 text-white/40" />}
            </button>

            <a
              href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366]/15 border border-[#25D366]/25 backdrop-blur-sm hover:bg-[#25D366]/25 transition-all duration-300"
            >
              <span className="text-sm text-[#25D366] font-medium">WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#25D366]/70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;