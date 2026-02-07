import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 dark:bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">L</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-text-light">Lumintel</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {['servicios', 'precios', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-text-dim hover:text-brand-accent transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface dark:bg-white/5 hover:bg-brand-primary/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accent" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('contacto')}
              className="hidden sm:block px-4 lg:px-6 py-2 lg:py-2.5 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-all hover:shadow-lg hover:shadow-brand-accent/25 text-sm lg:text-base"
            >
              Cotizar
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-surface dark:bg-white/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-text-light" />
              ) : (
                <Menu className="w-5 h-5 text-text-light" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 py-4 space-y-2"
          >
            {['servicios', 'precios', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-text-dim hover:text-brand-accent hover:bg-surface/50 rounded-lg transition-all capitalize"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full px-4 py-3 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-all"
            >
              Cotizar
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
