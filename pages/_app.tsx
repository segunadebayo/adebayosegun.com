import { ChakraProvider } from '@chakra-ui/provider';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={{ config: { initialColorMode: 'light' } }}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
