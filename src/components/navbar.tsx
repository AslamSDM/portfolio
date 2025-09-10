"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Download, Code, Mail, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  scrollY?: number;
  showHomeButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollY = 0,
  showHomeButton = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "portfolio") {
      router.push("/portfolio");
      return;
    }

    if (sectionId === "home" && showHomeButton) {
      router.push("/");
      return;
    }

    // For sections on the main page
    if (showHomeButton) {
      // If we're on a different page, go to home first then scroll
      router.push(`/#${sectionId}`);
      return;
    }

    // If we're on the home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    "Home",
    "Experience",
    "Projects",
    "Portfolio",
    "Skills",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 10 ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <motion.div
            className="text-2xl  text-foreground cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/")}
          >
            Aslam
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {showHomeButton && (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2 hover:text-accent transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Home size={16} />
                Home
              </motion.button>
            )}

            {navigationItems
              .filter((item) => (showHomeButton ? item !== "Home" : true))
              .map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (showHomeButton ? index + 1 : index) * 0.1,
                  }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-accent transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.button>
              ))}

            <span className="absolute inset-0 w-0 bg-accent/20 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span
              className="flex items-center gap-2 relative z-10"
              onClick={() => {
                window.open("/MoMohammed_Aslam_CV.pdf", "_blank");
              }}
            >
              <Download size={16} />
              Download CV
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
              {showHomeButton && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                  onClick={() => scrollToSection("home")}
                  className="flex items-center gap-2 w-full text-left py-2 hover:text-accent transition-colors duration-200"
                >
                  <Home size={16} />
                  Home
                </motion.button>
              )}

              {navigationItems
                .filter((item) => (showHomeButton ? item !== "Home" : true))
                .map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (showHomeButton ? index + 1 : index) * 0.1,
                    }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </motion.button>
                ))}

              {/* Mobile Action Buttons */}
              <div className="border-t border-white/10 mt-4 pt-4 space-y-3">
                <span
                  className="flex items-center gap-2 justify-center relative z-10"
                  onClick={() => {
                    window.open("/MoMohammed_Aslam_CV.pdf", "_blank");
                  }}
                >
                  <Download size={16} />
                  Download CV
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
