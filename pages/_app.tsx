import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import fontFace from 'lib/fontface';
import theme from 'lib/theme';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Global styles={fontFace} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
