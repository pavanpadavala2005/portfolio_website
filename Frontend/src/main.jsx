import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./inde
import App from "./App.jsx";
import { store } from "./app/app.js";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
		</Provider>
	</StrictMode>
);
