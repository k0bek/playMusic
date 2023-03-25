import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";
import { ReactNode } from "react";
import { UserDataType } from "types/UserDataType";
import { auth } from "firebase/config";

type SongContext = {
	setSongId: any;
	songId: number | null;
};

type ChildrenType = {
	children: ReactNode;
};

export const SongContext = createContext({} as SongContext);

export const SongContextProvider = ({ children }: ChildrenType) => {
	const [songId, setSongId] = useState<null | number>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isSongFocused, setIsSongFocused] = useState(false);
	const [volume, setVolume] = useState(70);
	const [searchValue, setSearchValue] = useState("");

	const value: SongContext = {
		setSongId,
		songId,
		isPlaying,
		setIsPlaying,
		isSongFocused,
		setIsSongFocused,
		volume,
		setVolume,
		searchValue,
		setSearchValue,
	};

	return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};
