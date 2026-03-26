'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { system } from 'lib/theme';
import { ThemeProvider, type ThemeProviderProps } from 'next-themes';

export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange forcedTheme="dark" {...props} />
    </ChakraProvider>
  );
}
