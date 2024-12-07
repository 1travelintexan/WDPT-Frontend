import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./contexts/AuthContext.jsx";
import { ThemeWrapper } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeWrapper>
      <AuthWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthWrapper>
    </ThemeWrapper>
  </StrictMode>
);
