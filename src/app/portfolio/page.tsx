"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Calendar,
  Users,
  Shield,
  Globe,
  Code2,
  Cpu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  categories: string[];
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  screenshotUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  duration: string;
  year: string;
  team?: string;
  status: "completed" | "in-progress" | "archived";
  metrics?: {
    label: string;
    value: string;
  }[];
}


const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  const projects: Project[] = [
    {
      id: "mentiq",
      title: "MentIQ - SaaS Analytics & Retention Platform",
      categories: ["fullstack"],
      description:
        "A comprehensive analytics and retention platform for SaaS products, featuring user behavior tracking, session recordings, A/B testing, and churn prediction.",
      longDescription:
        "Built MentIQ as a full-stack analytics platform to help SaaS companies track user engagement, reduce churn, and boost retention. The platform consists of a Go/Gin backend with PostgreSQL/TimescaleDB, a Next.js 16 dashboard with App Router, and a TypeScript SDK for React/Next.js applications. Features include real-time analytics, session replay, funnel analysis, cohort tracking, and AI-powered churn prediction. Integrated with Stripe for revenue tracking and AWS/R2 for session recording storage.",
      tech: [
        "Go",
        "Gin",
        "Next.js 16",
        "TypeScript",
        "PostgreSQL",
        "TimescaleDB",
        "React",
        "NextAuth.js",
        "Stripe",
        "AWS/R2",
      ],
      features: [
        "Real-time user behavior and engagement tracking",
        "Session recordings and replay functionality",
        "A/B testing and experimentation framework",
        "Churn prediction with AI/ML models",
        "Cohort analysis and retention metrics",
        "Revenue analytics with Stripe integration",
        "TypeScript SDK for easy integration",
        "Dashboard with modern React UI",
      ],
      screenshotUrl: "/images/mentiq-screenshot.png",
      githubUrl: "https://github.com/AslamSDM/mentiq",
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
      id: "reelsfly",
      title: "ReelsFly - AI Video Generation Platform",
      categories: ["fullstack", "ai"],
      description:
        "A comprehensive AI video generation platform featuring 26+ video models with real-time progress streaming, dynamic parameters, and enhanced model information.",
      longDescription:
        "Developed ReelsFly as a cutting-edge AI video generation platform using Next.js 15 and Replicate's AI models. The platform seamlessly fuses creativity and technology to deliver stunning AI-generated videos with real-time progress updates. Features include 26+ curated video models (Luma Dream Machine, RunwayML Gen-3, Stable Video Diffusion, etc.), dynamic parameter generation based on OpenAPI schemas, live pricing information, example galleries, and Server-Sent Events for real-time progress streaming. Built with React 19, TypeScript, Radix UI for accessibility, and optimized with static model caching and progressive loading.",
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Replicate API",
        "Radix UI",
        "Tailwind CSS",
        "Server-Sent Events",
        "OpenAPI",
      ],
      features: [
        "26+ AI video generation models including Luma Dream Machine and RunwayML Gen-3",
        "Real-time progress streaming with Server-Sent Events",
        "Dynamic parameter forms auto-generated from model schemas",
        "Live pricing information and usage statistics",
        "Example galleries with sample inputs and outputs",
        "Rich model cards with comprehensive documentation",
        "Background video processing with progress visualization",
        "Responsive UI with Radix UI components",
      ],
      screenshotUrl: "/images/reelsfly-screenshot.png",
      githubUrl: "https://github.com/AslamSDM/reelsfly",
      duration: "2 months",
      year: "2024",
      team: "Solo project",
      status: "completed",
      metrics: [
        { label: "AI Models", value: "26+" },
        { label: "Framework", value: "Next.js 15 + React 19" },
      ],
    },
    {
      id: "predictx",
      title: "PredictX - Decentralized Prediction Market",
      categories: ["fullstack", "blockchain"],
      description:
        "A decentralized prediction market platform with real-time chat, blockchain integration, and AI-powered contract validation on Ethereum.",
      longDescription:
        "Developed PredictX as a comprehensive decentralized prediction market platform built with Next.js 15. The platform enables users to create, bet on, and discuss predictions with full blockchain transparency through Blockscout integration. Features real-time chat rooms for each prediction, wallet-based authentication with Privy, and AI-powered contract validation. Built with React 19, Zustand state management, Socket.io for real-time communication, and Viem for blockchain interactions. Includes smart contracts deployed on Sepolia testnet with extensible multi-chain architecture.",
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Solidity",
        "Viem",
        "Zustand",
        "Socket.io",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Framer Motion",
      ],
      features: [
        "Create and bet on predictions with dynamic odds",
        "Real-time chat rooms for each prediction market",
        "Wallet-based authentication with Privy",
        "AI-powered contract validation and safety checks",
        "Blockscout integration for transaction transparency",
        "Infinite scroll discovery feed with preloading",
        "Mobile-responsive design",
        "Multi-chain support architecture",
      ],
      screenshotUrl: "/images/predictx-screenshot.png",
      githubUrl: "https://github.com/AslamSDM/predictx",
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
      id: "margraf",
      title: "Margraf - Financial Dynamic Knowledge Graph",
      categories: ["ai"],
      description:
        "A sophisticated Financial Dynamic Knowledge Graph modeling the global economy with real-time updates using AI, web scraping, and sentiment analysis.",
      longDescription:
        "Built Margraf as an innovative prototype that models the global economy as a graph of Nations, Industries, Corporations, and Raw Materials, linked by trade and supply chain relationships. The system uses recursive RAG (Retrieval-Augmented Generation) to discover entities via Wikipedia and search engines, monitors RSS feeds for breaking news, and analyzes social media sentiment using LLMs. Features a real-time WebSocket dashboard for visualizing economic shocks propagating through the graph. Built with Go, featuring thread-safe concurrency with sync.RWMutex, Google Gemini API for AI reasoning, and automated market data updates from Yahoo Finance.",
      tech: [
        "Go",
        "Google Gemini API",
        "WebSocket",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "RAG",
        "Web Scraping",
        "Graph Algorithms",
      ],
      features: [
        "Dynamic knowledge graph of global economic entities",
        "Recursive RAG-based entity discovery from Wikipedia",
        "Real-time news monitoring and economic shock propagation",
        "Social media sentiment analysis with LLMs",
        "WebSocket dashboard for live graph visualization",
        "Automated stock price updates from Yahoo Finance",
        "Thread-safe concurrent processing",
        "Economic simulation engine with shock propagation",
      ],
      screenshotUrl: "/images/margraf-screenshot.png",
      githubUrl: "https://github.com/AslamSDM/margraf",
      duration: "3 months",
      year: "2024",
      team: "Solo project",
      status: "completed",
      metrics: [
        { label: "Type", value: "AI + Knowledge Graph" },
        { label: "LLM", value: "Google Gemini" },
      ],
    },
    {
      id: "axton-protocol",
      title: "Axton Protocol - Anonymized OTC Platform",
      categories: ["fullstack", "blockchain"],
      description:
        "A zero-slippage Over-The-Counter trading platform for blockchain assets with anonymized transactions, real-time yield generation, and a unified DeFi ecosystem.",
      longDescription:
        "Developed Axton Protocol as a comprehensive OTC trading platform that enables zero-slippage deals for blockchain assets. The platform features a modern Next.js frontend with 7 different animated backgrounds (Orb, GridScan, Beams, Silk, Dither, GradientBlinds, Iridescence), custom clip-path components for unique UI design, and advanced Framer Motion animations. Built with dual scroll flows (vertical and horizontal parallax), WebSocket integration for real-time updates, and a Node.js backend. The platform emphasizes transparency, security, and community-first values while providing real yield to users through revenue-powered mechanisms.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "WebSocket",
        "Framer Motion",
        "Tailwind CSS",
        "Zustand",
      ],
      features: [
        "Zero-slippage OTC trading for blockchain assets",
        "Anonymized transactions for privacy",
        "Real yield generation for users",
        "7 unique animated backgrounds with custom effects",
        "Custom clip-path components for modern UI",
        "Horizontal and vertical scroll experiences",
        "Real-time WebSocket updates",
        "Revenue-powered unified DeFi ecosystem",
      ],
      screenshotUrl: "/images/axton-screenshot.png",
      githubUrl: "https://github.com/AslamSDM/axton",
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
      title: "LITMEX Protocol - Presale Platform",
      categories: ["fullstack", "blockchain"],
      description:
        "A Solana-based DeFi protocol combining decentralized prediction markets, mini games, and autonomous AI betting agents for intelligent crypto wagering.",
      longDescription:
        "Developed LITMEX Protocol, an innovative DeFi platform built on Solana that revolutionizes crypto wagering through intelligent automation. The protocol combines decentralized prediction markets with addictive mini games and autonomous AI betting agents to create a comprehensive gambling ecosystem. Features advanced smart contracts optimized for Solana's high-speed, low-cost infrastructure and implements sophisticated risk management algorithms.",
      tech: [
        "Rust",
        "Solana",
        "Anchor Framework",
        "Next.js",
        "TypeScript",
        "Web3.js",
        "Serum DEX",
        "Metaplex",
      ],
      features: [
        "Decentralized prediction markets with real-time odds",
        "AI-powered autonomous betting agents",
        "Addictive mini games with crypto rewards",
        "High-speed transactions on Solana blockchain",
        "Advanced risk management and liquidity pools",
        "Cross-platform gaming interface",
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
      title: "Shaboy - Decentralized Retro Gaming Platform",
      categories: ["fullstack", "blockchain"],
      description:
        "A decentralized retro gaming platform where developers can mint games as NFTs and trade them in the built-in marketplace, with AI-powered game suggestions.",
      longDescription:
        "Led the development of Shaboy, a revolutionary decentralized gaming platform that transforms retro games into tradeable NFTs. Built on Starknet blockchain using Cairo smart contracts, the platform features an integrated marketplace and uses the browser as a gaming console through React GBA modules. Implemented an AI game suggestion engine powered by Mistral 7B model to enhance user experience and game discovery.",
      tech: [
        "Cairo",
        "Starknet",
        "React",
        "Next.js",
        "TypeScript",
        "React GBA",
        "Mistral 7B",
        "Node.js",
      ],
      features: [
        "NFT game minting and trading marketplace",
        "Browser-based retro gaming console using React GBA",
        "AI-powered game suggestion engine with Mistral 7B",
        "Smart contracts written in Cairo for Starknet",
        "Decentralized game ownership and trading",
        "Retro gaming library with modern blockchain integration",
      ],
      screenshotUrl: "/images/shaboy-screenshot.png",
      githubUrl: "https://github.com/AslamSDM/shaboy-platform",
      liveUrl: "https://shaboy.gaming",
      duration: "8 months",
      year: "2024",
      team: "Lead developer with team",
      status: "completed",
      metrics: [
        { label: "Award", value: "🏆 Most Promising Project - Starhack 2024" },
        { label: "Games Minted", value: "2,500+" },
        { label: "Active Players", value: "10K+" },
      ],
    },

    {
      id: "jupyter-lending",
      title: "Jupyter - Lending & Borrowing Platform",
      categories: ["blockchain"],
      description:
        "A decentralized lending and borrowing platform built on BNB Smart Chain, forked from Venus DApp with enhanced features and improved user experience.",
      longDescription:
        "Developed Jupyter as a comprehensive DeFi lending and borrowing platform on BNB Smart Chain. As a Venus DApp fork, it provides users with the ability to lend their crypto assets to earn interest and borrow against their collateral. Implemented a full-stack solution with modern frontend technologies and robust backend infrastructure including smart contracts, database management, and GraphQL APIs for efficient data querying.",
      tech: [
        "Solidity",
        "Next.js",
        "Tailwind CSS",
        "Hardhat",
        "PostgreSQL",
        "GraphQL",
        "BNB Smart Chain",
        "Web3.js",
      ],
      features: [
        "Crypto lending with competitive interest rates",
        "Collateralized borrowing with multiple asset support",
        "Real-time interest rate calculations",
        "Portfolio management and analytics dashboard",
        "Multi-asset collateral support",
        "Automated liquidation mechanisms for risk management",
      ],
      screenshotUrl: "/images/jupyter-screenshot.png",
      githubUrl: "https://github.com/AslamSDM/jupyter-lending",
      liveUrl: "https://jupyter.defi",
      duration: "5 months",
      year: "2024",
      team: "Solo project",
      status: "completed",
      metrics: [],
    },
    {
      id: "Spidey-Dapp",
      title: "Landing Page Generation for Meme Coins",
      categories: ["fullstack", "blockchain"],
      description:
        "A  landing page generation platform for meme coins, enabling users to create and customize their own landing pages effortlessly.",
      longDescription:
        "Developed Spidey DApp as a comprehensive solution for meme coin projects to generate landing pages quickly. The platform allows users to choose from various templates, customize content, and deploy their landing pages with ease. Implemented a full-stack solution with modern frontend technologies and robust backend infrastructure including smart contracts, database management, and GraphQL APIs for efficient data querying.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
        "BNB Smart Chain",
        "Claude 3",
        "LangChain",
        "Stable Diffusion",
      ],
      features: [
        "Template-based landing page generation",
        "AI-powered content creation using Claude 3",
        "Customizable design elements and layouts",
        "One-click deployment to IPFS",
        "User-friendly interface for non-technical users",
        "Media generation using Stable Diffusion",
      ],
      screenshotUrl: "/images/spidey-screenshot.png",
      liveUrl: "https://spidey-dapp.vercel.app",
      duration: "1 month",
      year: "2024",
      team: "Team project",
      status: "completed",
      metrics: [
        { label: "Active Users", value: "1K+" },
        { label: "Landing Pages Created", value: "1K+" },
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "blockchain", label: "Blockchain", icon: Shield },
    { id: "ai", label: "AI/ML", icon: Cpu },
    { id: "fullstack", label: "Full Stack", icon: Code2 },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "in-progress":
        return "text-blue-600 bg-blue-100";
      case "archived":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "blockchain":
        return Shield;
      case "ai":
        return Cpu;
      case "fullstack":
        return Code2;
      default:
        return Globe;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground grain-texture noise-texture pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Portfolio Projects
          </h1>
          <p className="text-foreground/70 text-lg">
            Explore my blockchain, AI, and full-stack development projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => {
                  setFilter(category.id);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? "bg-foreground text-background"
                    : " hover:bg-muted/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid lg:grid-cols-2 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=" rounded-2xl overflow-hidden hover:bg-muted/50 transition-all duration-300 group"
                  whileHover={{ y: -10 }}
                >
                  {/* Screenshot Section */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <Image
                      src={project.screenshotUrl}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status.replace("-", " ").toUpperCase()}
                      </span>
                    </div>

                    {/* Category Badges */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.categories.map((category) => {
                        const CategoryIcon = getCategoryIcon(category);
                        return (
                          <div
                            key={category}
                            className="bg-black/40 backdrop-blur-sm rounded-full p-2"
                          >
                            <CategoryIcon size={20} className="text-white" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-foreground/60 text-sm flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {project.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={14} />
                            {project.team || "Solo"}
                          </span>
                        </p>
                      </div>

                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {}}
                          >
                            <Github size={20} className="text-accent" />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink size={20} className="text-accent" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-accent">
                              {metric.value}
                            </div>
                            <div className="text-xs text-foreground/60">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground/80 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* View Details Button */}
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-foreground text-background hover:bg-accent py-3 rounded-full font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details & Features
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className=" rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold gradient-text mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-foreground/60">
                        {selectedProject.duration} • {selectedProject.year}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-muted/50 rounded-full transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={24} />
                    </motion.button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Long Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Project Overview
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20 font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                    )}
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioPage;
