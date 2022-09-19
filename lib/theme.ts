import { extendTheme } from '@chakra-ui/react';

const colors = {
  gray: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
  },
  brown: {
    50: 'hsl(30, 50.0%, 97.6%)',
    100: 'hsl(30, 52.5%, 94.6%)',
    200: 'hsl(30, 53.0%, 91.2%)',
    300: 'hsl(29, 52.9%, 86.8%)',
    400: 'hsl(29, 52.5%, 80.9%)',
    500: 'hsl(29, 51.5%, 72.8%)',
    600: 'hsl(28, 50.0%, 63.1%)',
    700: 'hsl(28, 34.0%, 51.0%)',
    800: 'hsl(27, 31.8%, 47.6%)',
    900: 'hsl(25, 30.0%, 41.0%)',
  },
};

const fonts = {
  heading: 'PolySans, -apple-system, system-ui, sans-serif',
  body: 'Inter, -apple-system, system-ui, sans-serif',
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

const theme = {
  colors,
  fonts,
  space: {
    vGutter: '6.25rem',
  },
  shadows: {
    highlight: 'inset 0 2px 0 0 rgb(255 255 255 / 5%)',
  },
  styles: {
    global: {
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
          'a.anchor': {
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
  },
};

export default extendTheme(theme);
