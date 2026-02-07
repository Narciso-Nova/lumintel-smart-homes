import { motion } from 'framer-motion';
import { Shield, Wifi, Zap, Camera, Thermometer, Lock } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Shield,
    title: 'Seguridad Total',
    description: 'Protección inteligente para tu familia y patrimonio',
    features: ['Alarmas inteligentes', 'Sensores de movimiento', 'Notificaciones en tiempo real'],
  },
  {
    icon: Wifi,
    title: 'Conectividad WiFi',
    description: 'Red mesh de alta velocidad en todo tu hogar',
    features: ['Cobertura total', 'Roaming automático', 'Red segura y rápida'],
  },
  {
    icon: Zap,
    title: 'Automatización',
    description: 'Control inteligente de luces y electrodomésticos',
    features: ['Escenas personalizadas', 'Control por voz', 'Ahorro energético'],
  },
  {
    icon: Camera,
    title: 'Videovigilancia',
    description: 'Monitoreo 24/7 con cámaras de alta definición',
    features: ['Visión nocturna', 'Grabación en la nube', 'Acceso remoto'],
  },
  {
    icon: Thermometer,
    title: 'Climatización',
    description: 'Control inteligente de temperatura y confort',
    features: ['Termostatos smart', 'Programación horaria', 'Detección de presencia'],
  },
  {
    icon: Lock,
    title: 'Acceso Inteligente',
    description: 'Cerraduras y control de acceso sin llaves',
    features: ['Apertura remota', 'Códigos temporales', 'Historial de accesos'],
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(9,81,82,0.08),transparent_60%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-text-light mb-4">
            Soluciones Integrales
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-text-dim max-w-2xl mx-auto">
            Tecnología de vanguardia para transformar tu hogar en un espacio inteligente, seguro y eficiente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gray-50 dark:bg-surface rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 hover:border-brand-accent dark:hover:border-brand-accent transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/10"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/5 group-hover:to-brand-primary/5 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-brand-accent" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-text-light mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-text-dim mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-text-dim">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
