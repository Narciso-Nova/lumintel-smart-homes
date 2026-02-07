import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(9,81,82,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-text-light mb-4">
            Solicita tu Cotización
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-text-dim max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 dark:bg-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-text-light mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-text-light mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-text-dim">contacto@lumintel.cl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-text-light mb-1">Teléfono</h4>
                    <p className="text-gray-600 dark:text-text-dim">+56 9 8765 4321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-text-light mb-1">Oficina</h4>
                    <p className="text-gray-600 dark:text-text-dim">Av. Providencia 2133, Santiago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                {[
                  'Instalación profesional certificada',
                  'Soporte técnico 24/7',
                  'Garantía de satisfacción',
                  'Tecnología de última generación',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-50 dark:bg-surface rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-text-light mb-2">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'El nombre es requerido', minLength: { value: 2, message: 'Mínimo 2 caracteres' } })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-text-light focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                placeholder="Juan Pérez"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-text-light mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'El email es requerido',
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' },
                })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-text-light focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                placeholder="juan@ejemplo.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-text-light mb-2">
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: 'El teléfono es requerido', pattern: { value: /^[0-9+\s-]+$/, message: 'Teléfono inválido' } })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-text-light focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
                placeholder="+56 9 8765 4321"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-900 dark:text-text-light mb-2">
                Tipo de Propiedad
              </label>
              <select
                id="propertyType"
                {...register('propertyType', { required: 'Selecciona un tipo de propiedad' })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-text-light focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
              >
                <option value="">Selecciona una opción</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="oficina">Oficina</option>
              </select>
              {errors.propertyType && <p className="mt-1 text-sm text-red-500">{errors.propertyType.message}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-900 dark:text-text-light mb-2">
                Servicio de Interés
              </label>
              <select
                id="service"
                {...register('service', { required: 'Selecciona un servicio' })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-text-light focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all"
              >
                <option value="">Selecciona una opción</option>
                <option value="seguridad">Seguridad Total</option>
                <option value="conectividad">Conectividad WiFi</option>
                <option value="automatizacion">Automatización</option>
                <option value="videovigilancia">Videovigilancia</option>
                <option value="climatizacion">Climatización</option>
                <option value="acceso">Acceso Inteligente</option>
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-text-light mb-2">
                Mensaje adicional
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-brand-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-text-light focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all resize-none"
                placeholder="Cuéntanos más sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-brand-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/25 disabled:shadow-none"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Enviado
                </>
              ) : (
                <>
                  Enviar Cotización
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg text-center"
              >
                <p className="text-green-800 dark:text-green-300 font-semibold">
                  ¡Gracias! Te contactaremos pronto.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
