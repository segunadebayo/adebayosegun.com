import type { NextApiRequest, NextApiResponse } from 'next';
import chromium from 'chrome-aws-lambda';
import playwright from 'playwright-core';
import { getAbsoluteURL } from '../lib/router-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const browser = await playwright.chromium.launch({
    executablePath:
      process.env.NODE_ENV !== 'development' ? await chromium.executablePath : undefined,
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    headless: process.env.NODE_ENV !== 'development' ? chromium.headless : true,
  });

  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  });

  const qs = new URLSearchParams();
  for (const key in req.query) {
    qs.set(key, req.query[key].toString());
  }

  const path = getAbsoluteURL(`/open-graph?${qs.toString()}`);

  await page.goto(path, {
    timeout: 15 * 1000,
    waitUntil: 'networkidle',
  });

  const data = await page.screenshot({
    type: 'png',
  });

  await browser.close();

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/png');
  res.end(data);
}
