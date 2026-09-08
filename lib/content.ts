export const interests = [
  'Business payouts',
  'Payroll',
  'Embedded finance',
  'Employee financial wellness',
  'API integration',
  'Partnership',
  'Corporate enquiry',
  'Careers',
  'Other',
];
export const nav = [
  {
    title: 'Products',
    links: [
      ['Payouts', '/payouts'],
      ['Payroll', '/payroll'],
      ['Embedded Finance', '/embedded-finance'],
      ['Financial Wellness', '/financial-wellness'],
    ],
  },
  {
    title: 'Solutions',
    links: [
      ['For Businesses', '/business'],
      ['For Employees', '/employees'],
      ['Partnership Enquiries', '/partners'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About PayMint', '/about'],
      ['Leadership', '/about#leadership'],
      ['Technology Background', '/platform'],
      ['Integration Enquiries', '/developers'],
      ['Security Enquiries', '/security'],
    ],
  },
];
export type Page = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  cta: string;
  interest: string;
  visual: string;
  label: string;
  heading: string;
  intro: string;
  features: [string, string][];
  source?: { label: string; url: string };
};
export const pages: Record<string, Page> = {
  business: {
    eyebrow: 'FOR SMEs & EMPLOYERS',
    title: 'Supporting your business.',
    accent: 'Empowering your people.',
    description:
      'Payouts, embedded finance and employee financial wellness for South African businesses and SMEs.',
    cta: 'Talk to PayMint',
    interest: 'Business payouts',
    visual: 'business',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Financial services for business needs.',
    intro:
      'PayMint South Africa focuses on payment infrastructure and access to finance for SMEs and employers.',
    features: [
      [
        'Payroll payments',
        'Payment infrastructure for employers paying their teams.',
      ],
      [
        'Supplier payments',
        'Payout solutions for the suppliers your business works with.',
      ],
      [
        'Embedded finance',
        'SME loans and salary advances within business workflows.',
      ],
      [
        'Employee financial wellness',
        'Early wage access and financial tools focused on income, spending and goals.',
      ],
    ],
  },
  payouts: {
    eyebrow: 'PAYOUTS INFRASTRUCTURE',
    title: 'Payments for your business.',
    accent: 'Payroll and suppliers.',
    description:
      'PayMint South Africa\u2019s payout offering focuses on payroll and supplier payments for SMEs and employers.',
    cta: 'Discuss Your Payout Needs',
    interest: 'Business payouts',
    visual: 'business',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Keep the focus on your business.',
    intro:
      'Tell us about your payroll or supplier payment needs to learn more about PayMint\u2019s services.',
    features: [
      [
        'Payroll payouts',
        'Payment infrastructure for employers and their people.',
      ],
      [
        'Supplier payments',
        'Payout solutions for South African business supplier payments.',
      ],
    ],
  },
  payroll: {
    eyebrow: 'PAYROLL PAYMENTS',
    title: 'Supporting employers.',
    accent: 'Connecting people to their pay.',
    description:
      'Payroll payment infrastructure is part of PayMint South Africa\u2019s offering for SMEs and employers.',
    cta: 'Discuss Payroll Payments',
    interest: 'Payroll',
    visual: 'business',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Paying people is part of running a business.',
    intro:
      'Speak with PayMint about your payroll payment needs and the relevant service details.',
    features: [
      [
        'For employers',
        'A focus on the payroll payment needs of South African SMEs and businesses.',
      ],
      [
        'For employees',
        'Payroll payments sit alongside PayMint\u2019s focus on employee financial wellness.',
      ],
    ],
  },
  'embedded-finance': {
    eyebrow: 'EMBEDDED FINANCE',
    title: 'Access to finance.',
    accent: 'Within your business workflow.',
    description:
      'PayMint South Africa\u2019s embedded finance offering covers SME loans and salary advances.',
    cta: 'Enquire About Embedded Finance',
    interest: 'Embedded finance',
    visual: 'finance',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Finance for businesses and their people.',
    intro:
      'Contact PayMint to understand the relevant services and applicable terms.',
    features: [
      [
        'SME loans',
        'Embedded finance for the needs of small and medium-sized enterprises.',
      ],
      [
        'Salary advances',
        'Salary advances are part of PayMint South Africa\u2019s published embedded finance offering.',
      ],
    ],
  },
  employees: {
    eyebrow: 'FOR EMPLOYEES',
    title: 'Your earnings.',
    accent: 'Your financial wellbeing.',
    description:
      'Early wage access and financial wellness are central to PayMint South Africa\u2019s focus on employees.',
    cta: 'Talk to PayMint',
    interest: 'Employee financial wellness',
    visual: 'wellness',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Financial tools for everyday needs.',
    intro:
      'A focus on access to earnings and understanding income, spending and financial goals.',
    features: [
      [
        'Early Wage Access',
        'Learn more about access to earned wages and the applicable terms.',
      ],
      [
        'Financial wellness',
        'Tools focused on managing income, spending and goals through a mobile experience.',
      ],
    ],
  },
  'financial-wellness': {
    eyebrow: 'FINANCIAL WELLNESS',
    title: 'Understand your money.',
    accent: 'Focus on your goals.',
    description:
      'PayMint South Africa describes financial wellness tools for managing income, spending and goals in one app.',
    cta: 'Enquire About Financial Wellness',
    interest: 'Employee financial wellness',
    visual: 'wellness',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Financial wellbeing, beyond a payday.',
    intro:
      'Speak with PayMint to learn more about the financial wellness offering.',
    features: [
      [
        'Income',
        'Financial wellness tools focused on understanding and managing income.',
      ],
      [
        'Spending',
        'A focus on day-to-day spending as part of the financial wellness experience.',
      ],
      [
        'Goals',
        'Financial goals form part of PayMint\u2019s approach to financial wellness.',
      ],
      [
        'Early wage access',
        'PayMint South Africa also offers early wage and salary advance enquiries.',
      ],
    ],
  },
  platform: {
    eyebrow: 'PAYMINT TECHNOLOGY',
    title: 'An established technology foundation.',
    accent: 'A South African focus.',
    description:
      'PayMint\u2019s Egypt website describes business dashboards, a mobile financial experience and APIs. Speak with our team about technology requirements for South Africa.',
    cta: 'Discuss Your Requirements',
    interest: 'Corporate enquiry',
    visual: 'technology',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'PayMint\u2019s technology background.',
    intro:
      'These capabilities are described on PayMint\u2019s Egypt website. They are group background, not a list of confirmed South African platform features.',
    features: [
      [
        'Business dashboard',
        'The Egypt website describes a dashboard for managing payouts and viewing financial information.',
      ],
      [
        'Mobile experience',
        'The Egypt website describes a mobile app for accessing financial services.',
      ],
      [
        'APIs',
        'The Egypt website describes APIs for connecting business systems.',
      ],
    ],
    source: {
      label: 'PayMint Egypt website',
      url: 'https://paymint-eg.com/',
    },
  },
  developers: {
    eyebrow: 'INTEGRATION ENQUIRIES',
    title: 'Bring your questions.',
    accent: 'Let\u2019s discuss integration.',
    description:
      'PayMint\u2019s group website describes API integration. Contact the team to discuss your systems and requirements for South Africa.',
    cta: 'Talk to the Team',
    interest: 'API integration',
    visual: 'technology',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Start with your requirements.',
    intro:
      'South African integration details should be confirmed directly with PayMint.',
    features: [
      [
        'Your use case',
        'Tell us what your organisation needs to connect and which systems you currently use.',
      ],
      [
        'Technical questions',
        'Ask the team about relevant documentation and the integration options for your requirements.',
      ],
    ],
    source: {
      label: 'PayMint Egypt website',
      url: 'https://paymint-eg.com/',
    },
  },
  security: {
    eyebrow: 'SECURITY ENQUIRIES',
    title: 'Security questions deserve',
    accent: 'a clear conversation.',
    description:
      'Contact PayMint about the security and data-protection requirements relevant to your organisation and the services you are considering.',
    cta: 'Contact PayMint',
    interest: 'Corporate enquiry',
    visual: 'trust',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Published group information.',
    intro:
      'PayMint\u2019s Egypt website describes encryption, fraud monitoring and PCI DSS certification. These are statements about PayMint\u2019s published group information, not South African licensing or certification claims.',
    features: [
      [
        'Security & data protection',
        'Ask PayMint about the measures and responsibilities relevant to the service you are considering.',
      ],
      [
        'Certification scope',
        'Ask the team to confirm current evidence and the applicable scope of any certification.',
      ],
    ],
    source: {
      label: 'PayMint Egypt website',
      url: 'https://paymint-eg.com/',
    },
  },
  partners: {
    eyebrow: 'PARTNERSHIP ENQUIRIES',
    title: 'A shared ambition.',
    accent: 'Start a conversation.',
    description:
      'Interested in partnering with PayMint South Africa? Tell us about your organisation and the opportunity you would like to explore.',
    cta: 'Discuss a Partnership',
    interest: 'Partnership',
    visual: 'services',
    label: 'PAYMINT SOUTH AFRICA',
    heading: 'Let\u2019s explore the opportunity.',
    intro:
      'PayMint\u2019s South African reference invites conversations about partnerships.',
    features: [
      [
        'Your organisation',
        'Introduce your business and the people or organisations you serve.',
      ],
      [
        'Your opportunity',
        'Share the collaboration you would like to discuss with the PayMint team.',
      ],
    ],
  },
};
export function getPage(slug: string): Page | undefined {
  return Object.hasOwn(pages, slug) ? pages[slug] : undefined;
}
