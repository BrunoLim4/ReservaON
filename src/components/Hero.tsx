import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
             bg-gradient-to-b from-black to-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(0,0%,100%,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Agende. Organize. <span className="text-muted-foreground">Cresça.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              O ReservaON é a sua agenda online inteligente, perfeita para qualquer negócio.
            </p>
            <Button 
              onClick={scrollToContact} 
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Experimente Agora
            </Button>
          </div>
          
          <div className="hidden lg:flex justify-center items-center animate-float">
            <img 
              src={heroIllustration} 
              alt="Interface moderna de agendamento ReservaON em múltiplos dispositivos" 
              className="w-full max-w-2xl h-auto shadow-glow rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
