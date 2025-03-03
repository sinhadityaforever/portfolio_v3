
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-24 relative section-padding bg-muted/30">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <motion.div 
        ref={ref}
        className="container mx-auto max-w-7xl"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">Stuff that I've built</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Check out some of my recent projects and applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          {projects.slice(0, 6).map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-card shadow-xl h-[500px] border border-border/30 hover:border-primary/20 transition-all duration-300 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_35px_-12px_rgba(0,0,0,0.5)]"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 25px 40px -15px rgba(var(--primary), 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Project image with gradient overlay */}
              <div className="h-[50%] overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-60"></div>
              </div>
              
              {/* Project details card with improved styling */}
              <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm p-5 border-t border-border/40 h-[50%] flex flex-col justify-between rounded-b-xl">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-primary/80 text-white rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {project.description}
                  </p>
                </div>
                
                {/* Button container - modified to handle single button centering */}
                <div className={`flex flex-wrap gap-4 mt-auto mb-4 ${
                  // Center if only one button is available
                  ((project.liveDisabled || !project.link) && (project.codeDisabled || !project.github)) ? 
                    'justify-center' : 
                    'justify-start'
                }`}>
                  {/* Visit button with larger text and icon */}
                  {(project.liveDisabled !== true && project.link) && (
                    <a 
                      href={project.link} 
                      className={`inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg gap-2 whitespace-nowrap
                        btn-primary shadow-lg hover:shadow-xl`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>Visit</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <path d="M15 3h6v6"/>
                        <path d="m10 14 11-11"/>
                      </svg>
                    </a>
                  )}
                  
                  {/* GitHub button with larger text and icon */}
                  {(project.codeDisabled !== true && project.github) && (
                    <a 
                      href={project.github || '#'} 
                      className={`inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg gap-2 whitespace-nowrap
                        btn-secondary shadow-lg hover:shadow-xl`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>Github</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <a 
            href="https://github.com/sinhadityaforever" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-glass btn-icon"
          >
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <path d="M15 3h6v6"/>
              <path d="m10 14 11-11"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
