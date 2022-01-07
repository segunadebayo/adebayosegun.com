import { NextRouter } from 'next/router';

export function addQuery(router: NextRouter, key: string, value: string | string[]) {
  const { pathname, query } = router;
  const newQuery = {
    ...query,
    [key]: value.toString(),
  };
  router.replace({ pathname, query: newQuery }, undefined, { scroll: false });
}

export function removeQuery(router: NextRouter, key: string) {
  const { pathname, query } = router;
  const newQuery = { ...query };
  delete newQuery[key];
  router.replace({ pathname, query: newQuery }, undefined, { scroll: false });
}

export function getAbsoluteURL(path: string) {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  return baseURL + path;
}
