import React from 'react';
import { NextSeo } from 'next-seo';
import siteConfig from 'site.config';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  post?: {
    date?: string;
    tags?: string[];
  };
};

export default function SEO(props: SEOProps) {
  const { title, description, post, image } = props;
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
        title,
        description,
        article: post ? { publishedTime: post.date, tags: post.tags } : undefined,
      }}
      titleTemplate={siteConfig.titleTemplate}
    />
  );
}
