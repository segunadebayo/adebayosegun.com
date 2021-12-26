import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        {['PolySans-Regular', 'PolySans-Medium'].map((font) => (
          <link
            key={font}
            rel="preload"
            href={`/fonts/${font}.ttf`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
