import { css } from '@emotion/react';

const fontFace = css`
  @font-face {
    font-family: 'PolySans';
    src: url(/fonts/PolySans-Regular.woff2) format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'PolySans';
    src: url(/fonts/PolySans-Medium.woff2) format('woff2');
    font-weight: 700;
    font-display: swap;
  }
`;

export default fontFace;
