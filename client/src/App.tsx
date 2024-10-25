import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Dashboard from "@/screens/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className = "app">
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <Box width={"100%"} height={"100%"} padding={"1rem 2rem 4rem 2rem"} >
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<div>Predictions Page</div>} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
