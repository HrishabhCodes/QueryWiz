import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import DefaultTheme from "./styles/theme";
import { TablesContextProvider } from "./context/TablesContext";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <TablesContextProvider>
        <CssBaseline />
        <Home />
      </TablesContextProvider>
    </ThemeProvider>
  );
}

export default App;
