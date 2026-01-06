import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block font-mono text-primary text-sm mb-4 px-4 py-1 bg-primary/10 rounded-full border border-primary/20">
            &lt;contact /&gt;
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Meus <span className="text-gradient">Contatos</span>
          </h2>

          {/* Contact Card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col items-center gap-6">
              {/* Email */}
              <a 
                href="mailto:danielbarbosamariano@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="p-3 bg-secondary border border-border rounded-xl group-hover:border-primary/50 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm md:text-base">danielbarbosamariano@gmail.com</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+5511940140921"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="p-3 bg-secondary border border-border rounded-xl group-hover:border-primary/50 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm md:text-base">(11) 94014-0921</span>
              </a>

              {/* Divider */}
              <div className="flex items-center gap-4 w-full max-w-xs my-2">
                <div className="flex-1 h-px bg-border" />
                <span className="text-muted-foreground text-sm">redes</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Danielbmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-secondary border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-barbosa-mariano-21a034261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-secondary border border-border rounded-xl hover:border-accent/50 hover:bg-secondary/80 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;