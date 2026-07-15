"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Download } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "CV", href: "/cv" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <nav className="max-w-3xl mx-auto px-5 flex items-center justify-between h-11">
        <Link
          href="/"
          className="text-sm font-medium text-foreground hover:text-text-muted transition-colors"
        >
          Aslam
        </Link>

        <div className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1 text-sm rounded-md transition-colors ${
                  isActive
                    ? "bg-hover text-foreground"
                    : "text-text-muted hover:bg-hover hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="/Mohammed_Aslam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 p-1.5 text-text-muted hover:text-foreground hover:bg-hover rounded-md transition-colors"
            aria-label="Download CV"
          >
            <Download size={15} />
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 text-text-muted hover:text-foreground hover:bg-hover rounded-md transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun size={15} />
            ) : (
              <Moon size={15} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
