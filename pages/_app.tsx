import { Global } from '@emotion/react';
import fontFace from 'lib/fontface';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import seo from 'site.config';
import '../styles/prism.css';
import { Provider } from 'components/ui/provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <Global styles={fontFace} />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
