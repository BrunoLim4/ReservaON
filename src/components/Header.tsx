import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Reserva<span className="text-muted-foreground">ON</span>
            </h1>
          </div>
          <Button onClick={scrollToContact} variant="default" size="sm" className="md:size-default">
            Entrar em Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
