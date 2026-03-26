import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { defineCollection, defineConfig, s } from 'velite';
import { toKebabCase } from './lib/string-utils';
import siteConfig from './site.config';

const editUrl = siteConfig.repo.editUrl;

function makeTweetUrl(collection: string, slug: string, title: string) {
  return `https://twitter.com/intent/tweet?${new URLSearchParams({
    url: `https://adebayosegun.com/${collection}/${slug}`,
    text: `I just read "${title}" by @thesegunadebayo\n\n`,
  })}`;
}

const blogs = defineCollection({
  name: 'Blog',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      featured: s.boolean().optional().default(false),
      title: s.string(),
      publishedAt: s.string(),
      description: s.string(),
      image: s.string(),
      tags: s.array(s.string()).optional().default([]),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => {
      const slug = toKebabCase(data.title);
      return {
        featured: data.featured,
        title: data.title,
        publishedAt: data.publishedAt,
        description: data.description,
        image: data.image,
        tags: data.tags,
        body: data.body,
        slug,
        readingTime: {
          text: `${Math.ceil(data.metadata.readingTime)} min read`,
          minutes: data.metadata.readingTime,
          words: data.metadata.wordCount,
        },
        editUrl: `${editUrl}blog/${slug}.mdx`,
        tweetUrl: makeTweetUrl('blog', slug, data.title),
        ogImageUrl: `https://adebayosegun.com/static/images/og/${slug}.png`,
      };
    }),
});

const talks = defineCollection({
  name: 'Talk',
  pattern: 'talk/*.mdx',
  schema: s
    .object({
      featured: s.boolean().optional().default(false),
      format: s.string().optional(),
      title: s.string(),
      description: s.string(),
      publishedAt: s.string(),
      image: s.string(),
      url: s.string(),
      host: s.string().optional(),
      tags: s.array(s.string()),
    })
    .transform((data) => {
      const slug = toKebabCase(data.title);
      return {
        featured: data.featured,
        format: data.format,
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        image: data.image,
        url: data.url,
        host: data.host,
        tags: data.tags,
        slug,
        editUrl: `${editUrl}talk/${slug}.mdx`,
        tweetUrl: makeTweetUrl('talk', slug, data.title),
      };
    }),
});

const newsletters = defineCollection({
  name: 'Newsletter',
  pattern: 'newsletter/*.mdx',
  schema: s
    .object({
      title: s.string(),
      publishedAt: s.string(),
      description: s.string(),
      image: s.string(),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => {
      const slug = toKebabCase(data.title);
      return {
        title: data.title,
        publishedAt: data.publishedAt,
        description: data.description,
        image: data.image,
        body: data.body,
        slug,
        readingTime: {
          text: `${Math.ceil(data.metadata.readingTime)} min read`,
          minutes: data.metadata.readingTime,
          words: data.metadata.wordCount,
        },
        editUrl: `${editUrl}newsletter/${slug}.mdx`,
        tweetUrl: makeTweetUrl('newsletter', slug, data.title),
      };
    }),
});

const snippets = defineCollection({
  name: 'Snippet',
  pattern: 'snippet/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      logo: s.string(),
      categories: s.array(s.string()).optional().default([]),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => {
      const slug = toKebabCase(data.title);
      return {
        title: data.title,
        description: data.description,
        logo: data.logo,
        categories: data.categories,
        body: data.body,
        slug,
        readingTime: {
          text: `${Math.ceil(data.metadata.readingTime)} min read`,
          minutes: data.metadata.readingTime,
          words: data.metadata.wordCount,
        },
        editUrl: `${editUrl}snippet/${slug}.mdx`,
        tweetUrl: makeTweetUrl('snippet', slug, data.title),
      };
    }),
});

const projects = defineCollection({
  name: 'Project',
  pattern: 'project/*.mdx',
  schema: s
    .object({
      featured: s.boolean().optional().default(false),
      title: s.string(),
      description: s.string().optional(),
      github: s.string().optional(),
      website: s.string().optional(),
      metadata: s.any().optional(),
      image: s.string().optional(),
      objectPosition: s.string().optional(),
      body: s.mdx(),
    })
    .transform((data) => {
      const slug = toKebabCase(data.title);
      return {
        featured: data.featured,
        title: data.title,
        description: data.description,
        github: data.github,
        website: data.website,
        metadata: data.metadata,
        image: data.image,
        objectPosition: data.objectPosition,
        body: data.body,
        slug,
        editUrl: `${editUrl}project/${slug}.mdx`,
        tweetUrl: makeTweetUrl('project', slug, data.title),
      };
    }),
});

const testimonials = defineCollection({
  name: 'Testimonial',
  pattern: 'testimonial/*.md',
  schema: s.object({
    featured: s.boolean().optional().default(false),
    image: s.string(),
    name: s.string(),
    title: s.string(),
    source: s.enum(['twitter', 'linkedin']),
    body: s.markdown(),
  }),
});

export default defineConfig({
  root: 'data',
  output: {
    data: '.velite',
    assets: 'public/static/generated',
    base: '/static/generated/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { blogs, talks, newsletters, snippets, projects, testimonials },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3', 'h4', 'h5', 'h6'],
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
