import { useUpdateEffect } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDebounce } from './debounce';
import { addQuery, removeQuery } from './router-utils';

export default function useSearchParams() {
  const router = useRouter();
  const query = router.query;
  const searchString = decodeURI(query.q?.toString() ?? '');
  const [filters, setFilters] = useState<string[]>([]);

  useUpdateEffect(() => {
    if (filters.length === 0) {
      removeQuery(router, 'filter');
    } else {
      addQuery(router, 'filter', filters);
    }
  }, [filters]);

  const setParams = useDebounce((value: string) => {
    value = value.replace(/\s+/g, ' ').trim();
    if (value === '') {
      removeQuery(router, 'q');
    } else {
      addQuery(router, 'q', encodeURI(value));
    }
  }, 200);

  const addFilter = (tag: string) => {
    if (filters.includes(tag)) return;
    setFilters((prev) => [...prev, tag]);
  };

  const removeFilter = (tag: string) => {
    setFilters((prev) => prev.filter((t) => t !== tag));
  };

  return {
    setParams,
    searchString,
    filters: toArray(query.filter),
    removeFilter,
    setFilters,
    addFilter,
    hasFilter: filters.length > 0,
    hasQuery: searchString !== '',
  };
}

function toArray(value: string | string[] | undefined) {
  const split = value?.toString().split(',') ?? [];
  if (split.length === 1) return split[0];
  return split;
}
