
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';

const SkillsSection = () => {
  const { skills, stats } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  // Get category-based colors to maintain visual grouping
  const getCategoryColor = (categoryIndex: number) => {
    switch(categoryIndex) {
      case 0: return "from-primary/50 to-primary/5"; // Frontend - purple
      case 1: return "from-accent/50 to-accent/5"; // Backend - teal
      case 2: return "from-blue-500/50 to-blue-500/5"; // Database - blue
      case 3: return "from-green-500/50 to-green-500/5"; // Tools - green
      default: return "from-primary/50 to-primary/5";
    }
  };

  return (
    <section id="skills" className="py-24 relative section-padding">
      <motion.div 
        ref={ref}
        className="container mx-auto max-w-7xl"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">My Technical Skills</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here's what I'm good at - both technical and soft skills.
          </p>
        </motion.div>
        
        {/* Enhanced Skill Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeCategory === index 
                  ? 'bg-primary/80 text-white shadow-md shadow-primary/30 border-primary/50 shadow-[0_6px_16px_rgba(var(--primary),0.4)]' 
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted/80 border-muted/40 hover:shadow-md'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
            >
              {category.title}
            </motion.button>
          ))}
        </div>
        
        {/* Skills Grid - Sleek design without ratings */}
        <motion.div 
          className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={containerVariants}
          key={activeCategory} // Force re-render on category change
          initial="hidden"
          animate="visible"
        >
          {skills[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-xl bg-gradient-to-br ${getCategoryColor(activeCategory)} shadow-sm hover:shadow-md transition-all duration-300`}
              variants={skillVariants}
              custom={index}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="p-6 flex flex-col items-center justify-center h-full backdrop-blur-sm bg-card/50">
                <h3 className="font-medium text-center text-lg">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={itemVariants}
        >
          {stats.filter(stat => stat.label !== "Years Experience").map((stat, index) => (
            <div key={index} className="p-6 rounded-lg bg-card/90 backdrop-blur-sm border border-border/30 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
