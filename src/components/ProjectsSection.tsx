import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "pentest-toolkit",
    desc: "Conjunto de ferramentas customizadas para testes de penetração e análise de vulnerabilidades",
    tech: ["Python", "Bash", "Nmap", "Metasploit"],
    link: "#",
  },
  {
    name: "rpa-automator",
    desc: "Framework de automação RPA para processos empresariais repetitivos",
    tech: ["Python", "Selenium", "RPA", "API"],
    link: "#",
  },
  {
    name: "hardware-hacking-lab",
    desc: "Projetos de engenharia reversa e análise de segurança em dispositivos IoT",
    tech: ["Arduino", "Firmware", "UART", "SPI"],
    link: "#",
  },
  {
    name: "cyber-posture-monitor",
    desc: "Dashboard de monitoramento de postura de segurança cibernética em tempo real",
    tech: ["Python", "Docker", "SIEM", "API"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <div className="space-y-4">
      {projects.map((project, i) => (
        <motion.a
          key={project.name}
          href={project.link}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="block border border-border rounded bg-card p-5 hover:border-primary/60 transition-all duration-300 group hover:border-glow"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold text-sm">
                ~/{project.name}
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-muted-foreground text-xs mb-3">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default ProjectsSection;
