import { css } from '@emotion/react';

const fontFace = css`
  @font-face {
    font-family: 'PolySans';
    src: url('/fonts/PolySans-Regular.woff2') format('woff2')
      url('/fonts/PolySans-Regular.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'PolySans';
    src: url('/fonts/PolySans-Medium.woff2') format('woff2')
      url('/fonts/PolySans-Medium.ttf') format('truetype');
    font-weight: 700;
  }
`;

export default fontFace;
