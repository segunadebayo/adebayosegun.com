import { allTalks } from '.contentlayer/data';
import { useMemo } from 'react';
import { getTalkTags } from './contentlayer-utils';
import search from './match-sorter';
import useSearchParams from './use-search-params';

export default function useTalkSearch() {
  const { setParams, searchString, addTag, removeTag, tags } = useSearchParams();

  const results = useMemo(() => {
    return search(allTalks, ['title', 'description', 'tags', 'host'], searchString);
  }, [searchString]);

  const resultsByTags = useMemo(() => {
    if (tags.length === 0) return results;
    return results.filter((result) => result.tags.some((tag) => tags.includes(tag)));
  }, [results, tags]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByTags,
    setParams,
    addTag,
    removeTag,
    defaultValue: searchString || '',
    tags: getTalkTags(resultsByTags),
    allTags: getTalkTags(),
  };
}
