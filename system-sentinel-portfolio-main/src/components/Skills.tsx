import { useEffect, useRef, useState } from "react";
import { 
  Activity, 
  BarChart3, 
  Bell, 
  Code2, 
  Database, 
  GitBranch,
  Layers,
  LineChart,
  Search,
  Server,
  Shield,
  Zap
} from "lucide-react";

const tools = [
  { name: "Zabbix", icon: Activity, description: "Monitoramento de infraestrutura" },
  { name: "Grafana", icon: LineChart, description: "Visualização de métricas" },
  { name: "Datadog", icon: BarChart3, description: "Observabilidade unificada" },
  { name: "New Relic", icon: Search, description: "APM e monitoramento" },
  { name: "Python", icon: Code2, description: "Automação e scripts" },
  { name: "Prometheus", icon: Database, description: "Coleta de métricas" },
];

const expertise = [
  { 
    title: "Observabilidade", 
    icon: Layers,
    description: "Implementação de práticas de observabilidade corporativa com métricas, logs e traces."
  },
  { 
    title: "Automação", 
    icon: GitBranch,
    description: "Automação de processos e integração de alertas com plataformas de resposta a incidentes."
  },
  { 
    title: "Incidentes", 
    icon: Bell,
    description: "Coordenação de monitoramento proativo e resposta a incidentes em operação 24x7."
  },
  { 
    title: "Performance", 
    icon: Zap,
    description: "Identificação de causas raiz e melhorias contínuas de desempenho."
  },
  { 
    title: "Infraestrutura", 
    icon: Server,
    description: "Garantia de saúde e disponibilidade de ambientes críticos."
  },
  { 
    title: "Segurança", 
    icon: Shield,
    description: "Monitoramento de segurança e compliance dos sistemas."
  },
];

const Skills = () => {
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

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-primary text-sm mb-4 px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
            &lt;skills /&gt;
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ferramentas & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack de ferramentas e competências desenvolvidas ao longo da carreira
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:glow-primary cursor-default ${
                isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <tool.icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">{tool.name}</h3>
              <p className="text-xs text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-500 hover:glow-accent ${
                isVisible ? 'animate-slide-in-left opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;