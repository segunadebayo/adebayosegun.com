import { allSnippets } from '.contentlayer/data';
import { useMemo } from 'react';
import { getSnippetCategories } from './contentlayer-utils';
import search from './match-sorter';
import useSearchParams from './use-search-params';

export default function useSnippetSearch() {
  const { setParams, searchString, addFilter, removeFilter, filters } = useSearchParams();

  const results = useMemo(() => {
    return search(allSnippets, ['title', 'description', 'category'], searchString);
  }, [searchString]);

  const resultsByCategories = useMemo(() => {
    if (filters.length === 0) return results;
    return results.filter((result) => result.categories.some((cat) => filters.includes(cat)));
  }, [results, filters]);

  return {
    isEmptyResult: results.length === 0,
    results: resultsByCategories,
    setParams,
    addCategory: addFilter,
    removeCategory: removeFilter,
    defaultValue: searchString || '',
    categories: getSnippetCategories(results),
    allCategories: getSnippetCategories(),
    filters,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}
