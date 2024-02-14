import { BrowserRouter } from "react-router-dom";
// import { StrictMode } from "react";
import  {createRoot}from "react-dom/client";
import App from "./App";
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);