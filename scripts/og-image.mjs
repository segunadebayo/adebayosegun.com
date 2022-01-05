import { allBlogs } from '.contentlayer/data';
import fs from 'fs';
import path from 'path';
import playwright from 'playwright-aws-lambda';

function getBasePath() {
  const base =
    process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://adebayosegun.com';
  return path.join(base, 'og-image');
}

function getUrl(basePath, data) {
  const { title, tags, readingTime, publishedAt } = data;

  const url = new URL(basePath);
  url.searchParams.append('title', title);

  if (tags) {
    url.searchParams.append('tags', tags.join(','));
  }
  if (readingTime) {
    url.searchParams.append('readingTime', readingTime);
  }
  if (publishedAt) {
    url.searchParams.append('date', publishedAt);
  }

  return url.toString();
}

function toFileName(title) {
  return title
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

async function generate() {
  const basePath = getBasePath();

  try {
    fs.statSync(imagePath);
    return publicPath;
  } catch (error) {
    // file does not exists, so we create it
  }

  for (let i = 0; i < allBlogs.length; i++) {
    const blog = allBlogs[i];

    try {
      const browser = await playwright.launchChromium({ headless: true });
      const page = await browser.newPage();
      await page.setViewportSize({ width: 1200, height: 630 });

      const url = getUrl(basePath, {
        title: blog.title,
        tags: blog.tags,
        readingTime: blog.readingTime.text,
        publishedAt: new Date(blog.publishedAt).toDateString(),
      });

      await page.goto(url, { waitUntil: 'networkidle' });

      const fileName = toFileName(blog.title);
      const imagePath = path.join('public', 'static', 'images', 'og', `${fileName}.png`);

      await page.screenshot({ type: 'png', path: imagePath });
      console.log('✓ Generated open-graph image', `\`${imagePath}\``);

      await browser.close();
    } catch (error) {
      console.log(error);
    }
  }
}

generate();
