"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Github, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  categories: string[];
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  screenshotUrl: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  duration: string;
  year: string;
  team?: string;
  status: "completed" | "in-progress" | "archived";
  metrics?: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: "janium",
    title: "Janium.ai",
    categories: ["ai", "fullstack"],
    description: "LinkedIn and email automation platform with a Zapier-like visual workflow builder and Rust actor backend.",
    longDescription:
      "Built the frontend dashboard and Rust backend for Janium.ai, a LinkedIn and email automation platform. The frontend features a Zapier-like visual interface for composing workflows, while the Rust backend exposes a GraphQL API and uses Rust actors to manage automation at scale. Includes Xpra-based browser automation for headless LinkedIn session management and interaction orchestration.",
    tech: ["React.js", "Next.js", "Rust", "GraphQL", "Xpra", "TypeScript", "FastAPI", "Python"],
    features: [
      "Zapier-like visual workflow builder for LinkedIn and email automation",
      "Rust backend with GraphQL API and actor-based concurrency",
      "Xpra-based headless browser automation for LinkedIn sessions",
      "Scalable interaction orchestration across accounts",
      "Real-time workflow execution and monitoring",
    ],
    screenshotUrl: "/images/janium-screenshot.png",
    liveUrl: "https://app.janium.ai/",
    duration: "3 months",
    year: "2026",
    team: "Solo contributor",
    status: "completed",
    metrics: [
      { label: "Platform", value: "LinkedIn + Email" },
      { label: "Backend", value: "Rust + GraphQL" },
    ],
  },
  {
    id: "remawt",
    title: "Remawt",
    categories: ["ai", "fullstack"],
    description: "Motion graphics video generation platform for automated product video creation using AI-driven pipelines.",
    longDescription:
      "Built a motion graphics video generation platform that automates product video creation end-to-end. Uses LangGraph-based orchestration for scene planning, asset generation, and video composition, with a Remotion rendering pipeline running on dedicated VPS nodes and BullMQ for reliable async rendering at scale.",
    tech: ["LangGraph", "FFmpeg", "Remotion", "BullMQ", "Node.js", "React.js", "TypeScript"],
    features: [
      "LangGraph-based orchestration for scene planning and asset generation",
      "Remotion-based rendering pipeline on dedicated VPS nodes",
      "BullMQ job queue for async video rendering, progress tracking, and scalability",
      "Automated product video creation from raw inputs",
      "Modular composition system for video scenes",
    ],
    screenshotUrl: "/images/remawt-screenshot.png",
    liveUrl: "https://remawt.com",
    duration: "Ongoing",
    year: "2025",
    team: "Solo project",
    status: "in-progress",
    metrics: [],
  },
  {
    id: "mentiq",
    title: "Mentiq Analytics",
    categories: ["fullstack", "ai"],
    description: "Full-stack analytics platform with high-performance Go backend, time-series storage, and AI churn prediction.",
    longDescription:
      "Solely architected and built a full-stack analytics platform with a high-performance Go backend for event ingestion and processing. Uses PostgreSQL with TimescaleDB for time-series analytics, a message queue for reliable buffering, lightweight React/Next.js SDKs, and an agentic real-time paid-user tracking system to reduce churn.",
    tech: ["Golang", "PostgreSQL", "TimescaleDB", "Redis", "React.js", "Next.js", "Claude SDK", "Kafka"],
    features: [
      "High-performance Go backend for event ingestion",
      "Time-series data storage with PostgreSQL + TimescaleDB",
      "Message queue system for reliable event processing",
      "Lightweight React.js and Next.js tracking SDKs",
      "Real-time analytics dashboard with funnels and behavior insights",
      "Agentic paid-user tracking and churn prediction models",
    ],
    screenshotUrl: "/mentiq/dash.png",
    githubUrl: "https://github.com/AslamSDM/mentiq",
    liveUrl: "https://mentiq-dashboard.vercel.app/",
    duration: "6 months",
    year: "2024",
    team: "Solo project",
    status: "completed",
    metrics: [
      { label: "Components", value: "Backend + Dashboard + SDK" },
      { label: "Database", value: "PostgreSQL + TimescaleDB" },
    ],
  },
  {
    id: "prawler",
    title: "Prawler",
    categories: ["ai", "fullstack"],
    description: "AI-powered stealth social media automation and outreach system with custom browser automation.",
    longDescription:
      "Built an AI-powered stealth social media automation and outreach system with a custom browser automation framework that uses computer vision to resist UI changes. Orchestrates cross-platform workflows for LinkedIn, X, and Reddit with email outreach, human-behavior simulation, proxy rotation, and encrypted cookie persistence.",
    tech: ["Python", "FastAPI", "Gemini", "Ollama", "nodriver", "Chrome Extensions"],
    features: [
      "CV-resistant custom browser automation framework",
      "Cross-platform automation for LinkedIn, X, and Reddit",
      "Integrated email outreach pipelines",
      "Human-behavior simulation and session management",
      "Residential proxy rotation and encrypted cookie persistence",
      "Unified FastAPI dashboard for pipeline monitoring",
    ],
    screenshotUrl: "/images/prawler-screenshot.png",
    duration: "Ongoing",
    year: "2025",
    team: "Solo project",
    status: "in-progress",
    metrics: [],
  },
  {
    id: "chatqik",
    title: "Chatqik",
    categories: ["ai", "fullstack"],
    description: "Multilingual customer support chatbot for WhatsApp and web using RAG and AI agent orchestration.",
    longDescription:
      "Built an intelligent, multilingual customer support chatbot for WhatsApp and web interfaces. Leverages Retrieval-Augmented Generation over product docs, a 7-step Mastra AI workflow with triage and guardrails, Whisper for speech-to-text, and supports English and Malayalam queries.",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Qdrant", "Mastra", "Vercel AI SDK", "Express.js", "Drizzle ORM", "Docker Compose"],
    features: [
      "Multilingual support for English and Malayalam",
      "RAG over product documentation",
      "7-step Mastra AI orchestration with triage and human escalation",
      "Whisper speech-to-text integration",
      "Persistent conversation history and rate limiting",
      "QWen3-TTS custom voice clone voice messages",
    ],
    screenshotUrl: "/images/chatqik-screenshot.png",
    liveUrl: "https://chatqik.com",
    duration: "3 months",
    year: "2025",
    team: "Solo project",
    status: "completed",
    metrics: [],
  },
  {
    id: "reelsfly",
    title: "ReelsFly",
    categories: ["fullstack", "ai"],
    description: "AI video generation platform with open-source models, Story Mode, and end-to-end audio/video synthesis.",
    longDescription:
      "Built an end-to-end AI video generation platform enabling users to create videos using open-source video generation and image editing models. Features Story Mode for automated storyboard generation, scene composition, video synthesis, and audio generation with real-time progress tracking.",
    tech: ["Next.js", "Python", "FFmpeg", "Stable Diffusion", "TTS", "React.js", "TypeScript"],
    features: [
      "Story Mode automating storyboard → scene → video → audio",
      "Multiple AI models for image editing, video generation, and TTS",
      "Intuitive dashboard for managing video projects",
      "Real-time generation progress tracking",
      "Open-source model integration pipeline",
    ],
    screenshotUrl: "/reelsfly.png",
    githubUrl: "https://github.com/AslamSDM/reelsfly",
    liveUrl: "https://reelsfly.com",
    duration: "4 months",
    year: "2024",
    team: "Solo project",
    status: "completed",
    metrics: [
      { label: "Models", value: "10+" },
      { label: "Framework", value: "Next.js + Python" },
    ],
  },
  {
    id: "cido-api",
    title: "Cido API Service",
    categories: ["fullstack", "devops"],
    description: "Secure Rust API service for crate uploads, sandboxed builds, and Kubernetes deployments.",
    longDescription:
      "Implemented a secure Rust backend API service that handles crate uploads, validates builds in isolated Docker containers, and manages deployments to Kubernetes. Includes JWT authentication, CI pipeline integration with private crate substitution, and GitLab registry publishing.",
    tech: ["Rust", "Axum", "Docker", "Kubernetes", "GitLab CI", "JWT"],
    features: [
      "Secure crate upload and validation API",
      "Isolated Docker build environments",
      "Kubernetes deployment management",
      "JWT-based authentication and protected routes",
      "CI pipeline replacing public deps with private crates",
      "REST endpoints for full crate deployment lifecycle",
    ],
    screenshotUrl: "/images/cido-screenshot.png",
    duration: "3 months",
    year: "2024",
    team: "Solo project",
    status: "completed",
    metrics: [],
  },
  {
    id: "predictx",
    title: "PredictX",
    categories: ["fullstack", "blockchain"],
    description: "Decentralized prediction market with real-time chat, wallet auth, and AI contract validation.",
    longDescription:
      "Developed PredictX as a comprehensive decentralized prediction market platform built with Next.js 15. Features real-time chat rooms, wallet-based authentication with Privy, and AI-powered contract validation.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Solidity", "Viem", "Zustand", "Socket.io", "PostgreSQL", "Prisma"],
    features: [
      "Create and bet on predictions with dynamic odds",
      "Real-time chat rooms for each prediction market",
      "Wallet-based authentication with Privy",
      "AI-powered contract validation and safety checks",
      "Blockscout integration for transaction transparency",
      "Infinite scroll discovery feed with preloading",
    ],
    screenshotUrl: "/predictx/WhatsApp Image 2025-10-25 at 19.55.03.jpeg",
    videoUrl: "/predictx/predictx.mp4",
    githubUrl: "https://github.com/AslamSDM/predictx",
    liveUrl: "https://predictx-mu.vercel.app/",
    duration: "4 months",
    year: "2024",
    team: "Solo project",
    status: "completed",
    metrics: [
      { label: "Network", value: "Sepolia Testnet" },
      { label: "Tech Stack", value: "Full-Stack + Blockchain" },
    ],
  },
  {
    id: "axton-protocol",
    title: "Axton Protocol",
    categories: ["fullstack", "blockchain"],
    description: "Anonymized OTC trading platform for blockchain assets with zero slippage and real yield.",
    longDescription:
      "Developed Axton Protocol as a comprehensive OTC trading platform that enables zero-slippage deals for blockchain assets. Features a modern Next.js frontend with animated backgrounds, WebSocket integration for real-time updates, and a Node.js backend.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "WebSocket", "Framer Motion", "Tailwind CSS", "Zustand"],
    features: [
      "Zero-slippage OTC trading for blockchain assets",
      "Anonymized transactions for privacy",
      "Real yield generation for users",
      "Custom clip-path components for modern UI",
      "Horizontal and vertical scroll experiences",
      "Real-time WebSocket updates",
    ],
    screenshotUrl: "/axton.png",
    githubUrl: "https://github.com/AslamSDM/axton",
    liveUrl: "https://axtonmarkets.com",
    duration: "3 months",
    year: "2024",
    team: "Solo project",
    status: "completed",
    metrics: [
      { label: "Volume", value: "$50M+" },
      { label: "Users", value: "25K+" },
    ],
  },
  {
    id: "litmex-protocol",
    title: "LITMEX Protocol",
    categories: ["fullstack", "blockchain"],
    description: "Solana-based DeFi protocol combining prediction markets, mini games, and AI betting agents.",
    longDescription:
      "Developed LITMEX Protocol, an innovative DeFi platform built on Solana that combines decentralized prediction markets with mini games and autonomous AI betting agents.",
    tech: ["Rust", "Solana", "Anchor Framework", "Next.js", "TypeScript", "Web3.js", "Serum DEX", "Metaplex"],
    features: [
      "Decentralized prediction markets with real-time odds",
      "AI-powered autonomous betting agents",
      "Addictive mini games with crypto rewards",
      "High-speed transactions on Solana blockchain",
      "Advanced risk management and liquidity pools",
    ],
    screenshotUrl: "/images/litmex-screenshot.png",
    githubUrl: "https://github.com/AslamSDM/litmex-protocol",
    liveUrl: "https://litmexpresale.com",
    duration: "6 months",
    year: "2025",
    team: "Solo project",
    status: "completed",
    metrics: [
      { label: "Presale Raised", value: "$500K+" },
      { label: "Active Users", value: "8K+" },
      { label: "Games Played", value: "100K+" },
    ],
  },
  {
    id: "shaboy-gaming",
    title: "Shaboy",
    categories: ["fullstack", "blockchain"],
    description: "Decentralized retro gaming platform with NFT game minting and AI-powered suggestions.",
    longDescription:
      "Led the development of Shaboy, a decentralized gaming platform that transforms retro games into tradeable NFTs. Built on Starknet using Cairo smart contracts with a browser-based React GBA console and Mistral 7B game suggestions.",
    tech: ["Cairo", "Starknet", "React", "Next.js", "TypeScript", "React GBA", "Mistral 7B", "Node.js"],
    features: [
      "NFT game minting and trading marketplace",
      "Browser-based retro gaming console using React GBA",
      "AI-powered game suggestion engine with Mistral 7B",
      "Smart contracts written in Cairo for Starknet",
      "Decentralized game ownership and trading",
    ],
    screenshotUrl: "/images/shaboy-screenshot.png",
    githubUrl: "https://github.com/AslamSDM/shaboy-platform",
    liveUrl: "https://shaboy.gaming",
    duration: "8 months",
    year: "2024",
    team: "Lead developer with team",
    status: "completed",
    metrics: [
      { label: "Award", value: "Most Promising Project - Starhack 2024" },
      { label: "Games Minted", value: "2,500+" },
      { label: "Active Players", value: "10K+" },
    ],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "blockchain", label: "Blockchain" },
  { id: "ai", label: "AI/ML" },
  { id: "fullstack", label: "Full Stack" },
  { id: "devops", label: "DevOps" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [playingVideo, setPlayingVideo] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  const statusLabel = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "Done";
      case "in-progress":
        return "In progress";
      case "archived":
        return "Archived";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <article className="notion-page fade-in">
        <div className="notion-page-icon">💼</div>

        <h1 className="text-[40px] leading-[1.2] font-bold tracking-tight text-foreground mt-6">
          Portfolio
        </h1>
        <p className="text-lg text-text-muted mt-2">
          Selected projects in AI automation, video generation, analytics, blockchain, and dev tooling.
        </p>

        <hr className="notion-divider" />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                activeFilter === filter.id
                  ? "bg-foreground text-background"
                  : "text-text-muted hover:bg-hover hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project list */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="w-full text-left notion-card group"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-full sm:w-40 h-28 shrink-0 rounded overflow-hidden border border-border bg-muted"
                >
                  <Image
                    src={project.screenshotUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play size={20} className="text-white fill-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-text-muted transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-text-muted shrink-0 mt-1">
                      {statusLabel(project.status)}
                    </span>
                  </div>

                  <p className="text-[15px] leading-[1.6] text-foreground mt-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span key={tech} className="notion-pill text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="text-xs text-text-muted">+{project.tech.length - 6} more</span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </article>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProject(null);
                setPlayingVideo({});
              }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-x-0 bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-t-lg sm:rounded-lg shadow-xl"
            >
              <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                  <p className="text-sm text-text-muted mt-1">
                    {selectedProject.duration} · {selectedProject.year} · {selectedProject.team}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setPlayingVideo({});
                  }}
                  className="p-1.5 hover:bg-hover rounded-md transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Media */}
                <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted"
                >
                  {selectedProject.videoUrl && playingVideo[selectedProject.id] ? (
                    <video
                      src={selectedProject.videoUrl}
                      controls
                      autoPlay
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <Image
                        src={selectedProject.screenshotUrl}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                      {selectedProject.videoUrl && (
                        <button
                          onClick={() =>
                            setPlayingVideo((prev) => ({ ...prev, [selectedProject.id]: true }))
                          }
                          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                        >
                          <div className="bg-background/90 rounded-full p-3">
                            <Play size={24} className="text-foreground fill-foreground" />
                          </div>
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Overview */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Overview</h3>
                  <p className="text-[15px] leading-[1.7] text-foreground">{selectedProject.longDescription}</p>
                </div>

                {/* Metrics */}
                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((metric) => (
                      <div key={metric.label} className="notion-callout !p-3">
                        <div className="text-lg font-semibold text-foreground">{metric.value}</div>
                        <div className="text-xs text-text-muted">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="notion-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Key Features</h3>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-[15px] leading-[1.6] text-foreground flex items-start gap-2">
                        <span className="text-text-muted mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-hover transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
