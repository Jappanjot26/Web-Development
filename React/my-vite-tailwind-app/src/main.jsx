import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Landing from "./Landing.jsx";
import Layout2 from "./Layout2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Layout2 />
  </StrictMode>
);
