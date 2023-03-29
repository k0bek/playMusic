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
	searchedValue: string;
	setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
	recommended: boolean;
	setRecommended: React.Dispatch<React.SetStateAction<boolean>>;
	isModalShowed: boolean;
	showModal: () => void;
	hideModal: () => void;
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
	const [searchedValue, setSearchedValue] = useState("");
	const [recommended, setRecommended] = useState(false);
	const [isModalShowed, setIsModalShowed] = useState(false);

	const showModal = () => {
		document.body.style.overflow = "hidden";
		setIsModalShowed(true);
	};

	const hideModal = () => {
		document.body.style.overflow = "visible";
		setIsModalShowed(false);
	};

	const value: SongContext = {
		setSongId,
		songId,
		isPlaying,
		setIsPlaying,
		isSongFocused,
		setIsSongFocused,
		volume,
		setVolume,
		searchedValue,
		setSearchedValue,
		recommended,
		setRecommended,
		isModalShowed,
		showModal,
		hideModal,
	};

	return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};
