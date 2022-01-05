import { css } from '@emotion/react';

const fontFace = css`
  @font-face {
    font-family: 'PolySans';
    src: url(/fonts/PolySans-Regular.woff2) format('woff2');
    font-weight: 500;
    font-display: optional;
  }

  @font-face {
    font-family: 'PolySans';
    src: url(/fonts/PolySans-Medium.woff2) format('woff2');
    font-weight: 700;
    font-display: optional;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/Inter.woff2) format('woff2');
  }
`;

export default fontFace;
