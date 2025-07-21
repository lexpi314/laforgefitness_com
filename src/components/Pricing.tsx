'use client';

import { motion } from 'framer-motion';
// import { SubscribeForm, PricingTable } from 'desi-plus';

// Plans d'abonnement La Forge Fitness
const pricingPlans = [
  {
    id: 'classic',
    name: 'Classic',
    price: 75,
    currency: '€',
    interval: 'monthly',
    popular: false,
    engagement: true,
    features: [
      'Accès libre musculation',
      'Zone cardio illimitée',
      'Vestiaires et douches',
      'Application mobile',
      'Accès 7j/7 de 6h à 22h',
      'Cours collectifs inclus'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 85,
    currency: '€',
    interval: 'monthly',
    popular: true,
    engagement: false,
    features: [
      'Tout Classic inclus',
      'Accès 24h/24 7j/7',
      '2 séances coaching/mois',
      'Plan nutrition personnalisé',
      'Zone fonctionnelle premium',
      'Sans engagement'
    ]
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: 90,
    currency: '€',
    interval: 'monthly',
    popular: false,
    engagement: false,
    features: [
      'Tout Pro inclus',
      'Coaching personnel illimité',
      'Suivi complet nutrition',
      'Massages de récupération',
      'Accès VIP événements',
      'Parking privé inclus'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-secondary-900 to-black">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">ABONNEMENTS</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Choisissez l&apos;abonnement qui correspond à vos ambitions. 
            Flexibilité totale avec nos offres sans engagement.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <span className="text-white font-semibold">Avec engagement</span>
              <div className="text-sm text-white/60">Tarif préférentiel</div>
            </div>
            <div className="text-center">
              <span className="text-white font-semibold">Sans engagement</span>
              <div className="text-sm text-white/60">Flexibilité totale</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Badges */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                {plan.popular && (
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </span>
                )}
                {plan.engagement ? (
                  <span className="bg-secondary-700 text-white/80 px-3 py-1 rounded-full text-xs">
                    Avec engagement
                  </span>
                ) : (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                    Sans engagement
                  </span>
                )}
              </div>

              <div className={`card h-full ${plan.popular ? 'border-primary-500 bg-primary-500/5' : ''} relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-transparent"></div>
                </div>

                <div className="relative z-10 text-center">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-white/70 ml-1">{plan.currency}/mois</span>
                    </div>
                    <p className="text-sm text-white/60 mt-2">
                      {plan.engagement ? 'Avec engagement' : 'Sans engagement'}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-600 text-white' 
                        : 'btn-secondary'
                    }`}
                  >
                    Choisir {plan.name}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desi+ Integration Placeholder */}
        {/* 
        <div className="mt-16">
          <PricingTable plan="mensuel" />
        </div>
        */}

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-secondary-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Garantie Satisfaction 30 jours
            </h3>
            <p className="text-white/80 mb-6">
              Nous sommes convaincus que vous allez adorer La Forge Fitness. 
              Si ce n&apos;est pas le cas, nous vous remboursons intégralement sous 30 jours.
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/60">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Offres flexibles
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Coaching inclus
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Support 24/7
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 