import ReactDOM from "react-dom/client";
import App from "./app/routs/App.tsx";
import "./app/scss/main.scss";
// redux
import { Provider } from "react-redux";
import { store } from "./shared/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
