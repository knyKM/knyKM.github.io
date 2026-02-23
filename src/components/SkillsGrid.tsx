import { motion } from "framer-motion";
import { Shield, Bug, Cpu, GitBranch, Bot, Wifi } from "lucide-react";

const skills = [
  { icon: Shield, label: "Offensive Security", desc: "Pentest, Red Team, exploração de vulnerabilidades" },
  { icon: Bug, label: "Ethical Hacking", desc: "Bug bounty, análise de segurança, OWASP" },
  { icon: Cpu, label: "Hardware Hacking", desc: "IoT security, firmware analysis, engenharia reversa" },
  { icon: Bot, label: "RPA & Automação", desc: "Automação de processos, bots, scripts inteligentes" },
  { icon: Wifi, label: "Cybersecurity Posture", desc: "Hardening, monitoramento, gestão de riscos" },
  { icon: GitBranch, label: "Desenvolvimento", desc: "Python, Bash, ferramentas ofensivas e defensivas" },
];

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="group border border-border rounded bg-card p-5 hover:border-primary/60 transition-all duration-300 hover:border-glow"
        >
          <div className="flex items-center gap-3 mb-2">
            <skill.icon className="w-5 h-5 text-primary" />
            <h3 className="text-foreground font-semibold text-sm">{skill.label}</h3>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">{skill.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
