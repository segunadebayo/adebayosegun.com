import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: '#fafaf9' },
          100: { value: '#f5f5f4' },
          200: { value: '#e7e5e4' },
          300: { value: '#d6d3d1' },
          400: { value: '#a8a29e' },
          500: { value: '#78716c' },
          600: { value: '#57534e' },
          700: { value: '#44403c' },
          800: { value: '#292524' },
          900: { value: '#1c1917' },
        },
        brown: {
          50: { value: 'hsl(30, 50.0%, 97.6%)' },
          100: { value: 'hsl(30, 52.5%, 94.6%)' },
          200: { value: 'hsl(30, 53.0%, 91.2%)' },
          300: { value: 'hsl(29, 52.9%, 86.8%)' },
          400: { value: 'hsl(29, 52.5%, 80.9%)' },
          500: { value: 'hsl(29, 51.5%, 72.8%)' },
          600: { value: 'hsl(28, 50.0%, 63.1%)' },
          700: { value: 'hsl(28, 34.0%, 51.0%)' },
          800: { value: 'hsl(27, 31.8%, 47.6%)' },
          900: { value: 'hsl(25, 30.0%, 41.0%)' },
        },
      },
      fonts: {
        heading: { value: 'PolySans, -apple-system, system-ui, sans-serif' },
        body: { value: 'Inter, -apple-system, system-ui, sans-serif' },
        mono: {
          value: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
        },
      },
      spacing: {
        vGutter: { value: '6.25rem' },
      },
      shadows: {
        highlight: { value: 'inset 0 2px 0 0 rgb(255 255 255 / 5%)' },
      },
    },
  },
  globalCss: {
    'html, body': {
      bg: 'gray.900',
      color: 'gray.300',
      minH: '100vh',
      overflowX: 'hidden',
      colorScheme: 'dark',
    },
    '*:focus, *[data-focus]': {
      outline: '2px solid',
      outlineColor: 'brown.400',
      outlineOffset: '3px',
    },
    'h2,h3,h4': {
      scrollMarginTop: '4rem',
      '&:hover': {
        '& a.anchor': {
          opacity: 1,
        },
      },
    },
    '.img': {
      rounded: 'lg',
    },
    'a.anchor': {
      opacity: 0,
      marginX: '3',
      '&:before': {
        content: `"#"`,
        color: 'brown.600',
      },
      '&:focus': {
        opacity: 1,
      },
    },
  },
});
