"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Play,
  Pause,
  Calendar,
  Users,
  TrendingUp,
  Database,
  Shield,
  Zap,
  Globe,
  Code2,
  Smartphone,
  Cpu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  videoUrl: string;
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
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "litmex-protocol",
      title: "LITMEX Protocol - Presale Platform",
      category: "blockchain",
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
      videoUrl: "/videos/litmex-demo.mp4",
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
      category: "blockchain",
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
      videoUrl: "/videos/shaboy-demo.mp4",
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
      category: "blockchain",
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
      videoUrl: "/videos/jupyter-demo.mp4",
      githubUrl: "https://github.com/AslamSDM/jupyter-lending",
      liveUrl: "https://jupyter.defi",
      duration: "5 months",
      year: "2024",
      team: "Solo project",
      status: "completed",
      metrics: [
        { label: "Total Value Locked", value: "$1.2M+" },
        { label: "Active Lenders", value: "3K+" },
        { label: "Loans Processed", value: "15K+" },
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
      : projects.filter((project) => project.category === filter);

  const handleVideoPlay = (projectId: string) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

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
    <div className="min-h-screen bg-background text-foreground grain-texture noise-texture">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-accent hover:text-foreground transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} />
              Back to Home
            </motion.button>
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">
              Portfolio Projects
            </h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? "bg-foreground text-background"
                    : "glass-effect hover:bg-muted/50"
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
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl overflow-hidden hover:bg-muted/50 transition-all duration-300 group"
                  whileHover={{ y: -10 }}
                >
                  {/* Video Section */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      poster={`/images/${project.id}-poster.jpg`}
                      controls={playingVideo === project.id}
                      muted
                      loop
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {playingVideo !== project.id && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.button
                          onClick={() => handleVideoPlay(project.id)}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play size={32} className="text-white ml-1" />
                        </motion.button>
                      </div>
                    )}

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

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/40 backdrop-blur-sm rounded-full p-2">
                        <CategoryIcon size={20} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Header */}4
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
                className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
