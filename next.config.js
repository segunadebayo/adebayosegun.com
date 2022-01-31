const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer()({
  swcMinify: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'vercel.com',
      'i.ytimg.com',
      'images.unsplash.com',
      'og-image-react-egghead.vercel.app',
      'images.ctfassets.net',
      'secure.meetupstatic.com',
      'cdn.changelog.com',
      'speakeasyjs.com',
    ],
  },
});
