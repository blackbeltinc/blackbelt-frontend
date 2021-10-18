import { extendTheme, StyleProps, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  blackbelt: {
    200: '#7f7fd2',
    500: '#5252a4',
    600: '#5252a4',
  },
  gray: {
    50: '#fafafa', // light mode background
    75: '#f0f0f0', // light mode content background
    100: '#e3e3e3', // dark mode text
    200: '#c9c9c9',
    300: '#a7a7a7',
    400: '#858585',
    500: '#4a4a4a',
    600: '#444444', // light mode text
    700: '#1F2029', // dark mode content background
    800: '#181B23', // dark mode background
    900: '#13161c',
  },
};

const fonts = {
  heading: 'Lato',
  body: 'Lato',
};

const styles = {
  global: (props: StyleProps) => ({
    body: {
      color: mode('gray.600', 'gray.100')(props),
      bg: mode('gray.50', 'gray.800')(props),
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  styles,
  fonts,
});

export default theme;
