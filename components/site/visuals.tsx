/* oxlint-disable next/no-img-element -- Optimized local editorial assets with explicit dimensions. */
const visuals = {
  home: [
    'home-business',
    'Businesswoman working in a contemporary city office',
  ],
  'home-business': [
    'business-diverse',
    'Three colleagues collaborating in a contemporary design workshop',
  ],
  'home-wellness': [
    'employee-editorial',
    'Professional using a phone at a city café',
  ],
  business: [
    'business-workshop',
    'Entrepreneur and colleague in a furniture workshop',
  ],
  payouts: [
    'payouts-logistics',
    'Supplier orders and delivery materials in a distribution studio',
  ],
  payroll: [
    'payroll-planning',
    'Overhead view of a business planning desk with documents and a laptop',
  ],
  'embedded-finance': [
    'enterprise-city',
    'Illustrative South African coastal business district and harbour at blue hour',
  ],
  employees: [
    'employees-city',
    'Professional leaving an office into a sunlit city street',
  ],
  'financial-wellness': [
    'wellness-still-life',
    'A quiet home tabletop with a journal, phone and houseplant',
  ],
  platform: [
    'platform-devices',
    'Unbranded desktop, laptop and tablet hardware in a studio setting',
  ],
  developers: [
    'developers-diverse',
    'Two engineers working together in a technology studio',
  ],
  security: [
    'security-network',
    'Close view of fibre optic cables and professional network equipment',
  ],
  partners: [
    'partners-diverse',
    'Three senior business professionals in a collaborative meeting',
  ],
} as const;
export function Visual({
  name,
  priority = false,
}: {
  name: string;
  priority?: boolean;
}) {
  if (!Object.hasOwn(visuals, name)) return null;
  const [image, description] = visuals[name as keyof typeof visuals];
  const caption =
    name === 'security' || name === 'platform'
      ? 'AI-generated editorial illustration. Not PayMint’s actual facilities or platform.'
      : [
            'payouts',
            'payroll',
            'embedded-finance',
            'financial-wellness',
          ].includes(name)
        ? 'AI-generated editorial illustration.'
        : 'AI-generated editorial image. Not actual PayMint customers or staff.';
  return (
    <figure className={`image-visual human-visual visual-asset-${name}`}>
      <div className="visual-image-wrap">
        <img
          src={`/images/${image}.webp`}
          alt={`Illustrative scene: ${description}`}
          width="1536"
          height="1024"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
