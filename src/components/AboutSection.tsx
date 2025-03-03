
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';

const AboutSection = () => {
  const { about, personal } = portfolioData;
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 relative section-padding">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-tr-full -z-10"></div>
      
      <motion.div 
        className="container mx-auto max-w-7xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold">Get to know me better</h2>
      </motion.div>
      
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative perspective">
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden"
              variants={itemVariants}
            >
              {/* Vector art illustration section */}
              <div className="w-full aspect-square relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.2)_100%)]"></div>
                
                {/* Replace with the laptop vector art */}
                <motion.div
                  className="w-4/5 h-4/5 flex items-center justify-center"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="/lovable-uploads/ab2d5fe5-39ab-46fd-b72d-4fef534eb441.png" 
                    alt="Coding illustration" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"></div>
            </motion.div>
          </div>
          
          <motion.div
            className="space-y-8"
            variants={variants}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-0.5 bg-primary"></div>
                <p className="text-muted-foreground">About Me</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Passionate about creating <span className="text-primary">innovative solutions</span></h2>
            </motion.div>
            
            {about.bio.map((paragraph, index) => (
              <motion.p 
                key={index}
                className="text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-8"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-xl font-medium mb-2">Education</h3>
                <ul className="space-y-2">
                  {about.education.map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                      <span className="font-medium">{item.degree}</span>
                      <span className="text-sm text-muted-foreground">{item.school}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Experience</h3>
                <ul className="space-y-2">
                  {about.experience.map((item, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                      <span className="font-medium">{item.position}</span>
                      <span className="text-sm text-muted-foreground">{item.company}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4 mt-6"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Contact Me
              </a>
              <a 
                href={personal.resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-icon"
              >
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
