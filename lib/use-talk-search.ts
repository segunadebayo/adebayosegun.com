import { allTalks } from '.contentlayer/data';
import { matchSorter } from 'match-sorter';
import { useMemo } from 'react';
import { getTalkTags } from './contentlayer-utils';
import search from './match-sorter';
import useSearchParams from './use-search-params';

export default function useTalkSearch() {
  const { setParams, searchString } = useSearchParams();

  const results = useMemo(() => {
    return search(allTalks, ['title', 'description', 'tags', 'host'], searchString);
  }, [searchString]);

  return {
    isEmptyResult: results.length === 0,
    results,
    setParams,
    defaultValue: searchString || '',
    tags: getTalkTags(results),
    allTags: getTalkTags(),
    resultsByTags: (tags: string[]) => {
      const result: any[] = [];
      if (tags.length === 0) {
        return results;
      }
      for (const tag of tags) {
        result.push(matchSorter(results, tag, { keys: ['tags'] }));
      }
      return result;
    },
  };
}
