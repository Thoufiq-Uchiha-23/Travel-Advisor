import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create a custom theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
    background: {
      default: "#f4f6f8", // Default background color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Add custom fonts if needed
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
