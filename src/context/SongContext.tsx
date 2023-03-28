import { createContext, useEffect, useReducer, useState } from "react";
import { ReactNode } from "react";

type SongContext = {
	songId: number | null;
	setSongId: React.Dispatch<React.SetStateAction<number | null>>;
	isPlaying: boolean;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	isSongFocused: boolean;
	setIsSongFocused: React.Dispatch<React.SetStateAction<boolean>>;
	volume: number;
	setVolume: React.Dispatch<React.SetStateAction<number>>;
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
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
