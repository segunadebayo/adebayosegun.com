import { SVGProps } from 'react';

export default function ChakraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
        fill="url(#mask)"
      />
      <path
        d="M12.9914 25.324L29.351 9.07705C29.6565 8.77353 30.1485 9.14289 29.9421 9.521L23.8532 20.6809C23.7172 20.9297 23.8975 21.2334 24.181 21.2334H34.7036C35.0426 21.2334 35.2062 21.6486 34.9584 21.88L16.5189 39.0894C16.1883 39.3979 15.6962 38.9631 15.9616 38.5971L24.6905 26.5554C24.8694 26.3085 24.6931 25.9626 24.3881 25.9626H13.2546C12.9212 25.9626 12.7548 25.559 12.9914 25.324Z"
        fill="white"
      />
      <defs>
        <linearGradient id="mask" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7BCBD4" />
          <stop offset="1" stopColor="#29C6B7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
