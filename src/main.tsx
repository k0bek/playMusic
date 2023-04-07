import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "context/AuthContext";
import { SongContextProvider } from "context/SongContext";
import App from "App";
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
