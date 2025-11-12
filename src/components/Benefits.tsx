import { Calendar, Smartphone, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Agendamento automático e fácil",
    description: "Simplifique a marcação de horários com um sistema intuitivo e automatizado."
  },
  {
    icon: Smartphone,
    title: "Controle total na palma da mão",
    description: "Gerencie seus agendamentos de qualquer lugar, a qualquer momento."
  },
  {
    icon: Users,
    title: "Perfeito para todos os nichos",
    description: "Adaptável para clínicas, salões, academias, escritórios e muito mais."
  },
  {
    icon: Clock,
    title: "Economize tempo e reduza erros",
    description: "Automatize notificações e elimine conflitos de horários."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-lg bg-card border border-border hover:border-accent transition-smooth shadow-card hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary group-hover:bg-accent transition-smooth">
                  <Icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
