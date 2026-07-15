"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const experiences = [
  {
    company: "Janium.ai",
    role: "Software Developer",
    location: "US (Remote)",
    duration: "Jan 2026 – March 2026",
    achievements: [
      "Built frontend dashboard with a Zapier-like visual interface for LinkedIn and email automation workflows using React.js/Next.js.",
      "Developed Rust backend with GraphQL API and Rust actors for LinkedIn automation at scale.",
      "Integrated Xpra-based browser automation for headless LinkedIn session management and interaction orchestration.",
    ],
  },
  {
    company: "KingIT Solutions",
    role: "Software Engineer",
    location: "Hungary (Remote)",
    duration: "March 2024 – January 2026",
    achievements: [
      "Architected high-availability Rust backend systems utilizing Kubernetes for orchestration and horizontal scaling.",
      "Engineered a prediction market DApp using Chainlink oracles/automation with 99.9% uptime on EVM chains.",
      "Optimized smart contract gas estimation and consumption by 25% through storage layout restructuring.",
      "Built customer care call automation services using Python/FastAPI with conversational AI pipelines.",
      "Fine-tuned LLM models using PyTorch for domain-specific inference, improving response accuracy for client workflows.",
    ],
  },
  {
    company: "Onchain VC",
    role: "Software Engineer (Blockchain, AI)",
    location: "London (Remote)",
    duration: "Feb 2022 – Dec 2023",
    achievements: [
      "Spearheaded development of 15+ EVM DApps (interacting with ETH and ERC-20 tokens) using Next.js/React.js frontend and Node.js backend with PostgreSQL/Redis.",
      "Deployed AWS infrastructure supporting 50K+ monthly active users across staking/swapping protocols.",
      "Pioneered AI-DApp integration using LLM fine-tuning (LoRa/QLoRa) for 40% faster inference.",
      "Developed cross-chain Telegram bots (EVM/Solana/APTOS) handling 100k monthly requests.",
    ],
  },
  {
    company: "Pepped Ones",
    role: "Fullstack Developer",
    location: "Trivandrum",
    duration: "Jan 2019 – Jan 2022",
    achievements: [
      "Built scalable REST APIs with Express.js/Node.js and MongoDB serving 10K+ daily requests.",
      "Contributed to React.js-based frontends improving user engagement by 35%.",
      "Developed Web3 applications with Solidity smart contracts for decentralized finance platforms on EVM chains.",
      "Created and maintained blockchain indexing services for on-chain data analysis.",
    ],
  },
];

const education = {
  school: "College of Engineering Trivandrum",
  degree: "BTech Electrical and Electronics Engineering",
  detail: "CGPA 8.38 (First Class)",
  location: "Trivandrum, Kerala",
};

const skills: Record<string, string[]> = {
  Languages: ["Rust", "Go", "TypeScript", "JavaScript", "SQL", "Python", "C", "C++", "C#", "Huff"],
  "Web Technologies": [
    "React.js",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Express.js",
    "Flutter",
    "Actix",
    "Axum",
    "Redux",
    "Tailwind CSS",
    "Gin",
    "Remotion",
    "FastAPI",
    "Chrome Extensions",
  ],
  Blockchain: ["Solidity", "Foundry", "Hardhat", "Ethers.js", "EVM", "Solana", "ERC20", "Gas Estimation", "Web3.js"],
  "Backend & Databases": [
    "Rust (Actix, Axum)",
    "Go (Gin)",
    "Python (FastAPI)",
    "Node.js (NestJS, Express)",
    "PostgreSQL",
    "TimescaleDB",
    "MongoDB",
    "Redis",
    "Prisma",
    "Supabase",
    "BullMQ",
    "Kafka",
    "SQLite",
    "Qdrant",
    "Drizzle ORM",
  ],
  "DevOps & Tools": ["Docker", "Kubernetes", "Linux", "Git", "AWS", "GCP", "Azure", "Xpra", "SendGrid", "Apify"],
  "AI/ML": [
    "PyTorch",
    "LangChain",
    "LangGraph",
    "LlamaIndex",
    "Claude SDK",
    "LoRa",
    "Fine-tuning & Quantization",
    "Gemini",
    "Ollama",
    "Mastra",
    "Vercel AI SDK",
    "Whisper",
    "MLFlow",
    "ZenML",
    "Hugging Face",
  ],
};

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:aslamprpd@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/AslamSDM" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mohammed-aslam-saidummadath" },
  { icon: Phone, label: "Phone", href: "tel:+91-8281794564" },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Janium.ai",
    description: "LinkedIn and email automation platform with a Zapier-like visual workflow builder and Rust actor backend.",
    tech: ["React.js", "Next.js", "Rust", "GraphQL", "Xpra"],
    href: "https://app.janium.ai/",
  },
  {
    title: "Remawt",
    description: "Motion graphics video generation platform using LangGraph orchestration, Remotion rendering, and BullMQ job queues.",
    tech: ["LangGraph", "Remotion", "BullMQ", "Node.js"],
    href: "https://remawt.com",
  },
  {
    title: "Mentiq Analytics",
    description: "Full-stack analytics platform with Go backend, TimescaleDB time-series storage, and AI churn prediction.",
    tech: ["Go", "PostgreSQL", "TimescaleDB", "Next.js", "Claude SDK"],
    href: "https://mentiq-dashboard.vercel.app/",
  },
  {
    title: "Prawler",
    description: "AI-powered stealth social media automation and outreach system with CV-resistant browser automation.",
    tech: ["Python", "FastAPI", "Gemini", "nodriver"],
    href: "#",
  },
  {
    title: "Chatqik",
    description: "Multilingual customer support chatbot for WhatsApp and web using RAG and Mastra AI orchestration.",
    tech: ["Node.js", "Qdrant", "Mastra", "Vercel AI SDK"],
    href: "https://chatqik.com",
  },
  {
    title: "PredictX",
    description: "Decentralized prediction market with real-time chat, wallet auth, and AI contract validation.",
    tech: ["Next.js", "Solidity", "Viem", "Socket.io"],
    href: "https://predictx-mu.vercel.app/",
  },
  {
    title: "Axton Protocol",
    description: "Anonymized OTC trading platform for blockchain assets with zero slippage and real yield.",
    tech: ["Next.js", "Node.js", "WebSocket", "Framer Motion"],
    href: "https://axtonmarkets.com",
  },
];



