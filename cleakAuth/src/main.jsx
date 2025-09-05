import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const ClerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!ClerkPubKey) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={ClerkPubKey}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
