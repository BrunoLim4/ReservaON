import platformMockup from "@/assets/platform-mockup.png";

const Explainer = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <img 
              src={platformMockup} 
              alt="Mockup da plataforma ReservaON mostrando dashboard com calendário, agendamentos e analytics" 
              className="w-full h-auto rounded-lg shadow-glow"
            />
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Centralize seus agendamentos com inteligência
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com o ReservaON, você centraliza seus agendamentos, automatiza notificações e garante a satisfação dos seus clientes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reduza cancelamentos, elimine conflitos de horários e ofereça uma experiência profissional que destaca seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explainer;
