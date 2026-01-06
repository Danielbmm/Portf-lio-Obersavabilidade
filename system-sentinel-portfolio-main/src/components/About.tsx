import { useEffect, useRef, useState } from "react";
import { Terminal, ChevronRight } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const terminalLines = [
    { prompt: "$ whoami", response: "Líder Técnico de Observabilidade" },
    { prompt: "$ cat experiencia.txt", response: "Monitoramento 24x7 | Automação Python | Gestão de Incidentes" },
    { prompt: "$ echo $OBJETIVO", response: "Maximizar visibilidade, confiabilidade e performance" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Card */}
          <div 
            className={`relative ${isVisible ? 'animate-scale-in opacity-0' : 'opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-destructive rounded-full" />
                  <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="w-3 h-3 bg-primary rounded-full" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2">sobre-mim.sh</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                {terminalLines.map((line, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-2 text-primary">
                      <ChevronRight className="w-4 h-4" />
                      <span>{line.prompt}</span>
                    </div>
                    <p className="text-muted-foreground pl-6">{line.response}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-primary">
                  <ChevronRight className="w-4 h-4" />
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div 
            className={`space-y-6 ${isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'}`}
            style={{ animationDelay: '400ms' }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg border border-border">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">~/sobre</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transformando <span className="text-gradient">Dados</span> em Decisões
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou apaixonado por monitoramento, observabilidade e desempenho de sistemas, 
                com experiência prática em ferramentas como <span className="text-foreground">Zabbix</span>, 
                <span className="text-foreground"> Grafana</span>, <span className="text-foreground">Datadog</span> e 
                <span className="text-foreground"> New Relic</span>.
              </p>
              <p>
                Atuo garantindo a saúde e disponibilidade de ambientes críticos, além de liderar 
                iniciativas voltadas à implementação e evolução de práticas de observabilidade.
              </p>
              <p>
                Tenho sólida experiência em <span className="text-primary">automação de processos com Python</span>, 
                integração de alertas e painéis com plataformas de resposta a incidentes e colaboração 
                com equipes de desenvolvimento e infraestrutura.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-secondary/30 border border-border rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Operação Contínua</div>
              </div>
              <div className="bg-secondary/30 border border-border rounded-lg p-4">
                <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">SLA Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;