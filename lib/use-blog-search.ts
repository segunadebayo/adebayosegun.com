import { Blog, allBlogs } from 'contentlayer/generated';
import { useMemo } from 'react';
import { getBlogTags } from './contentlayer-utils';
import search from './match-sorter';
import useSearchParams from './use-search-params';

export default function useBlogSearch() {
  const { setParams, searchString, addFilter, removeFilter, filters } = useSearchParams();

  const results = useMemo(() => {
    return search(allBlogs, ['title', 'description', 'tags', 'host'], searchString);
  }, [searchString]);

  const resultsByTags = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter((result) => result.tags.some((cat) => filters.includes(cat)));
  }, [results, filters]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByTags.sort(byDate),
    setParams,
    addTag: addFilter,
    removeTag: removeFilter,
    defaultValue: searchString || '',
    tags: getBlogTags(results),
    allTags: getBlogTags(),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}

function byDate(a: Blog, b: Blog) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}
