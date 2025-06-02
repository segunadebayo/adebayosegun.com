import { writeFileSync } from 'fs';
import RSS from 'rss';
import allBlogs from '../.contentlayer/generated/Blog/_index.json' assert { type: 'json' };

async function main() {  
  const feed = new RSS({
    title: 'Segun Adebayo',
    site_url: 'https://adebayosegun.com', 
    feed_url: 'https://adebayosegun.com/feed.xml',
  });

  allBlogs.map((blog) => {
    feed.item({
      title: blog.title,
      url: `https://adebayosegun.com/blog/${blog.slug}`,
      date: blog.publishedAt,
      description: blog.description,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

main();
