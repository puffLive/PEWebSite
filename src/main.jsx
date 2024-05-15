import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import NotFoundPage from "./pages/404.jsx";

import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={NotFoundPage}
      onReset={() => window.location.replace("/")}
    >
      <HelmetProvider>
        <Suspense>
          <App />
        </Suspense>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
