import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    remotePatterns: [
      'pbs.twimg.com',
      'vercel.com',
      'i.ytimg.com',
      'images.unsplash.com',
      'og-image-react-egghead.vercel.app',
      'images.ctfassets.net',
      'secure.meetupstatic.com',
      'cdn.changelog.com',
      'speakeasyjs.com',
      'opengraph.githubassets.com',
    ].map((hostname) => ({ hostname })),
  },
})
