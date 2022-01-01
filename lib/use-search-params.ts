import { useUpdateEffect } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDebounce } from './debounce';
import { addQuery, getQueries, removeQuery } from './router-utils';

export default function useSearchParams() {
  const router = useRouter();
  const query = getQueries(router);
  const searchString = decodeURI(query.q?.toString() ?? '');
  const [tags, setTags] = useState<string[]>([]);

  useUpdateEffect(() => {
    if (tags.length === 0) {
      removeQuery(router, 'tags');
    } else {
      addQuery(router, 'tags', tags);
    }
  }, [tags]);

  const setParams = useDebounce((value: string) => {
    value = value.replace(/\s+/g, ' ').trim();
    if (value === '') {
      removeQuery(router, 'q');
    } else {
      addQuery(router, 'q', encodeURI(value));
    }
  }, 200);

  const addTag = (tag: string) => {
    if (tags.includes(tag)) return;
    setTags((prev) => [...prev, tag]);
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  return {
    setParams,
    searchString,
    tags: (query.tags ?? []) as string[],
    removeTag,
    setTags,
    addTag,
  };
}
