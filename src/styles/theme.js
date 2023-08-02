import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#6d7e8f",
    },
    primaryButton: {
      main: "#066dc9",
    },
    primaryDarkIcon: {
      main: "#465f6e",
    },
    error: {
      main: red.A400,
    },
    background: {
      light: "#eef2f4",
      default: "#fff",
      dark: "#022242",
      primaryButton: "#066dc9",
    },
    text: {
      primary: "#066dc9",
      secondary: "#000",
      primaryDark: "#fff",
      secondaryDark: "#c3ccd4",
    },
    action: {
      active: "#384854",
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Mukta",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default DefaultTheme;
