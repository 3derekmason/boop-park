import "../styles/globals.css";
import { AppWrapper } from "../context/state";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00706a",
      light: "#67a09b",
    },
    secondary: {
      main: "#82b1ff",
      light: "#bbdefb",
      dark: "#1565c0",
    },
    neutral: {
      main: "#213937",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
