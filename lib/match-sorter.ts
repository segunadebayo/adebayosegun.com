/**
 * Credits to Kent C Dodds for this function
 * Source: https://github.com/kentcdodds/kentcdodds.com/blob/ce861b814adec43b2e6636ad0ac682640faed4f9/app/utils/blog.ts
 */

import { matchSorter, MatchSorterOptions } from 'match-sorter';

export default function search<T extends Record<string, any>>(
  items: T[],
  keys: string[],
  searchString: string,
) {
  const searches = new Set(searchString.split(' '));

  const options: MatchSorterOptions = {
    keys: keys.map((key) => ({ key, threshold: matchSorter.rankings.CONTAINS })),
  };

  const wordOptions: MatchSorterOptions = {
    keys: options.keys.map((key) => {
      return {
        //@ts-ignore
        ...key,
        maxRanking: matchSorter.rankings.CASE_SENSITIVE_EQUAL,
        threshold: matchSorter.rankings.WORD_STARTS_WITH,
      };
    }),
  };

  const allResults = matchSorter(items, searchString, options);

  if (searches.size < 2) {
    return allResults as T[];
  }

  const [firstWord, ...restWords] = searches.values();

  let wordResults = matchSorter(items, firstWord, wordOptions);

  for (const word of restWords) {
    const searchResult = matchSorter(items, word, wordOptions);
    wordResults.push(...searchResult);
  }

  const results = [...allResults, ...wordResults].filter(
    (item, index, self) =>
      index === self.findIndex((t) => (t as any).title === (item as any).title),
  );

  return results as T[];
}
