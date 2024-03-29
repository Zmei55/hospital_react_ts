import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./shared/i18next/i18n";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/redux/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./app/constants";
import { App } from "./app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/hospital_react_ts">
          <Suspense fallback={<div>...loading</div>}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
