import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';

export function useMDXComponent(code: string) {
  return useMemo(() => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
  }, [code]);
}
