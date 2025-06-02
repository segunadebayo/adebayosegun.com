import { Global } from '@emotion/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Provider } from 'components/ui/provider';
import fontFace from 'lib/fontface';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import seo from 'site.config';
import '../styles/prism.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <DefaultSeo {...seo} />
      <Global styles={fontFace} />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