export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="notion-page fade-in">
        {/* Hero */}
        <section className="pt-20">
          <div className="flex items-start gap-5">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border border-border bg-muted">
              <Image
                src="/images/aslam.jpeg"
                alt="Mohammed Aslam S"
                fill
                className="object-cover"
                priority
                sizes="80px"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-[34px] leading-[1.15] font-bold tracking-tight text-foreground">
                Mohammed Aslam S
              </h1>
              <p className="text-base text-text-muted mt-1">
                AI Engineer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mt-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="notion-pill gap-1.5 text-sm hover:text-text-muted transition-colors"
              >
                <link.icon size={14} />
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-80 transition-opacity"
            >
              View Portfolio →
            </Link>
            <a
              href="/Mohammed_Aslam_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium border border-border rounded-md hover:bg-hover transition-colors"
            >
              Download CV
            </a>
          </div>
        </section>

        <hr className="notion-divider" />

        {/* About */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2.5">About</h2>
          <p className="text-[15px] leading-[1.7] text-foreground">
            Full-stack engineer with deep experience in Rust, Go, TypeScript, Python, and blockchain
            development. I design and build scalable backends, AI-powered automation pipelines,
            DeFi applications, and developer tooling. Currently focused on agentic systems,
            video generation platforms, and high-throughput Rust services.
          </p>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-foreground">Selected Projects</h2>
            <Link href="/portfolio" className="notion-link text-sm">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block notion-card group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-text-muted transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm leading-[1.6] text-text-muted mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="notion-pill text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Experience</h2>
          <div className="space-y-3">
            {experiences.map((exp) => (
              <div key={exp.company} className="notion-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-text-muted">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-xs text-text-muted shrink-0">{exp.duration}</span>
                </div>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] leading-[1.55] text-foreground flex items-start gap-2"
                    >
                      <span className="text-text-muted mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Education</h2>
          <div className="notion-card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5">
              <div>
                <h3 className="font-semibold text-foreground">{education.school}</h3>
                <p className="text-sm text-foreground">{education.degree}</p>
              </div>
              <span className="text-xs text-text-muted shrink-0">{education.location}</span>
            </div>
            <p className="text-xs text-text-muted mt-1.5">{education.detail}</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Skills</h2>
          <div className="space-y-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-xs font-medium text-text-muted mb-1.5 uppercase tracking-wide">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillList.map((skill) => (
                    <span key={skill} className="notion-pill text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-2">Let&apos;s connect</h2>
          <p className="text-[15px] leading-[1.7] text-foreground">
            Open to new opportunities, collaborations, and interesting projects. Reach out via{" "}
            <a href="mailto:aslamprpd@gmail.com" className="notion-link">
              email
            </a>
            ,{" "}
            <a
              href="https://linkedin.com/in/mohammed-aslam-saidummadath"
              target="_blank"
              rel="noopener noreferrer"
              className="notion-link"
            >
              LinkedIn
            </a>
            , or{" "}
            <a
              href="https://github.com/AslamSDM"
              target="_blank"
              rel="noopener noreferrer"
              className="notion-link"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
