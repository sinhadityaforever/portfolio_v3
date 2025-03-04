
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/40 py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-display font-bold">
              Aditya<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              I'm a passionate software engineer focused on creating elegant solutions with clean, efficient code.
              My goal is to build digital experiences that are both beautiful and functional.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a 
                href="https://github.com/sinhadityaforever" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:from-primary/80 hover:to-accent/80 hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/Sinhaditya14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0077b5]/30 to-[#00a0dc]/30 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:from-[#0077b5]/80 hover:to-[#00a0dc]/80 hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://twitter.com/mayybe_aadi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1DA1F2]/30 to-[#1DA1F2]/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:from-[#1DA1F2]/80 hover:to-[#1DA1F2]/60 hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-7.6 7.9-4.9.8-.5 1.4-1.1 2.1-1.8.4.9.6 1.8.6 2.8" />
                </svg>
              </motion.a>
              {/* <motion.a 
                href="https://dribbble.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ea4c89]/30 to-[#c32361]/30 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:from-[#ea4c89]/80 hover:to-[#c32361]/80 hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
              </motion.a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              </li>
              {/* <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              </li> */}
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>sinhadityaforever@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Aditya Sinha. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Designed & Built with <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
