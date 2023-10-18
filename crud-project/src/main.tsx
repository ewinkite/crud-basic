/** @jsx jsx */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { globalStyle } from "./styles/globalStyle";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Global styles={globalStyle} />
    </div>
    <App />
  </React.StrictMode>
);
