import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import fucknerLogo from "@/assets/fuckner_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#quem-sou", label: "Quem Sou" },
    { href: "#cases", label: "Cases" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  // add
  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setActiveLink(href);

    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <img 
                src={fucknerLogo} 
                alt="Fuckner Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-foreground hover:text-primary transition-smooth px-3 py-2 text-sm font-medium
                    after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 
                    after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-600 
                    hover:after:scale-x-100 hover:after:origin-left
                    ${activeLink === link.href ? 'after:scale-x-100 after:bg-accent-secondary text-accent-secondary' : ''}
                  `}
                  onClick={(e) => { // add e
                    e.preventDefault(); // add
                    handleLinkClick(link.href); // add
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              size="sm"
              asChild
            >
              <a 
                href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero escalar meu negócio
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href="https://wa.me/5541998317531?text=Quero%20impulsionar%20meus%20neg%C3%B3cios%20com%20voc%C3%AA%2C%20Tayla%20Fuckner%21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero escalar meu negócio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;