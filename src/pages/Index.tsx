import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain";
import TypingEffect from "@/components/TypingEffect";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsSection from "@/components/ProjectsSection";
import { Github, Mail, Linkedin, Shield, ChevronRight } from "lucide-react";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleTypingComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative scanline-overlay">
      <MatrixRain />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        {/* Header / Hero */}
        <header className="mb-16">
          <div className="text-muted-foreground text-xs mb-4">
            <span className="text-primary">guest@terminal</span>:~$ cat about.txt
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-glow mb-4 leading-tight">
            <TypingEffect
              text="Kauã Morateli"
              speed={70}
              onComplete={handleTypingComplete}
            />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-medium">
                CyberSecurity | Ethical Hacker | RPA Developer
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-6">
              <span className="text-primary">{">"}</span> Profissional de segurança ofensiva e automação.
              Especializado em Ethical Hacking, Offensive Security, Hardware Hacking,
              RPA e Cybersecurity Posture. Certificado DCPT.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/knyKM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kauamorateli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:kaua@morateli.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </motion.div>
        </header>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <ChevronRight className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">
              ls ~/skills/
            </h2>
          </div>
          <SkillsGrid />
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <ChevronRight className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">
              ls ~/projects/
            </h2>
          </div>
          <ProjectsSection />
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground text-xs">
            <span className="text-primary">$</span> echo "Feito com{" "}
            <span className="text-accent text-glow-accent">código</span> e{" "}
            <span className="text-primary text-glow">café</span>"
          </p>
          <p className="text-muted-foreground/50 text-[10px] mt-2">
            © {new Date().getFullYear()} // all systems operational
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
