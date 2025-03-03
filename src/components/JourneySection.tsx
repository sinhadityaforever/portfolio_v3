
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '../data/portfolio-data.json';

const JourneySection = () => {
  const { journey } = portfolioData;
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="journey" className="py-24 relative section-padding">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto max-w-5xl"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-display font-bold">{journey.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {journey.subtitle}
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Center line - visible only on larger screens */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-accent/50 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-20">
            {journey.milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                {/* Timeline content */}
                <motion.div 
                  className="md:w-5/12 mb-4 md:mb-0 border-l-2 border-primary/30 pl-4 md:border-0 md:pl-0 relative"
                  style={{ 
                    textAlign: index % 2 === 0 ? 'left' : 'left',
                    [index % 2 === 0 ? 'md:text-left' : 'md:text-right']: true
                  }}
                >
                  <h3 className="text-xl font-bold text-primary mb-1">{milestone.title}</h3>
                  <h4 className="text-lg font-medium mb-2">{milestone.company}</h4>
                  <div className="text-sm text-muted-foreground mb-3">{milestone.period}</div>
                </motion.div>
                
                {/* Empty spacer for center line on desktop - contains the circles now */}
                <div className="hidden md:block md:w-2/12 relative">
                  {/* Circle positioned very close to center line */}
                  <motion.div 
                    className={`absolute top-0 w-4 h-4 rounded-full bg-primary z-10 ${
                      index % 2 === 0 
                        ? 'left-0 translate-x-[calc(50%-4px)]' 
                        : 'right-0 translate-x-[calc(-50%+4px)]'
                    }`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.4 }}
                  />
                </div>
                
                {/* Timeline content details */}
                <motion.div 
                  className="md:w-5/12 p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{ 
                    textAlign: 'left'
                  }}
                >
                  <p className="text-muted-foreground">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default JourneySection;
