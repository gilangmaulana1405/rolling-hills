import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/theme.js";
import { CssBaseline } from "@mui/material";
import FloatButtonWhatsapp from "./components/FloatButtonWhatsapp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
      <FloatButtonWhatsapp />
    </React.StrictMode>
  </ThemeProvider>
);
