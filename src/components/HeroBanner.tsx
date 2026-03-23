import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface HeroBannerProps {
  title: string;
  icon: string;
  gradient: string;
  color: string;
}

export function HeroBanner({ title, icon, gradient, color }: HeroBannerProps) {
  const Icon = (Icons as any)[icon] as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative w-full h-64 rounded-3xl overflow-hidden mb-12 flex items-center justify-center bg-gradient-to-br ${gradient} border border-white/10`}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div 
          className="p-4 rounded-2xl glass"
          style={{ color }}
        >
          {Icon && <Icon size={48} />}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
          {title}
        </h1>
      </div>

      {/* Animated glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[100px]"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}
