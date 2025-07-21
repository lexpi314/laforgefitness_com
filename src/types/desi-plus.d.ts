// Types pour l'intégration Desi+ (système d'abonnement)
export interface DesiPlusConfig {
  apiKey: string;
  environment: 'production' | 'sandbox';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  features: string[];
  recommended?: boolean;
}

export interface SubscribeFormProps {
  planId: string;
  onSuccess?: (subscription: any) => void;
  onError?: (error: Error) => void;
  className?: string;
}

export interface PricingTableProps {
  plan: 'mensuel' | 'annuel';
  plans?: PricingPlan[];
  className?: string;
}

// Déclaration des composants Desi+ (à adapter selon la vraie API)
declare module 'desi-plus' {
  export const SubscribeForm: React.FC<SubscribeFormProps>;
  export const PricingTable: React.FC<PricingTableProps>;
  export const DesiPlusProvider: React.FC<{
    config: DesiPlusConfig;
    children: React.ReactNode;
  }>;
} 