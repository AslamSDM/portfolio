"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
}

export const ResponsiveContainer = ({
  children,
  className = "",
}: ResponsiveContainerProps) => {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GradientCard = ({
  children,
  className = "",
  hoverEffect = true,
}: GradientCardProps) => {
  return (
    <motion.div
      className={`
        bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/20 
        transition-all duration-300 shadow-lg hover:shadow-xl
        ${hoverEffect ? "hover:bg-white/90 dark:hover:bg-white/15" : ""}
        ${className}
      `}
      whileHover={hoverEffect ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};
