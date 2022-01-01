import { useRouter } from 'next/router';
import { useDebounce } from './debounce';

export default function useSearchParams() {
  const router = useRouter();
  const query = router.query.q?.toString();
  const searchString = decodeURI(query ?? '');

  const setParams = useDebounce((value: string) => {
    value = value.replace(/\s+/g, ' ').trim();
    const { query, pathname, replace } = router;

    if (value === '') {
      const { q, ...rest } = query;
      replace({ pathname, query: rest }, undefined, { scroll: false });
    } else {
      replace({ pathname, query: { ...router.query, q: encodeURI(value) } }, undefined, {
        scroll: false,
      });
    }
  }, 200);

  return { setParams, searchString };
}
