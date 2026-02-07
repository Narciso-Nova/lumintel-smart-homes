import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NetworkVisualization from './NetworkVisualization';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark to-brand-primary/20 dark:from-brand-dark dark:via-brand-dark dark:to-brand-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(9,81,82,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-brand-accent/10 border border-brand-accent/30 rounded-full"
              >
                <span className="text-brand-accent text-sm font-semibold">Instalación Profesional</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-light leading-tight">
                Tu Hogar.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">
                  Conectado de Verdad.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-text-dim max-w-xl text-balance">
                Transformamos tu casa en un hogar inteligente con tecnología de vanguardia.
                Seguridad, eficiencia y control total desde tu smartphone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contacto')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-all hover:shadow-xl hover:shadow-brand-accent/25 flex items-center justify-center gap-2"
              >
                Cotizar Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('servicios')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-brand-accent/30 text-text-light font-semibold rounded-lg hover:bg-brand-accent/10 hover:border-brand-accent transition-all"
              >
                Ver Servicios
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
              {[
                { value: '500+', label: 'Hogares' },
                { value: '24/7', label: 'Soporte' },
                { value: '98%', label: 'Satisfacción' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-brand-accent">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-text-dim mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <NetworkVisualization />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-brand-accent/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-accent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
