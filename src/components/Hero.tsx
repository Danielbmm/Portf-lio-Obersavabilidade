import { useEffect, useState } from "react";
import profileImage from "@/assets/profile.png";
import { Activity, Terminal, Zap, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Observabilidade & Performance";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow">
              <img 
                src={profileImage} 
                alt="Daniel Barbosa Mariano - Líder Técnico em Observabilidade" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-mono text-primary">ONLINE</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Terminal header */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">~/portfolio</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Líder Técnico em</span>
              <br />
              <span className="text-gradient">{displayText}</span>
              <span className="text-primary animate-pulse">_</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Transformando dados em insights estratégicos. Especialista em monitoramento, 
              automação e gestão de incidentes 24x7.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-foreground">
                <Activity className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-mono text-sm">High Availability</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#about" 
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:glow-primary"
              >
                <span className="relative z-10">Conhecer Mais</span>
                <ChevronDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-secondary border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;