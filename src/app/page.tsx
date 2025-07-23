"use client";
import React, { useState, useEffect, Suspense } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Download,
  Award,
  Code,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

// Dynamically import Spline to avoid SSR issues
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      company: "KingIT Solutions",
      role: "Software Engineer",
      location: "Hungary (Remote)",
      duration: "March 2024 – Present",
      achievements: [
        "Architected high-availability Rust backend systems with Kubernetes orchestration and horizontal scaling",
        "Engineered prediction market DApp using Chainlink oracles/automation with 99.9% uptime",
        "Optimized smart contract gas consumption by 25% through storage layout restructuring",
      ],
    },
    {
      company: "Onchain VC",
      role: "Software Engineer (Blockchain, AI)",
      location: "London (Remote)",
      duration: "Feb 2022 – March 2024",
      achievements: [
        "Spearheaded development of 15+ EVM DApps using Next.js/Nest.js with PostgreSQL/Redis backend",
        "Deployed AWS infrastructure supporting 50K+ MAU across bridging/swapping/LSD protocols",
        "Pioneered AI-DApp integration using LLM fine-tuning (LoRa/QLoRa) for 40% faster inference",
        "Developed cross-chain Telegram bots (EVM/Solana/APTOS) handling 1M+ monthly requests",
      ],
    },
    {
      company: "Pepped Ones",
      role: "Fullstack Developer",
      location: "Trivandrum",
      duration: "Jan 2021 – Jan 2022",
      achievements: [
        "Built scalable REST APIs with Express.js/MongoDB serving 10K+ daily requests",
        "Contributed to React-based frontends improving user engagement by 35%",
      ],
    },
  ];

  const projects = [
    {
      title: "Cido API Service",
      tech: "Rust, Axum, Docker, Kubernetes",
      description:
        "Implemented a secure API service that handles crate uploads, validates builds in isolated Docker containers, and manages deployments to Kubernetes. Built authentication system with JWT tokens and protected routes for managing deployments of Cido maps.",
      github: "#",
      demo: "#",
    },
    {
      title: "Aegis AI",
      tech: "Next.js, Rust, Axum, GPT-4, Postgres, Redis",
      description:
        "Designed Rust backend for AI auditing system with parallelized queues for code analysis & PDF report generation. Architected audit workflows using GPT-4 for partial/full code reviews and Redis-based task management.",
      github: "#",
      demo: "#",
    },
    {
      title: "Jupiter Lending (Venus Fork)",
      tech: "Next.js, Solidity, React Charts, GraphQL",
      description:
        "Built DeFi lending DApp with Venus Protocol smart contracts and Next.js frontend for liquidity tracking. Developed GraphQL API for real-time market data & interactive React Charts for financial visualizations.",
      github: "#",
      demo: "#",
    },
    {
      title: "ETD DApp",
      tech: "Next.js, Solidity",
      description:
        "Deployed perpetual DEX using GMX V2 contracts enabling leveraged long/short positions. Optimized smart contract interactions for margin trading with 90% gas efficiency vs base implementation.",
      github: "#",
      demo: "#",
    },
  ];

  const portfolioItems = [
    {
      title: "Enterprise DeFi Platform",
      category: "Blockchain",
      image: "/api/placeholder/400/250",
      description: "Full-stack DeFi platform with automated market making",
      tech: ["Solidity", "Next.js", "Web3.js"],
    },
    {
      title: "AI-Powered Code Auditor",
      category: "AI/ML",
      image: "/api/placeholder/400/250",
      description: "Automated smart contract security analysis tool",
      tech: ["Python", "TensorFlow", "Rust"],
    },
    {
      title: "Cross-Chain Bridge",
      category: "Blockchain",
      image: "/api/placeholder/400/250",
      description: "Secure asset transfer between multiple blockchains",
      tech: ["Solidity", "TypeScript", "Chainlink"],
    },
    {
      title: "Real-time Analytics Dashboard",
      category: "Full-Stack",
      image: "/api/placeholder/400/250",
      description: "High-performance dashboard for crypto trading data",
      tech: ["React", "Node.js", "WebSocket"],
    },
  ];

  const skills = {
    Languages: [
      "Rust",
      "TypeScript",
      "JavaScript",
      "Python",
      "Solidity",
      "Go",
      "C++",
      "SQL",
      "Move",
      "Cairo",
      "Huff",
    ],
    Frontend: ["Next.js", "React", "Redux", "Tailwind CSS", "Flutter"],
    Backend: ["Nest.js", "Node.js", "Express", "Axum", "Actix"],
    Blockchain: [
      "Ethereum",
      "Solana",
      "Chainlink",
      "Hardhat",
      "Foundry",
      "Ethers.js",
    ],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    DevOps: ["Docker", "Kubernetes", "AWS", "GCP", "Linux", "Git"],
    "AI/ML": ["LLMs", "Machine Learning", "Deep Learning", "Langchain", "DSPy"],
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const FloatingParticles = () => (
    <div className="floating-particles">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground grain-texture noise-texture transition-colors duration-300">
      <FloatingParticles />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
            ></motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "Home",
                "Experience",
                "Projects",
                "Portfolio",
                "Skills",
                "Contact",
              ].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-accent transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.button>
              ))}

              {/* Theme Toggle */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden glass-effect rounded-lg mt-2 p-4 overflow-hidden"
              >
                {[
                  "Home",
                  "Experience",
                  "Projects",
                  "Portfolio",
                  "Skills",
                  "Contact",
                ].map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Spline 3D Background */}
        <div className="spline-container">
          <Suspense
            fallback={
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black animate-pulse" />
            }
          >
            <Spline scene="https://prod.spline.design/VUs1kl9EKK-YhweW/scene.splinecode" />
          </Suspense>
        </div>

        {/* Content Overlay */}
        <motion.div
          className="content-overlay text-center px-4 max-w-4xl mx-auto absolute bottom-0 top-[300px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="bg-foreground text-background hover:bg-accent px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover-lift"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 rounded-full font-semibold transition-all duration-200 hover-lift"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>

            <motion.button
              className="border-2 border-accent text-accent hover:bg-accent hover:text-background px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 justify-center hover-lift"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} className="text-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Briefcase className="inline-block mr-3 mb-1" />
            Professional Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 md:p-8 hover:bg-muted/50 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg md:text-xl font-semibold mb-1 text-foreground">
                      {exp.company}
                    </h4>
                    <p className="text-foreground/70">{exp.location}</p>
                  </div>
                  <div className="text-accent font-medium mt-2 md:mt-0">
                    {exp.duration}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-accent mr-3 mt-1">▸</span>
                      <span className="text-foreground/80">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Code className="inline-block mr-3 mb-1" />
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 md:p-8 hover:bg-muted/50 transition-all duration-300 group shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      className="text-accent hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="text-accent hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                <p className="text-accent text-sm mb-4 font-medium">
                  {project.tech}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="inline-block mr-3 mb-1" />
            Portfolio Showcase
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="group glass-effect rounded-xl overflow-hidden hover:bg-muted/50 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden bg-muted h-48 md:h-64 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl text-accent/20">
                    {item.category === "Blockchain"
                      ? "₿"
                      : item.category === "AI/ML"
                      ? "🤖"
                      : item.category === "Full-Stack"
                      ? "⚡"
                      : "🚀"}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full text-accent font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 hover:bg-muted/50 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-accent mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to build something amazing together? I&apos;m always
            interested in discussing new opportunities and innovative projects.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+91-8281794564"
              className="flex flex-col items-center gap-3 p-6 glass-effect rounded-xl hover:bg-muted/50 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Phone size={24} className="text-accent" />
              </motion.div>
              <span className="text-foreground/80 group-hover:text-accent transition-colors font-medium">
                +91-8281794564
              </span>
            </motion.a>

            <motion.a
              href="mailto:aslamprpd@gmail.com"
              className="flex flex-col items-center gap-3 p-6 glass-effect rounded-xl hover:bg-muted/50 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Mail size={24} className="text-accent" />
              </motion.div>
              <span className="text-foreground/80 group-hover:text-accent transition-colors font-medium">
                Email
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/AslamSDM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 glass-effect rounded-xl hover:bg-muted/50 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Github size={24} className="text-accent" />
              </motion.div>
              <span className="text-foreground/80 group-hover:text-accent transition-colors font-medium">
                GitHub
              </span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/mohammed-aslam-saidummadath"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 glass-effect rounded-xl hover:bg-muted/50 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Linkedin size={24} className="text-accent" />
              </motion.div>
              <span className="text-foreground/80 group-hover:text-accent transition-colors font-medium">
                LinkedIn
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* Social Links Section */}
    </div>
  );
};

export default Portfolio;
