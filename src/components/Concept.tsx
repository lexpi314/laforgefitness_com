'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Concept() {
  return (
    <section id="concept" className="py-20 bg-gradient-to-b from-black to-secondary-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">LE CONCEPT</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            La Forge Fitness n&apos;est pas qu&apos;une salle de sport, c&apos;est un état d&apos;esprit. 
            Ici, chaque goutte de sueur forge votre caractère.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/john-arano-h4i9G-de7Po-unsplash.jpg"
                alt="Entraînement intensif"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Philosophie du Dépassement</h3>
                  <p className="text-white/80">
                    Nous croyons que les limites n&apos;existent que dans votre esprit. 
                    Chaque séance est une opportunité de les repousser.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Communauté Solidaire</h3>
                  <p className="text-white/80">
                    Rejoignez une famille de guerriers où l&apos;entraide et la motivation 
                    collective vous propulsent vers vos objectifs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Excellence Technique</h3>
                  <p className="text-white/80">
                    Équipements dernière génération, coaching personnalisé et suivi 
                    professionnel pour des résultats optimaux.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-8"
            >
              Découvrir notre approche
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 