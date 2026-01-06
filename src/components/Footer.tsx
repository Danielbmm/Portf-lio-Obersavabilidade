import { Activity } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              observability.dev
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos os direitos reservados
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;