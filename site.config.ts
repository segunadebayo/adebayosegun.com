export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'Segun Adebayo',
  repo: 'https://github.com/segunadebayo/adebayosegun.com',
  editUrl: 'https://github.com/segunadebayo/adebayosegun.com/edit/main/data/',
  website: 'https://adebayosegun.com',
  title:
    'Segun Adebayo (aka Sage) - UI Engineer (Design Systems), Software Developer and Product Designer',
  description:
    'UI Engineer passionate about design systems, state machines, accessibility, DX and Rust.',
  image: 'https://adebayosegun.com/static/images/banner.png',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - Segun Adebayo',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/segunadebayo',
    twitter: 'https://twitter.com/thesegunadebayo',
    linkedin: 'https://linkedin.com/in/thesegunadebayo',
    email: 'mailto:sage@adebayosegun.com',
  },
  repo: {
    url: shared.repo,
    editUrl: shared.editUrl,
  },
  twitter: {
    handle: '@thesegunadebayo',
    site: '@thesegunadebayo',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://adebayosegun.com/static/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Segun Adebayo (aka Sage) - UI Engineer (Design Systems), Software Developer and Product Designer',
      },
    ],
  },
};

export default siteConfig;
