import { Search, Moon, Sun, Menu, X, Github, Command } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface NavbarProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export function Navbar({ onToggleSidebar, isSidebarOpen = true }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 glass border-b border-white/5 z-50 flex items-center justify-between px-3 sm:px-6 gap-2">
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_var(--primary)]">
            <span className="text-white font-black text-lg tracking-tighter italic">V</span>
          </div>
          <span className="text-xl font-black tracking-tighter hidden sm:block">
            VISHNU<span className="text-primary">DOCS</span>
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-4 hidden md:block">
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

      <div className="flex items-center gap-1 sm:gap-2">
        <a
          href="/"
          className="inline-flex px-2.5 sm:px-3 py-2 rounded-xl glass hover:bg-white/10 transition-all text-xs sm:text-sm font-semibold whitespace-nowrap"
        >
          Docs
        </a>
        <a
          href="/system-design"
          className="inline-flex px-2.5 sm:px-3 py-2 rounded-xl glass hover:bg-white/10 transition-all text-xs sm:text-sm font-semibold whitespace-nowrap"
        >
          System Design
        </a>
        <a
          href="/roadmap"
          className="inline-flex px-2.5 sm:px-3 py-2 rounded-xl glass hover:bg-white/10 transition-all text-xs sm:text-sm font-semibold whitespace-nowrap"
        >
          Guide
        </a>
        <a
          href="https://github.com/donnemartin/system-design-primer/blob/master/README.md#system-design-topics-start-here"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex px-3 py-2 rounded-xl glass hover:bg-white/10 transition-all text-sm font-semibold whitespace-nowrap"
        >
          SD Primer
        </a>
        <a
          href="https://hpbn.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex px-3 py-2 rounded-xl glass hover:bg-white/10 transition-all text-sm font-semibold whitespace-nowrap"
        >
          HPBN
        </a>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-xl glass hover:bg-white/10 transition-all group shrink-0"
        >
          {theme === "dark" ? (
            <Sun size={18} className="text-amber-500 group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon size={18} className="text-indigo-500 group-hover:-rotate-12 transition-transform" />
          )}
        </button>
        <a
          href="https://github.com/srujanmp/vishnudocs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl glass hover:bg-white/10 transition-all hidden sm:flex"
        >
          <Github size={18} />
        </a>
      </div>
    </header>
  );
}
