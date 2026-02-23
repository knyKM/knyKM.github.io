import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "auto-deploy",
    desc: "Pipeline de CI/CD automatizado com GitHub Actions e Docker",
    tech: ["Python", "Docker", "GitHub Actions"],
    link: "#",
  },
  {
    name: "web-scraper",
    desc: "Bot de coleta de dados com parsing inteligente e exportação",
    tech: ["Python", "BeautifulSoup", "Selenium"],
    link: "#",
  },
  {
    name: "infra-monitor",
    desc: "Dashboard de monitoramento de servidores em tempo real",
    tech: ["Node.js", "WebSocket", "React"],
    link: "#",
  },
  {
    name: "task-automator",
    desc: "Ferramenta CLI para automação de tarefas repetitivas",
    tech: ["Bash", "Python", "Cron"],
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
