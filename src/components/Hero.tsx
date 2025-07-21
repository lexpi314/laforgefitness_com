'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/victor-freitas-vjkM-0m34KU-unsplash.jpg"
          alt="La Forge Fitness - Salle de sport"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                filter: [
                  'drop-shadow(0 0 0px rgba(234, 91, 12, 0))',
                  'drop-shadow(0 0 20px rgba(234, 91, 12, 0.3))',
                  'drop-shadow(0 0 0px rgba(234, 91, 12, 0))'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <Image
                src="/assets/Logo-La-Forge-Final.png"
                alt="La Forge Fitness"
                width={600}
                height={200}
                className="mx-auto max-w-full h-auto"
                priority
                onError={(e) => {
                  // Fallback vers le texte si le logo ne charge pas
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallbackText = target.nextElementSibling as HTMLElement;
                  if (fallbackText) {
                    fallbackText.style.display = 'block';
                  }
                }}
              />
            </motion.div>
            
            {/* Effet de particules orange autour du logo */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.1, 0.8],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-full blur-xl"></div>
            </motion.div>
            
            {/* Fallback texte */}
            <h1 
              className="hero-title mb-6 leading-none hidden"
              style={{ display: 'none' }}
            >
              LA FORGE
              <br />
              FITNESS
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Forgez votre corps, sculptez votre esprit. 
            Rejoignez la communauté qui transforme la sueur en force.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="btn-primary text-lg px-10 py-4">
              Commencer maintenant
            </button>
            <button className="btn-secondary text-lg px-10 py-4">
              Découvrir nos services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-white/80">Membres actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white/80">Accès libre</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5★</div>
              <div className="text-white/80">Satisfaction client</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 