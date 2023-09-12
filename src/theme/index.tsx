import { createTheme } from '@mui/material'
import './types'

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
})
