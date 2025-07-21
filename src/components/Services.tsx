'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: "Musculation Libre",
      description: "Zone dédiée aux poids libres avec équipements haut de gamme",
      image: "/assets/alonso-reyes-0HlI76m4jxU-unsplash.jpg",
      features: ["Barres olympiques", "Haltères jusqu'à 50kg", "Racks complets", "Zone fonctionnelle"]
    },
    {
      id: 2,
      title: "Cardio Training",
      description: "Machines cardio dernière génération dans un espace lumineux",
      image: "/assets/ryan-de-hamer-WIPIAJW2-P8-unsplash.jpg",
      features: ["Tapis de course", "Vélos elliptiques", "Rameurs", "Programmes personnalisés"]
    },
    {
      id: 3,
      title: "Coaching Personnel",
      description: "Accompagnement sur-mesure avec nos coachs certifiés",
      image: "/assets/alora-griffiths-AkEr0jc5Lvs-unsplash.jpg",
      features: ["Bilan initial", "Programme personnalisé", "Suivi nutrition", "Coaching mental"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">NOS SERVICES</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Des équipements de pointe, un encadrement professionnel et une atmosphère 
            motivante pour atteindre tous vos objectifs fitness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card overflow-hidden">
                {/* Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/70">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="btn-secondary w-full mt-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    En savoir plus
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-900/20 to-primary-600/20 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à commencer votre transformation ?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Rejoignez notre communauté et bénéficiez d&apos;un accès complet à tous nos services 
              avec un accompagnement personnalisé.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Réserver votre séance d&apos;essai
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 