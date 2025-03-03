
import { useEffect } from "react";
import BackgroundGradient from "@/components/BackgroundGradient";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll to element when hash changes
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Check for hash in the URL on initial load
    if (window.location.hash) {
      setTimeout(() => {
        handleHashChange();
      }, 100);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundGradient />
      
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-50 origin-left" 
        style={{ scaleX }} 
      />
      
      <Navbar />
      
      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        <ProjectsSection />
        <JourneySection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Enhanced Scroll to top button with new styling */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-primary/80 to-accent/80 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(var(--primary),0.5)] hover:shadow-[0_12px_28px_rgba(var(--primary),0.7)] z-40 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
