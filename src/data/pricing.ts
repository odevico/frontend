export interface PricingPlan {
  name: string;
  audience: string;
  priceMonthly: string;
  priceAnnual: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

// Placeholder pricing for layout only. Not an approved price list.
export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    audience: 'For individuals and small content teams.',
    priceMonthly: '$29',
    priceAnnual: '$24',
    priceNote: 'per month',
    features: [
      'Limited project management',
      'Basic media asset records',
      'Language management',
      'Subtitle tracking',
      'Basic workflow visibility',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    audience: 'For localization agencies and growing teams.',
    priceMonthly: '$99',
    priceAnnual: '$82',
    priceNote: 'per month',
    features: [
      'Increased project capacity',
      'Multiple team members',
      'Translation and dubbing coordination',
      'Review and approval workflows',
      'Revision tracking',
      'Advanced project visibility',
    ],
    cta: 'Choose Professional',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    audience: 'For broadcasting companies and large media organizations.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    priceNote: 'tailored to your organization',
    features: [
      'Custom project capacity',
      'Enterprise team management',
      'Customizable workflows',
      'Advanced permissions',
      'Organization-level governance',
      'Dedicated support options',
    ],
    cta: 'Contact Sales',
  },
];
