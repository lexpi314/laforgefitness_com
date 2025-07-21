'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '#home' },
    { name: 'Le Concept', href: '#concept' },
    { name: 'Services', href: '#services' },
    { name: 'Abonnements', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-secondary-800">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                filter: 'drop-shadow(0 0 8px rgba(234, 91, 12, 0.4))'
              }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <Image
                src="/assets/Logo-Typo-La-Forge-Final.png"
                alt="La Forge Fitness"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="btn-primary"
            >
              Rejoindre
            </motion.button>
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                Rejoindre
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
} 