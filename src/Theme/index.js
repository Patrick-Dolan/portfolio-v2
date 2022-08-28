import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#062f4f',
      light: '#062f4f',
      contrastText: '#fff'
    },
    secondary: {
      main: '#b82601',
      contrastText: '#fff'
    },
    tertiary: {
      main: '#813772',
      contrastText: '#fff'
    }
  },
});