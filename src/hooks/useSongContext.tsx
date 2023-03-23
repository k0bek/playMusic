import { useContext } from "react";
import { SongContext } from "context/SongContext";

export function useSongContext() {
	const context = useContext(SongContext);

	if (!context) {
		throw new Error("Cannot load AuthContext");
	}

	return context;
}
