import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import * as Icons from "lucide-react";
import { type LucideIcon, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { categories } from "../content/docs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
  isOpen?: boolean;
}

export function Sidebar({ activeSection, onSectionChange, isOpen = true }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const { scrollYProgress } = useScroll();
  const progressPercent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    return progressPercent.on("change", (v) => setDisplayProgress(Math.round(v)));
  }, [progressPercent]);

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className={cn(
      "fixed left-0 top-16 bottom-0 w-72 glass border-r border-white/5 z-40 overflow-y-auto transition-transform duration-300",
      !isOpen && "-translate-x-full lg:translate-x-0"
    )}>
      <div className="p-6">
        {categories.map((category) => (
          <div key={category.id} className="mb-8 last:mb-0">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 px-3">
              {category.title}
            </h2>
            <nav className="space-y-1">
              {category.sections.map((section) => {
                const Icon = (Icons as any)[section.icon] as LucideIcon;
                const isActive = activeSection === section.id;
                const isExpanded = expanded[section.id];

                return (
                  <div key={section.id} className="space-y-1">
                    <button
                      onClick={() => {
                        onSectionChange(section.id);
                        toggleExpand(section.id);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between p-2.5 rounded-xl transition-all group",
                        isActive ? "bg-primary/10 text-primary shadow-sm" : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className={cn(
                            "p-1.5 rounded-lg glass transition-colors",
                            isActive ? "text-primary shadow-inner" : "text-muted-foreground group-hover:text-foreground"
                          )}
                          style={isActive ? { color: section.color } : {}}
                        >
                          {Icon && <Icon size={16} />}
                        </div>
                        <span className="font-semibold text-sm tracking-tight">
                          {section.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md glass opacity-40">
                          {section.questions.length}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={12} className="opacity-40" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-10 space-y-0.5"
                        >
                          {section.questions.map((q) => (
                            <a
                              key={q.id}
                              href={`#${q.id}`}
                              className="block py-1.5 text-[11px] font-medium text-muted-foreground/70 hover:text-primary transition-colors truncate"
                            >
                              {q.title || `Question ${q.globalIndex}`}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>
        ))}

        {/* Progress indicator */}
        <div className="mt-auto pt-8 border-t border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Reading Progress
            </span>
            <span className="text-xs font-bold text-primary">
              {displayProgress}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              style={{ width: `${displayProgress}%` }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
