import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { type Question } from "../content/docs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TOCProps {
  questions: Question[];
  activeId: string;
}

export function TOC({ questions, activeId }: TOCProps) {
  const [activeAnchor, setActiveAnchor] = useState<string>(activeId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveAnchor(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    questions.forEach((q) => {
      const el = document.getElementById(q.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [questions]);

  return (
    <aside className="fixed right-0 top-16 bottom-0 w-64 glass border-l border-white/5 z-40 overflow-y-auto hidden xl:block">
      <div className="p-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
          On this page
        </h2>
        <nav className="space-y-4">
          {questions.map((q) => {
            const isActive = activeAnchor === q.id;
            return (
              <a
                key={q.id}
                href={`#${q.id}`}
                className={cn(
                  "block text-sm font-medium transition-all duration-300 relative pl-4",
                  isActive ? "text-primary scale-105" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="toc-indicator"
                    className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-full"
                  />
                )}
                {q.title || `Question ${q.globalIndex}`}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
