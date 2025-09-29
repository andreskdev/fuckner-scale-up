import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useRef } from "react";



const Index = () => {

  const casesSectionRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero casesSectionRef={casesSectionRef}/>
      <Services />
      <About />
      <Cases casesSectionRef={casesSectionRef}/>
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
