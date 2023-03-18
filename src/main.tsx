import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { AuthContextProvider } from "./context/AuthContext";
import ShazamEvents from "./services/ShazamEvents";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthContextProvider>
			<App />
			{/* <ShazamEvents /> */}
		</AuthContextProvider>
	</React.StrictMode>
);
