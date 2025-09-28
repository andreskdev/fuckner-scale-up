import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#quem-sou", label: "Quem Sou" },
    { href: "#cases", label: "Cases" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold mb-4 text-accent">Fuckner</div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Consultoria especializada em marketing digital e crescimento de negócios. 
              Estratégias personalizadas para resultados excepcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Contato & Redes</h3>
            <div className="space-y-3">
              <div>
                <a
                  href="mailto:taylla@fuckner.com.br"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  taylla@fuckner.com.br
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/5541998317531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  (41) 9 9831-7531
                </a>
              </div>
              
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent transition-smooth"
                  aria-label="Drive de Mídia"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />
        
        <div className="pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Fuckner Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;