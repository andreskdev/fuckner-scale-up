import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BannerInitial } from "@/components/sections/BannerInitial";



const Index = () => {

  const casesSectionRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerInitial/>
      <Hero casesSectionRef={casesSectionRef}/>
      <Cases casesSectionRef={casesSectionRef}/>
      <About />
      <Services />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
};

export default Index;
