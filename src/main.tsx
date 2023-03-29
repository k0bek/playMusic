import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import "main.scss";
import { AuthContextProvider } from "context/AuthContext";
import { SongContext, SongContextProvider } from "context/SongContext";
import { LoginModal } from "feature/LoginModal/LoginModal";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthContextProvider>
			<SongContextProvider>
				<App></App>
			</SongContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
