import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
