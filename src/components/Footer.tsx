import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,210,211,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-xl font-bold text-text-light">Lumintel</span>
            </div>
            <p className="text-text-dim text-sm mb-4">
              Transformamos hogares en espacios inteligentes con tecnología de vanguardia y servicio de excelencia.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-accent/20 flex items-center justify-center transition-all group"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="w-5 h-5 text-text-dim group-hover:text-brand-accent transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-text-light font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {['Seguridad Total', 'Conectividad WiFi', 'Automatización', 'Videovigilancia', 'Climatización', 'Acceso Inteligente'].map((item) => (
                <li key={item}>
                  <a href="#servicios" className="text-text-dim hover:text-brand-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-text-light font-bold mb-4">Compañía</h3>
            <ul className="space-y-3">
              {['Sobre Nosotros', 'Blog', 'Casos de Éxito', 'Soporte', 'Garantía', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-dim hover:text-brand-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-text-light font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-text-dim">
              <li>Av. Providencia 2133</li>
              <li>Santiago, Chile</li>
              <li className="mt-4">
                <a href="tel:+56987654321" className="hover:text-brand-accent transition-colors">
                  +56 9 8765 4321
                </a>
              </li>
              <li>
                <a href="mailto:contacto@lumintel.cl" className="hover:text-brand-accent transition-colors">
                  contacto@lumintel.cl
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-dim">
            <p>&copy; {currentYear} Lumintel Smart Homes. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-accent transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors">
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
