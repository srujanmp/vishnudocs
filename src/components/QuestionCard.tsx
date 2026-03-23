import { motion } from "framer-motion";
import { Link, Hash, Copy, Check } from "lucide-react";
import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface QuestionCardProps {
  id: string;
  globalIndex: number;
  sectionIndex: number;
  title?: string;
  text: string;
  details?: string[];
  color: string;
}

export function QuestionCard({ id, globalIndex, sectionIndex, title, text, details, color }: QuestionCardProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBorderColorClass = (color: string) => {
    if (color.includes("#06b6d4")) return "neon-border-cyan";
    if (color.includes("#8b5cf6")) return "neon-border-violet";
    if (color.includes("#f59e0b")) return "neon-border-amber";
    if (color.includes("#f43f5e")) return "neon-border-rose";
    if (color.includes("#10b981")) return "neon-border-emerald";
    if (color.includes("#3b82f6")) return "neon-border-blue";
    if (color.includes("#ef4444")) return "neon-border-red";
    return "neon-border-cyan";
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative p-8 rounded-2xl glass mb-8 transition-all duration-300 hover:bg-white/10",
        getBorderColorClass(color)
      )}
    >
      {/* Anchor Link Button */}
      <button
        onClick={copyLink}
        className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
        title="Copy link to question"
      >
        {copied ? <Check size={16} className="text-emerald-500" /> : <Link size={16} className="text-muted-foreground" />}
      </button>

      <div className="flex items-start gap-4 mb-4">
        <span 
          className="px-3 py-1 rounded-full text-xs font-bold glass"
          style={{ color }}
        >
          Q{globalIndex}
        </span>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">
          Section {sectionIndex}
        </span>
      </div>

      {title && (
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
      )}

      <p className="text-lg text-foreground/90 leading-relaxed mb-6">
        {text}
      </p>

      {details && details.length > 0 && (
        <ul className="space-y-4 border-t border-white/5 pt-6">
          {details.map((detail, idx) => (
            <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
