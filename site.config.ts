const urls = {
  repo: 'https://github.com/segunadebayo/adebayosegun.com',
  get editUrl() {
    return `${this.repo}/edit/main/data/`;
  },
  website: 'https://adebayosegun.com',
  relative(url: string) {
    return urls.website + url;
  }
};

const siteConfig = {
  name: 'Segun Adebayo',
  image: urls.relative('/static/images/banner.png'),
  type: 'website',
  title:
    'Segun Adebayo (aka Sage) - Product Designer, UI & Design Systems Engineer, Software Developer',
  description:
    'UI Engineer passionate about design systems, state machines, accessibility, DX and Rust.',
  siteUrl: urls.website,
  profiles: {
    github: 'https://github.com/segunadebayo',
    twitter: 'https://twitter.com/thesegunadebayo',
    linkedin: 'https://linkedin.com/in/thesegunadebayo',
    email: 'mailto:sage@adebayosegun.com'
  },
  repo: {
    url: urls.repo,
    editUrl: urls.editUrl
  },
  twitter: {
    handle: '@thesegunadebayo',
    site: '@thesegunadebayo',
    cardType: 'summary_large_image'
  },
  ogImages: [
    { url: urls.relative('/og-image.png'), width: 1240, height: 480 },
    { url: urls.relative('/twitter-og-image.png'), width: 1012, height: 506 }
  ]
};

export default siteConfig;
