import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { Search, FileText, Hash, X } from "lucide-react";
import { allSections } from "../content/docs";
import { motion, AnimatePresence } from "framer-motion";

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] p-4 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl glass rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Command className="flex flex-col h-full">
              <div className="flex items-center px-4 border-b border-white/5">
                <Search className="text-muted-foreground" size={20} />
                <Command.Input
                  autoFocus
                  placeholder="Search questions, sections, or keywords..."
                  className="flex-1 h-16 px-4 bg-transparent outline-none text-lg placeholder:text-muted-foreground"
                />
                <button 
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                <Command.Empty className="p-8 text-center text-muted-foreground">
                  No results found.
                </Command.Empty>

                {allSections.map((section) => (
                  <Command.Group key={section.id} heading={section.title} className="p-2">
                    {section.questions.map((q) => (
                      <Command.Item
                        key={q.id}
                        onSelect={() => {
                          window.location.hash = q.id;
                          setOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group"
                      >
                        <div className="p-2 rounded-lg glass text-muted-foreground group-aria-selected:text-primary group-aria-selected:bg-primary/10 transition-colors">
                          <Hash size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm group-aria-selected:text-primary transition-colors">
                            {q.title || `Question ${q.globalIndex}`}
                          </span>
                          <span className="text-xs text-muted-foreground line-clamp-1">
                            {q.text}
                          </span>
                        </div>
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
