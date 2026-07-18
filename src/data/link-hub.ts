export interface LinkItem {
  label: string;
  description?: string;
  href: string;
  kind: 'internal' | 'external' | 'email';
  featured?: boolean;
}

export interface LinkGroup {
  heading: string;
  description?: string;
  links: LinkItem[];
}

export const personalLinkGroups: LinkGroup[] = [
  {
    heading: 'Explore',
    links: [
      {
        label: 'View selected work',
        description: 'Infrastructure, automation, embedded hardware, and operational systems.',
        href: 'https://samjolley.com/work/',
        kind: 'internal',
        featured: true,
      },
      {
        label: 'Building the Tempest Dux',
        description: 'A split ergonomic keyboard with a custom PCB and integrated trackball.',
        href: 'https://samjolley.com/writing/building-the-tempest-dux/',
        kind: 'internal',
      },
      {
        label: 'Read my writing',
        description: 'Practical notes on engineering, infrastructure, and operational security.',
        href: 'https://samjolley.com/writing/',
        kind: 'internal',
      },
      {
        label: 'Work with me through ZeroBeatLabs',
        description: 'Human-reviewed reporting workflows and practical web systems.',
        href: 'https://zerobeatlabs.org/',
        kind: 'external',
      },
    ],
  },
  {
    heading: 'Professional profiles',
    links: [
      { label: 'Sam Jolley on GitHub', href: 'https://github.com/samjolley', kind: 'external' },
      { label: 'Sam Jolley on LinkedIn', href: 'https://www.linkedin.com/in/samjolley', kind: 'external' },
    ],
  },
  {
    heading: 'Technical resources I recommend',
    description: 'A few strong starting points for the tools and systems behind my projects.',
    links: [
      {
        label: 'Introduction to ZMK',
        description: 'Official documentation for the wireless keyboard firmware.',
        href: 'https://zmk.dev/docs',
        kind: 'external',
      },
      {
        label: 'Getting Started in KiCad',
        description: 'The official project-to-PCB workflow guide.',
        href: 'https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html',
        kind: 'external',
      },
      {
        label: 'How NAT traversal works',
        description: 'Tailscale\'s excellent engineering explanation of peer-to-peer connectivity.',
        href: 'https://tailscale.com/blog/how-nat-traversal-works',
        kind: 'external',
      },
    ],
  },
];
