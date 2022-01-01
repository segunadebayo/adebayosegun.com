import React from 'react';
import { NextSeo } from 'next-seo';
import siteConfig from 'site.config';

type SEOProps = {
  title?: string;
  description?: string;
  post?: {
    date?: string;
    tags?: string[];
  };
};

export default function SEO(props: SEOProps) {
  const { title, description, post } = props;
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        article: post ? { publishedTime: post.date, tags: post.tags } : undefined,
      }}
      titleTemplate={siteConfig.titleTemplate}
    />
  );
}
