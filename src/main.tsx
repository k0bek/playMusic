import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { SongContextProvider } from "context/SongContext";
import { AuthContextProvider } from "context/AuthContext";
import "main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SongContextProvider>
				<App></App>
			</SongContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
