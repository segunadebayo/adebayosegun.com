import { extendTheme } from '@chakra-ui/react';

const colors = {
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },
  sage: {
    base: '#FEB48C',
    dark: '#E99465',
    darker: '#D37B4A',
  },
  dust: {
    light: '#74503D',
    base: '#483327',
    dark: '#36261D',
    darker: '#1B1512',
  },
  dustAlpha: {
    light: 'rgba(254, 180, 140, 0.45)',
    base: 'rgba(254, 180, 140, 0.28)',
    dark: 'rgba(254, 180, 140, 0.21)',
    darker: 'rgba(254, 180, 140, 0.11)',
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
  styles: {
    global: {
      'html, body': {
        bg: 'black',
        color: 'white',
        minH: '100vh',
        overflowX: 'hidden',
      },
      '*:focus': {
        outline: '2px solid',
        outlineColor: 'sage.base',
        outlineOffset: '3px',
        rounded: 'md',
      },
    },
  },
};

export default extendTheme(theme);
