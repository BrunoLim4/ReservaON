import { Mail, MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-2">
              Reserva<span className="text-muted-foreground">ON</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              © 2025 ReservaON. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/5577988500087" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-accent/80 transition-smooth"
              aria-label="Contato via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-accent-foreground" />
            </a>
            <a 
              href="mailto:contato@reservaon.com" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-accent/80 transition-smooth"
              aria-label="Contato via E-mail"
            >
              <Mail className="w-5 h-5 text-accent-foreground" />
            </a>
            <a 
              href="https://www.instagram.com/bruno_liim4?igsh=a2wxNXZlZnk3a2tx&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-accent/80 transition-smooth"
              aria-label="Siga no Instagram"
            >
              <Instagram className="w-5 h-5 text-accent-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
