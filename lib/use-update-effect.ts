/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

export default function useUpdateEffect(
  effect: React.EffectCallback,
  deps: React.DependencyList = [],
) {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    return effect();
  }, deps);
}
