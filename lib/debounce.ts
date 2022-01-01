import { useEffect, useMemo, useRef } from 'react';

function debounce<Callback extends (...args: Array<unknown>) => void>(fn: Callback, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<Callback>) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function useDebounce<Callback extends (...args: Array<unknown>) => unknown>(
  callback: Callback,
  delay: number,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => debounce((...args) => callbackRef.current(...args), delay), [delay]);
}
