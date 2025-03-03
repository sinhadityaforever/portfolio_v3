
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';
import { Star, Sparkles, Code, Heart } from 'lucide-react';

const HeroSection = () => {
  const { personal } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingIconVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      rotate: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }
    })
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative py-20 lg:py-0 mt-16 lg:mt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <motion.div
        className="container max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="order-2 lg:order-1">
          <motion.div variants={childVariants}>
            <h3 className="text-lg md:text-xl text-muted-foreground mb-3">Hi there 👋 I'm</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-6">
              {personal.name}
              <span className="text-primary">.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              {personal.title}
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground text-lg mb-8 max-w-lg"
            variants={childVariants}
          >
            {personal.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            variants={childVariants}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium rounded-md border border-border"
            >
              See my work
            </a>
          </motion.div>
          
          <motion.div variants={childVariants}>
            <p className="text-muted-foreground mb-3 text-sm">Follow me on social media:</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href={personal.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors mb-2"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a 
                href={personal.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors mb-2"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a 
                href={personal.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors mb-2"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-7.6 7.9-4.9.8-.5 1.4-1.1 2.1-1.8.4.9.6 1.8.6 2.8"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          variants={childVariants}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Floating icons around the photo with enhanced styling */}
            <motion.div 
              className="absolute -top-10 -left-10 z-10 w-16 h-16 flex items-center justify-center"
              custom={1}
              variants={floatingIconVariants}
              animate="animate"
            >
              <div className="bg-primary/10 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Sparkles size={36} className="text-primary" />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/4 -right-12 z-10 w-16 h-16 flex items-center justify-center"
              custom={2}
              variants={floatingIconVariants}
              animate="animate"
            >
              <div className="bg-accent/10 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Code size={36} className="text-accent" />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -left-8 z-10 w-16 h-16 flex items-center justify-center"
              custom={3}
              variants={floatingIconVariants}
              animate="animate"
            >
              <div className="bg-primary/10 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Star size={36} className="text-primary/80" />
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/3 -right-10 z-10 w-16 h-16 flex items-center justify-center"
              custom={4}
              variants={floatingIconVariants}
              animate="animate"
            >
              <div className="bg-red-500/10 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Heart size={36} className="text-red-400" />
              </div>
            </motion.div>
            
            {/* Enhanced gradient background and border */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary via-accent/50 to-background blur-md opacity-75"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-card w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-muted/50 via-muted/10 to-background shadow-xl">
              <img
                src={personal.photo}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
