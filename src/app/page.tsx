"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Dynamically import Spline to avoid SSR issues
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Portfolio = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
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
    },
    {
      title: "Aegis AI",
      tech: "Next.js, Rust, Axum, GPT-4, Postgres, Redis",
      description:
        "Designed Rust backend for AI auditing system with parallelized queues for code analysis & PDF report generation. Architected audit workflows using GPT-4 for partial/full code reviews and Redis-based task management.",
    },
    {
      title: "Jupiter Lending (Venus Fork)",
      tech: "Next.js, Solidity, React Charts, GraphQL",
      description:
        "Built DeFi lending DApp with Venus Protocol smart contracts and Next.js frontend for liquidity tracking. Developed GraphQL API for real-time market data & interactive React Charts for financial visualizations.",
      demo: "https://jupyter-omega.vercel.app/",
    },
    {
      title: "ETD DApp",
      tech: "Next.js, Solidity",
      description:
        "Deployed perpetual DEX using GMX V2 contracts enabling leveraged long/short positions. Optimized smart contract interactions for margin trading with 90% gas efficiency vs base implementation.",
      demo: "https://edt-bot-7prm-1tcwo4iys-edtonchain.vercel.app/",
      github: "https://github.com/AslamSDM/jupyter",
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
    if (sectionId === "portfolio") {
      router.push("/portfolio");
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground grain-texture noise-texture transition-colors duration-300">
      {/* Navigation */}

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Spline 3D Background */}
        <div className="spline-container bg-black">
          {/* @ts-ignore - Spline component props */}
          <Spline scene="https://prod.spline.design/VUs1kl9EKK-YhweW/scene.splinecode" />
        </div>

        {/* Content Overlay */}
        <motion.div
          className="absolute inset-x-0 bottom-[10px] md:bottom-32 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="flex justify-center px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 py-3 overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="flex items-center gap-2 relative z-10">
                  <Mail size={18} />
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Briefcase className="inline-block mr-3 mb-1 text-accent" />
            Professional Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className=" rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg md:text-xl font-semibold mb-1 text-white">
                      {exp.company}
                    </h4>
                    <p className="text-white/80">{exp.location}</p>
                  </div>
                  <div className="text-accent font-medium mt-2 md:mt-0">
                    {exp.duration}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">▸</span>
                      <span className="text-white/90">{achievement}</span>
                    </li>
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
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Code className="inline-block mr-3 mb-1 text-accent" />
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className=" rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project?.github && (
                      <motion.a
                        href={project?.github}
                        className="text-accent hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {project?.demo && (
                      <motion.a
                        href={project.demo}
                        className="text-accent hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
                <p className="text-accent text-sm mb-4 font-medium">
                  {project.tech}
                </p>
                <p className="text-white/90 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
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
                className=" rounded-xl p-6 hover:bg-white/10 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-accent mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-accent/20 text-white px-3 py-1 rounded-full text-sm border border-accent/30 hover:bg-accent/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
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
          {/* Avatar */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70 rounded-full blur-md opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
                <Image
                  src="/images/aslam.jpeg"
                  alt="Mohammed Aslam - Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent hover:from-accent/10 hover:to-transparent transition-all duration-300"></div>
              </div>
              {/* Floating ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
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
              className="flex flex-col items-center gap-3 p-6  rounded-xl hover:bg-white/10 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Phone size={24} className="text-accent" />
              </motion.div>
              <span className="text-white/90 group-hover:text-accent transition-colors font-medium">
                +91-8281794564
              </span>
            </motion.a>

            <motion.a
              href="mailto:aslamprpd@gmail.com"
              className="flex flex-col items-center gap-3 p-6  rounded-xl hover:bg-white/10 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Mail size={24} className="text-accent" />
              </motion.div>
              <span className="text-white/90 group-hover:text-accent transition-colors font-medium">
                Email
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/AslamSDM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6  rounded-xl hover:bg-white/10 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Github size={24} className="text-accent" />
              </motion.div>
              <span className="text-white/90 group-hover:text-accent transition-colors font-medium">
                GitHub
              </span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/mohammed-aslam-saidummadath"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6  rounded-xl hover:bg-white/10 transition-all duration-300 group shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <Linkedin size={24} className="text-accent" />
              </motion.div>
              <span className="text-white/90 group-hover:text-accent transition-colors font-medium">
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
