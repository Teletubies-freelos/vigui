import { createTheme } from '@mui/material'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FF4C00',
    },
    secondary: {
      main: '#0039A4',
      '900': '#0E58EA',
    },
    background: {
      default: '#fff',
    },
    info: {
      main: '#0E58EA',
    },
  },
  typography: {
    body1: {
      color: 'white',
    },
  },
})
