import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: '#fff'
    },
    primary: {
      main: '#D30059',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
    },
    background: {
        default: '#171721',
        paper: '#171721'
    }
  },
});