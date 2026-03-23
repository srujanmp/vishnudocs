import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { TOC } from "./components/TOC";
import { HeroBanner } from "./components/HeroBanner";
import { QuestionCard } from "./components/QuestionCard";
import { ReadingProgress } from "./components/ReadingProgress";
import { CommandMenu } from "./components/CommandMenu";
import { ThemeProvider } from "./components/ThemeProvider";
import { allSections, categories, type Section } from "./content/docs";
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import nprogress from "nprogress";

// Utility for reading time
function calculateReadingTime(section: Section) {
  const words = section.questions.reduce((acc, q) => {
    return acc + q.text.split(" ").length + (q.details?.reduce((dAcc, d) => dAcc + d.split(" ").length, 0) || 0);
  }, 0);
  const minutes = Math.ceil(words / 200);
  return minutes || 1;
}

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState(allSections[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Handle hash on initial load
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const section = allSections.find(s => s.questions.some(q => q.id === hash));
      if (section) setActiveSectionId(section.id);
    }
  }, []);

  const activeSection = useMemo(() => 
    allSections.find(s => s.id === activeSectionId) || allSections[0]
  , [activeSectionId]);

  const currentIndex = allSections.findIndex(s => s.id === activeSectionId);
  const prevSection = allSections[currentIndex - 1];
  const nextSection = allSections[currentIndex + 1];

  const readingTime = useMemo(() => calculateReadingTime(activeSection), [activeSection]);

  const handleSectionChange = (id: string) => {
    nprogress.start();
    setActiveSectionId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => nprogress.done(), 500);
  };

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <ReadingProgress />
        <Navbar 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isSidebarOpen={isSidebarOpen} 
        />
        <CommandMenu />

        <div className="flex pt-16">
          <Sidebar 
            activeSection={activeSectionId} 
            onSectionChange={handleSectionChange}
            isOpen={isSidebarOpen}
          />

          <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:pl-72" : ""} xl:pr-64`}>
            <div className="max-w-4xl mx-auto px-6 py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSectionId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Breadcrumbs */}
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-8">
                    <span>Docs</span>
                    <span className="opacity-30">/</span>
                    <span className="text-primary">{activeSection.title}</span>
                  </div>

                  <HeroBanner 
                    title={activeSection.title}
                    icon={activeSection.icon}
                    gradient={activeSection.gradient}
                    color={activeSection.color}
                  />

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-12 p-4 rounded-2xl glass border-white/5">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Clock size={16} className="text-primary" />
                      <span>{readingTime} min read</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground border-l border-white/10 pl-6">
                      <BookOpen size={16} className="text-primary" />
                      <span>{activeSection.questions.length} Questions</span>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="space-y-12">
                    {activeSection.questions.map((q) => (
                      <QuestionCard 
                        key={q.id}
                        {...q}
                        color={activeSection.color}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {prevSection ? (
                      <button
                        onClick={() => handleSectionChange(prevSection.id)}
                        className="w-full sm:w-auto flex flex-col items-start gap-2 p-6 rounded-2xl glass hover:bg-white/5 transition-all group text-left"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                          <span>Previous</span>
                        </div>
                        <span className="text-lg font-bold group-hover:text-primary transition-colors">
                          {prevSection.title}
                        </span>
                      </button>
                    ) : <div />}

                    {nextSection ? (
                      <button
                        onClick={() => handleSectionChange(nextSection.id)}
                        className="w-full sm:w-auto flex flex-col items-end gap-2 p-6 rounded-2xl glass hover:bg-white/5 transition-all group text-right"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          <span>Next</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-lg font-bold group-hover:text-primary transition-colors">
                          {nextSection.title}
                        </span>
                      </button>
                    ) : <div />}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </main>

          <TOC 
            questions={activeSection.questions} 
            activeId={activeSection.questions[0].id} 
          />
        </div>

        {/* Global background pattern */}
        <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </ThemeProvider>
  );
}
