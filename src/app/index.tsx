import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/shared/store/index.js";
import { ThemeProvider } from "./providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark">
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
