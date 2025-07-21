import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>La Forge Fitness - Forgez votre corps, sculptez votre esprit</title>
        <meta 
          name="description" 
          content="La Forge Fitness - Votre destination pour un fitness d'exception. Équipements haut de gamme, coaching personnalisé et communauté motivante à Paris." 
        />
        <meta name="keywords" content="salle de sport, fitness, musculation, Paris, coaching, abonnement gym" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/Logo-La-Forge-Final.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laforge-fitness.com/" />
        <meta property="og:title" content="La Forge Fitness - Forgez votre corps, sculptez votre esprit" />
        <meta property="og:description" content="La Forge Fitness - Votre destination pour un fitness d'exception. Équipements haut de gamme, coaching personnalisé et communauté motivante à Paris." />
        <meta property="og:image" content="/assets/Logo-Typo-La-Forge-Final.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://laforge-fitness.com/" />
        <meta property="twitter:title" content="La Forge Fitness - Forgez votre corps, sculptez votre esprit" />
        <meta property="twitter:description" content="La Forge Fitness - Votre destination pour un fitness d'exception. Équipements haut de gamme, coaching personnalisé et communauté motivante à Paris." />
        <meta property="twitter:image" content="/assets/Logo-Typo-La-Forge-Final.png" />

        {/* Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://use.typekit.net" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Header fixe */}
        <Header />
        
        {/* Contenu principal */}
        <main>
          <Hero />
          <Concept />
          <Services />
          <Pricing />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
} 