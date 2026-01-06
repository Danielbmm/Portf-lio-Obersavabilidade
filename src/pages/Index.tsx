import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Líder Técnico em Observabilidade & Performance</title>
        <meta 
          name="description" 
          content="Especialista em monitoramento, observabilidade e desempenho de sistemas. Experiência com Zabbix, Grafana, Datadog, New Relic e automação com Python." 
        />
        <meta name="keywords" content="observabilidade, monitoramento, devops, sre, datadog, grafana, zabbix, new relic, python" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;