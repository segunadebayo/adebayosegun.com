import { allBlogs } from '.contentlayer/data';
import { useMemo } from 'react';
import { getBlogCategories } from './contentlayer-utils';
import search from './match-sorter';
import useSearchParams from './use-search-params';

export default function useBlogSearch() {
  const { setParams, searchString } = useSearchParams();

  const results = useMemo(() => {
    return search(allBlogs, ['title', 'description', 'category', 'host'], searchString);
  }, [searchString]);

  return {
    isEmptyResult: results.length === 0,
    results,
    setParams,
    defaultValue: searchString || '',
    tags: getBlogCategories(results),
  };
}
