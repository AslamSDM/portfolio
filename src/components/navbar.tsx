"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Download, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackButtonClick, trackDownload } from "./mentiq-provider";

interface NavbarProps {
  scrollY?: number;
  showHomeButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollY: propScrollY,
  showHomeButton = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use prop scrollY if provided, otherwise use internal state
  const currentScrollY = propScrollY !== undefined ? propScrollY : scrollY;

  const scrollToSection = (sectionId: string) => {
    // Track navigation
    trackButtonClick("navigation", { section: sectionId, from: pathname });

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

  const navigationItems = ["Home", "Experience", "Portfolio", "Contact"];

  const isPortfolioPage = pathname === "/portfolio";
  const isHomePage = pathname === "/";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        currentScrollY > 0
          ? "glass-effect shadow-lg backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
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
            {isPortfolioPage && (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                onClick={() => router.push("/")}
                className="flex items-center gap-2 hover:text-accent transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Home size={16} />
                Home
              </motion.button>
            )}

            {navigationItems
              .filter((item) => {
                // Don't show Home if we're on portfolio page (we have a dedicated Home button)
                if (isPortfolioPage && item === "Home") return false;
                return true;
              })
              .map((item, index) => {
                const isCurrentPage =
                  (item === "Portfolio" && isPortfolioPage) ||
                  (item === "Home" && isHomePage);

                return (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: (isPortfolioPage ? index + 1 : index) * 0.1,
                    }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors duration-200 font-medium ${
                      isCurrentPage ? "text-accent" : "hover:text-accent"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.button>
                );
              })}

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative overflow-hidden bg-accent text-background px-4 py-2 rounded-full hover:bg-accent/90 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackDownload("Mohammed_Aslam_CV.pdf", "pdf");
                trackButtonClick("download_cv", {
                  location: "navbar",
                  page: pathname,
                });
                window.open("/MoMohammed_Aslam_CV.pdf", "_blank");
              }}
            >
              <span className="absolute inset-0 w-0 bg-accent/20 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="flex items-center gap-2 relative z-10">
                <Download size={16} />
                Download CV
              </span>
            </motion.button>
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
              {isPortfolioPage && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                  onClick={() => router.push("/")}
                  className="flex items-center gap-2 w-full text-left py-2 hover:text-accent transition-colors duration-200"
                >
                  <Home size={16} />
                  Home
                </motion.button>
              )}

              {navigationItems
                .filter((item) => {
                  // Don't show Home if we're on portfolio page (we have a dedicated Home button)
                  if (isPortfolioPage && item === "Home") return false;
                  return true;
                })
                .map((item, index) => {
                  const isCurrentPage =
                    (item === "Portfolio" && isPortfolioPage) ||
                    (item === "Home" && isHomePage);

                  return (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (isPortfolioPage ? index + 1 : index) * 0.1,
                      }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`block w-full text-left py-2 transition-colors duration-200 ${
                        isCurrentPage ? "text-accent" : "hover:text-accent"
                      }`}
                    >
                      {item}
                    </motion.button>
                  );
                })}

              {/* Mobile Action Buttons */}
              <div className="border-t border-white/10 mt-4 pt-4 space-y-3">
                <motion.button
                  className="flex items-center gap-2 justify-center w-full bg-accent text-background py-2 px-4 rounded-full hover:bg-accent/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    trackDownload("Mohammed_Aslam_CV.pdf", "pdf");
                    trackButtonClick("download_cv", {
                      location: "mobile_menu",
                      page: pathname,
                    });
                    window.open("/MoMohammed_Aslam_CV.pdf", "_blank");
                    setIsMenuOpen(false);
                  }}
                >
                  <Download size={16} />
                  Download CV
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
