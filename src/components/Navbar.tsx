import { motion } from "framer-motion";
import { Search, Moon, Sun, Menu, X, Github, Command } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function Navbar({ onToggleSidebar, isSidebarOpen }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 glass border-b border-white/5 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_var(--primary)]">
            <span className="text-white font-black text-lg tracking-tighter italic">V</span>
          </div>
          <span className="text-xl font-black tracking-tighter hidden sm:block">
            VISHNU<span className="text-primary">DOCS</span>
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search questions... (⌘K)"
            className="w-full h-10 pl-10 pr-12 rounded-xl glass border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all outline-none text-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded-md glass text-[10px] font-bold text-muted-foreground">
            <Command size={10} /> K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2.5 rounded-xl glass hover:bg-white/10 transition-all group"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-amber-500 group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon size={20} className="text-indigo-500 group-hover:-rotate-12 transition-transform" />
          )}
        </button>
        <a
          href="https://github.com/srujanmp/vishnudocs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl glass hover:bg-white/10 transition-all hidden sm:flex"
        >
          <Github size={20} />
        </a>
      </div>
    </header>
  );
}
