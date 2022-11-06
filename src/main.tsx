import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import router from "./features/router";

const theme = extendTheme({
  styles: {
    global: () => ({
      "html, body": {
        color: "white",
        margin: 0,
        height: "100%",
        webkitfontsmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Source Sans Pro",
          "sans-serif",
        ],
        background: "linear-gradient(160deg, #488582 60%, #292929 60.1%);",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
