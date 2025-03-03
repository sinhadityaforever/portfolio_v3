
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import portfolioData from '../data/portfolio-data.json';

const Navbar = () => {
  const { personal } = portfolioData;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled 
        ? 'py-3 dark:glass-dark bg-white/95 shadow-sm backdrop-blur-sm dark:bg-transparent' 
        : 'py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-foreground flex items-center">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mr-2">A</div>
          <span className="hidden sm:inline">Aditya</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="font-medium text-muted-foreground hover:text-foreground link-hover"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            <a 
              href={personal.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gradient btn-icon"
            >
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m16 12-4 4-4-4"></path>
                <path d="M12 16V8"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          
          <button 
            className="text-foreground p-2 rounded-lg bg-muted/30 backdrop-blur-sm border border-border/30 hover:bg-muted/50 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-sm shadow-lg py-6 px-6 border-t border-border/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border/10 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={personal.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gradient btn-icon justify-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m16 12-4 4-4-4"></path>
                <path d="M12 16V8"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
