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

export function getQueries(router: NextRouter): Record<string, string | string[]> {
  const url = new URL(`https://adebayosegun.com${router.asPath}`);

  if (url.search.length <= 0) {
    return {};
  }

  const params = new URLSearchParams(url.search);
  const query = Object.fromEntries(params.entries());

  return Object.keys(query).reduce((acc, key) => {
    const val = query[key];
    const split = val.split(',');
    acc[key] = split.length > 1 ? split : val;
    return acc;
  }, {});
}
