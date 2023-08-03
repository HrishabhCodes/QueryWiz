import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import DefaultTheme from "./styles/theme";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <AppContextProvider>
          <CssBaseline />
          <Home />
        </AppContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
