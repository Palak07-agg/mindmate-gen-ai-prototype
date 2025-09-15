// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import { AppProvider } from "./context/AppContext";

// Create a default theme
const theme = extendTheme({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <AppProvider>
    <App />
  </AppProvider>

    </ChakraProvider>
  </React.StrictMode>
);
