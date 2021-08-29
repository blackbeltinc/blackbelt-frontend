import { extendTheme, StyleProps, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  light: {
    bg: '#fafafa',
    text: '#444444',
    primary: '#5252a4',
    details: '#858585',
  },
  dark: {
    bg: '#1f2029',
    text: '#e3e3e3',
    primary: '#7f7fd2',
    details: '#a7a7a7',
  },
};

const fonts = {
  heading: 'Lato',
  body: 'Lato',
};

const styles = {
  global: (props: StyleProps) => ({
    body: {
      color: mode('light.text', 'dark.text')(props),
      bg: mode('light.bg', 'dark.bg')(props),
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
