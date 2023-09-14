import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FF4C00',
      light: '#FF7A00',
      lighter: '#FFB21E',
      dark: '#e04c0d',
    },
    secondary: {
      main: '#0039A4',
      light: '#175EEB',
      lighter: '#00B3FF',
      dark: '#06348c',
    },
    common: {
      white: '#fefefe',
      black: '#252525',
    },
  },
  typography: {
    body2: {
      color: '#252525',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '2em',
    },
  },
});


declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter?: string
  }

  interface SimplePaletteColorOptions {
    lighter?: string
  }
}
