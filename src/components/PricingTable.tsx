import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Hogar Básico',
    price: '289.990',
    description: 'Ideal para comenzar tu transformación inteligente',
    features: [
      'Control de luces (5 puntos)',
      'Cerradura inteligente',
      'Termostato smart',
      'Asistente de voz',
      'App móvil incluida',
      'Instalación profesional',
    ],
  },
  {
    name: 'Hogar Smart',
    price: '489.990',
    description: 'La opción más completa para tu familia',
    features: [
      'Todo de Plan Básico',
      'Control de luces (10 puntos)',
      '2 Cámaras HD WiFi',
      'Sensores de movimiento (4)',
      'Sistema de alarma',
      'Red WiFi mesh',
      'Soporte prioritario 24/7',
      'Garantía extendida 3 años',
    ],
    popular: true,
  },
  {
    name: 'Hogar Premium',
    price: '789.990',
    description: 'Automatización total sin límites',
    features: [
      'Todo de Plan Smart',
      'Control de luces (20 puntos)',
      '4 Cámaras HD WiFi',
      'Sensores de movimiento (8)',
      'Control de cortinas',
      'Sistema de audio multiroom',
      'Panel de control táctil',
      'Mantenimiento anual incluido',
    ],
  },
];

export default function PricingTable() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precios" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-surface/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,210,211,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-text-light mb-4">
            Planes a tu Medida
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-text-dim max-w-2xl mx-auto">
            Elige el plan perfecto para tu hogar. Todos incluyen instalación profesional y garantía
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-surface rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-brand-accent shadow-2xl shadow-brand-accent/20 lg:scale-105 lg:z-10'
                  : 'border-gray-200 dark:border-white/10 hover:border-brand-accent/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-accent to-brand-primary text-brand-dark px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">Más Vendido</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-text-light mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-text-dim">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-text-light">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-text-dim">CLP</span>
                </div>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 sm:py-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-brand-accent text-brand-dark hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/25'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-text-light hover:bg-brand-accent/10 border border-gray-200 dark:border-white/10'
                  }`}
                >
                  Cotizar Plan
                </button>

                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-white/10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-brand-accent/20' : 'bg-gray-100 dark:bg-white/5'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? 'text-brand-accent' : 'text-gray-600 dark:text-text-dim'
                        }`} />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-text-dim">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-600 dark:text-text-dim">
            ¿Necesitas un plan personalizado? Contáctanos para una cotización a medida
          </p>
        </motion.div>
      </div>
    </section>
  );
}
