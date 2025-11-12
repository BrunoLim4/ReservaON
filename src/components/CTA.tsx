import { Button } from "@/components/ui/button";

const CTA = () => {
  const handleContact = () => {
    // Substitua pelo seu link do WhatsApp
    window.open('https://wa.me/5577988500087?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20ReservaON', '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsla(0,0%,100%,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Pronto para modernizar seus agendamentos?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Junte-se a centenas de negócios que já transformaram sua forma de agendar.
        </p>
        <Button 
          onClick={handleContact}
          variant="hero"
          size="xl"
          className="w-full sm:w-auto animate-fade-in-up"
        >
          Fale Conosco Agora
        </Button>
      </div>
    </section>
  );
};

export default CTA;
