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
      ['Employee Financial Wellness', '/financial-wellness'],
    ],
  },
  {
    title: 'Solutions',
    links: [
      ['For Businesses', '/business'],
      ['For Employees', '/employees'],
      ['For Partners', '/partners'],
    ],
  },
  {
    title: 'Platform',
    links: [
      ['PayMint Business', '/platform#business'],
      ['PayMint Mobile', '/platform#mobile'],
      ['Developers', '/developers'],
      ['Security & Trust', '/security'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About PayMint', '/about'],
      ['Leadership', '/about#leadership'],
      ['Insights', '/insights'],
      ['Careers', '/careers'],
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
  visual: 'dashboard' | 'flow' | 'mobile' | 'network';
  label: string;
  heading: string;
  intro: string;
  features: [string, string][];
  steps?: [string, string][];
  note?: string;
};
export const pages: Record<string, Page> = {
  business: {
    eyebrow: 'FOR BUSINESSES',
    title: 'Move your business forward.',
    accent: 'Bring everyone with you.',
    description:
      'A connected financial operating platform for the people you employ, the suppliers you depend on and the next stage of your growth.',
    cta: 'Book a Business Demo',
    interest: 'Business payouts',
    visual: 'dashboard',
    label: 'YOUR FINANCIAL OPERATIONS, CONNECTED',
    heading: 'Less admin. More room to grow.',
    intro:
      'Bring everyday payment workflows together, with a clearer view of where your money needs to go.',
    features: [
      [
        'Business payouts',
        'Coordinate payroll, supplier and contractor payments through a single operating workflow.',
      ],
      [
        'Payroll, with people in mind',
        'Connect payroll processes to payouts and explore financial benefits for your workforce.',
      ],
      [
        'Supplier & bulk payments',
        'Organise multiple beneficiaries in a batch instead of managing each payment separately.',
      ],
      [
        'Contractors & gig workers',
        'Build payment workflows around flexible teams, projects and marketplace activity.',
      ],
      [
        'Embedded finance',
        'Explore partner-powered financial services in the context of your business.',
      ],
      [
        'Dashboard, reporting & controls',
        'Discuss approval roles, payment visibility and reports that fit your finance team.',
      ],
    ],
    note: 'South African implementation, payout channels and financial products are confirmed during onboarding.',
  },
  payouts: {
    eyebrow: 'PAYMINT PAYOUTS',
    title: 'One platform.',
    accent: 'Every kind of payday.',
    description:
      'From monthly salaries to supplier invoices and contractor payments, make moving money a connected part of your business.',
    cta: 'Explore Business Payouts',
    interest: 'Business payouts',
    visual: 'dashboard',
    label: 'PAYMENTS THAT FIT YOUR OPERATION',
    heading: 'One workflow. Many possibilities.',
    intro:
      'Built around the payout capabilities of PayMint’s existing platform, with South African delivery scoped to your requirements.',
    features: [
      [
        'Payroll payouts',
        'Turn approved payroll into a coordinated payment run for your team.',
      ],
      [
        'Supplier payments',
        'Keep beneficiary information and payment references organised.',
      ],
      [
        'Contractor payouts',
        'Support flexible work with repeatable payment processes.',
      ],
      [
        'Bulk payouts',
        'Prepare a batch, review the details and manage the payment run together.',
      ],
      [
        'Transaction tracking',
        'Follow payment status and identify items that need attention.',
      ],
      [
        'API integration',
        'Connect your existing systems to the payout workflow with the integration team.',
      ],
    ],
    steps: [
      ['Fund', 'Confirm the funding method and settlement requirements.'],
      [
        'Upload / Integrate',
        'Provide beneficiary and payment details through the agreed channel.',
      ],
      ['Review', 'Check the batch and complete the required approvals.'],
      ['Pay', 'Release the approved payment instructions.'],
      ['Track', 'Review statuses and reconcile the results.'],
    ],
  },
  payroll: {
    eyebrow: 'PAYMINT PAYROLL',
    title: 'Behind every payday,',
    accent: 'a person counting on it.',
    description:
      'Connect your payroll process to a clearer payout workflow, and put employee financial wellbeing at the heart of your operation.',
    cta: 'Book a Business Demo',
    interest: 'Payroll',
    visual: 'dashboard',
    label: 'FROM PAYROLL TO PEOPLE',
    heading: 'Make payday work better.',
    intro:
      'Bring HR, payroll and finance into a shared payment process without replacing every tool your team already uses.',
    features: [
      [
        'Connect your payroll system',
        'Scope an integration or agreed batch upload with your existing payroll provider.',
      ],
      [
        'Review before release',
        'Define the people responsible for preparing, reviewing and approving payment instructions.',
      ],
      [
        'See the payment journey',
        'Use payment status and reporting to support reconciliation and employee queries.',
      ],
      [
        'Extend employee benefits',
        'Explore Early Wage Access and financial wellness programmes alongside payroll.',
      ],
    ],
    note: 'PayMint complements payroll workflows. Local tax calculation, statutory filing and specific payroll integrations are not represented as available services.',
  },
  'embedded-finance': {
    eyebrow: 'EMBEDDED FINANCE',
    title: 'Financial opportunity.',
    accent: 'Built into the everyday.',
    description:
      'Connect businesses and employees with relevant financial services through the systems they already use.',
    cta: 'Explore Embedded Finance',
    interest: 'Embedded finance',
    visual: 'network',
    label: 'TECHNOLOGY MEETS FINANCIAL EXPERTISE',
    heading: 'Better access starts with connection.',
    intro:
      'PayMint brings the technology layer. Financial institutions and service providers bring the products, expertise and applicable permissions.',
    features: [
      [
        'SME finance',
        'Explore financing journeys embedded within business workflows, subject to a provider’s assessment and terms.',
      ],
      [
        'Early Wage Access',
        'Discuss employer-connected access to eligible earnings, with clear eligibility and product terms.',
      ],
      [
        'Employee financial products',
        'Bring relevant financial services closer to employees through their workplace.',
      ],
      [
        'Financial institution integrations',
        'Connect the platform to participating providers through an agreed technical and operating model.',
      ],
    ],
    steps: [
      ['Understand', 'Identify the business or employee need.'],
      ['Structure', 'Agree the provider, responsibilities and product terms.'],
      ['Integrate', 'Connect systems and validate the journey.'],
      ['Support', 'Establish servicing, reporting and escalation processes.'],
    ],
    note: 'These are partnership and solution areas. Product availability, eligibility, costs and terms depend on the employer, participating provider and South African implementation. No financing offer is made on this website.',
  },
  employees: {
    eyebrow: 'FOR EMPLOYEES',
    title: 'Your work moves life forward.',
    accent: 'Your money should too.',
    description:
      'A more connected financial experience, starting with getting paid and growing towards greater confidence with money.',
    cta: 'Explore Employee Financial Wellness',
    interest: 'Employee financial wellness',
    visual: 'mobile',
    label: 'BUILT AROUND REAL LIFE',
    heading: 'More than a payment. A possibility.',
    intro:
      'Our South African vision puts useful financial tools within reach through the workplace.',
    features: [
      [
        'Getting paid',
        'A clearer connection between your employer’s payment process and your earnings.',
      ],
      [
        'Access to earnings',
        'Explore how employer-connected payment services could fit your needs.',
      ],
      [
        'Early Wage Access',
        'Access to eligible earnings before a scheduled payday is a programme to discuss with your employer, subject to availability and terms.',
      ],
      [
        'Financial wellness',
        'A focus on understanding income, spending and financial choices.',
      ],
      [
        'A mobile financial experience',
        'PayMint’s existing mobile technology informs the South African product roadmap.',
      ],
      [
        'More possibilities ahead',
        'Cards, savings, bill payments and marketplace benefits are future opportunities, not announced South African services.',
      ],
    ],
    note: 'Employee access depends on employer participation and the products available in its programme. There is no South African app download or direct account opening offered here.',
  },
  'financial-wellness': {
    eyebrow: 'EMPLOYEE FINANCIAL WELLNESS',
    title: 'A stronger workforce.',
    accent: 'A healthier financial future.',
    description:
      'Help your people navigate the space between earning a salary and feeling in control of their financial lives.',
    cta: 'Discuss Employee Benefits',
    interest: 'Employee financial wellness',
    visual: 'mobile',
    label: 'WELLBEING BEYOND PAYDAY',
    heading: 'Start with what people need.',
    intro:
      'Work with PayMint to explore a practical financial wellness programme that fits your workforce.',
    features: [
      [
        'Clarity around earnings',
        'Help employees understand how they receive and access their pay.',
      ],
      [
        'Early Wage Access',
        'Explore employer-connected access to eligible earnings with transparent terms.',
      ],
      [
        'Everyday financial confidence',
        'Make room for tools that support income awareness and informed financial decisions.',
      ],
      [
        'A programme that can grow',
        'Consider future partner-powered services as needs and local product availability evolve.',
      ],
    ],
    note: 'Programme features and availability are agreed with the employer and relevant providers. This page does not promise credit approval or individual financial outcomes.',
  },
  platform: {
    eyebrow: 'THE PAYMINT PLATFORM',
    title: 'One connected platform.',
    accent: 'A world of possibilities.',
    description:
      'The technology connecting business operations, financial partners and the people at the other end of every payment.',
    cta: 'Explore the Platform',
    interest: 'API integration',
    visual: 'network',
    label: 'THE INFRASTRUCTURE BEHIND THE EXPERIENCE',
    heading: 'Connected by design.',
    intro:
      'Built on PayMint’s experience in digital payouts, business dashboards, mobile experiences and financial integrations.',
    features: [
      [
        'PayMint Business',
        'A central workspace for payout operations, reporting and payment visibility.',
      ],
      [
        'PayMint Mobile',
        'A mobile foundation for an employee-facing financial experience.',
      ],
      [
        'APIs & integrations',
        'Connect HR, payroll, ERP and custom systems through an agreed integration.',
      ],
      [
        'Bulk processing',
        'Organise payment instructions into manageable batches.',
      ],
      [
        'Roles & permissions',
        'Define preparation, approval and operational responsibilities.',
      ],
      [
        'Reporting & notifications',
        'Bring payment updates and operational information into the workflow.',
      ],
      [
        'Transaction monitoring',
        'Identify payment activity requiring operational review.',
      ],
      [
        'Financial partner connections',
        'Coordinate technology and service-provider responsibilities.',
      ],
    ],
    note: 'Illustrations show proposed workflows and sample data. Specific South African functionality, controls and integrations are confirmed in technical discovery.',
  },
  developers: {
    eyebrow: 'FOR DEVELOPERS',
    title: 'You build the experience.',
    accent: 'Let’s connect the finance.',
    description:
      'Bring payout and financial-service workflows into your product, with an integration approach shaped around your systems.',
    cta: 'Talk to Integration Team',
    interest: 'API integration',
    visual: 'flow',
    label: 'YOUR SYSTEMS. A CONNECTED FINANCIAL LAYER.',
    heading: 'Build around the way you work.',
    intro:
      'PayMint publicly describes API-driven integrations. Contact the team for documentation, access requirements and South African capability details.',
    features: [
      [
        'HR systems',
        'Connect employee lifecycle data to agreed payment and benefit workflows.',
      ],
      [
        'Payroll platforms',
        'Pass approved payroll instructions into the payout process.',
      ],
      [
        'ERP systems',
        'Link payable workflows with transaction status and reconciliation.',
      ],
      [
        'Marketplaces',
        'Design disbursement journeys for sellers and contractors.',
      ],
      [
        'Fintechs',
        'Explore a financial infrastructure integration for your product.',
      ],
      [
        'Custom enterprise systems',
        'Scope interfaces around your organisation’s controls and data model.',
      ],
    ],
    steps: [
      ['Discover', 'Share your use case, systems and operating requirements.'],
      [
        'Design',
        'Agree available capabilities, data mapping and responsibilities.',
      ],
      [
        'Validate',
        'Test expected outcomes and exception handling in the agreed environment.',
      ],
      [
        'Launch',
        'Complete readiness checks and establish operational support.',
      ],
    ],
    note: 'Public South African API specifications and endpoints are not provided here. Authentication, webhooks, environments, limits and service levels must be confirmed with the integration team.',
  },
  security: {
    eyebrow: 'SECURITY & TRUST',
    title: 'Trust is part of',
    accent: 'the infrastructure.',
    description:
      'A considered approach to protecting data, controlling access and understanding every stage of a financial workflow.',
    cta: 'Discuss Security Requirements',
    interest: 'Corporate enquiry',
    visual: 'network',
    label: 'A FOUNDATION FOR ENTERPRISE CONVERSATIONS',
    heading: 'Security starts with the design.',
    intro:
      'PayMint’s public materials describe encryption, fraud monitoring and PCI DSS certification. South African scope and current evidence should be reviewed directly with the team.',
    features: [
      [
        'Data protection & encryption',
        'PayMint describes encryption in its existing platform. Discuss the data flows, protection measures and retention requirements for your deployment.',
      ],
      [
        'Access control',
        'Define least-privilege access, approval responsibilities and account lifecycle requirements during solution design.',
      ],
      [
        'Transaction monitoring',
        'PayMint describes fraud monitoring. Confirm monitoring scope, review processes and escalation responsibilities.',
      ],
      [
        'Secure development',
        'Review development, testing and vulnerability-management practices as part of technical due diligence.',
      ],
      [
        'Infrastructure resilience',
        'Agree availability requirements, recovery processes and continuity expectations before implementation.',
      ],
      [
        'PCI DSS, in context',
        'PayMint’s Egypt website reports PCI DSS certification. Request the current evidence and applicable service scope; this is not a claim of South African certification or licensing.',
      ],
    ],
    note: 'No South African FSCA, NCR or SARB approval, licence or POPIA certification is asserted. Applicable obligations and the roles of PayMint and financial providers must be confirmed for each service.',
  },
  partners: {
    eyebrow: 'PARTNER WITH PAYMINT',
    title: 'Better together.',
    accent: 'Bigger possibilities.',
    description:
      'Bring your reach, financial expertise or technology. Together, we can make useful financial services more accessible.',
    cta: 'Become a Partner',
    interest: 'Partnership',
    visual: 'network',
    label: 'A CONNECTED ECOSYSTEM',
    heading: 'There is more than one way to build with us.',
    intro:
      'We welcome conversations with banks, financial institutions, employers, payroll companies, lenders, fintechs, HR platforms and enterprise technology providers.',
    features: [
      [
        'Distribution Partner',
        'Bring relevant financial capabilities to the businesses and people in your network.',
      ],
      [
        'Financial Partner',
        'Connect your financial products to business and employee journeys through an agreed provider model.',
      ],
      [
        'Technology Partner',
        'Integrate your platform with payment and financial-service workflows.',
      ],
    ],
    steps: [
      ['Find the fit', 'Align on the audience and opportunity.'],
      ['Shape the model', 'Agree responsibilities and commercial principles.'],
      ['Connect', 'Design and validate the integration.'],
      [
        'Grow together',
        'Launch within the agreed scope and evolve the relationship.',
      ],
    ],
    note: 'Partnership models are invitations to collaborate. No South African financial partners are announced or implied.',
  },
};
