import {
	createContext,
	useState,
	ReactNode,
	useCallback,
	useMemo,
} from "react";
import { SongInterface, tracks } from "data/tracks";

type SongContext = {
	handleSongId: (number: number | null) => void;
	handleIsPlaying: (isPlaying: boolean) => void;
	handleIsSongFocused: (isFocused: boolean) => void;
	handleVolume: (volume: number) => void;
	handleSearchedValue: (value: string) => void;
	handleIsRecommended: (isRecommended: boolean) => void;
	handleCurrentTrack: (currentTrack: number) => void;
	handleListOfTracks: (listOfTracks: SongInterface[]) => void;
	showModal: () => void;
	hideModal: () => void;
	showRecommended: () => void;
	showAll: () => void;
	songId: number | null;
	isPlaying: boolean;
	isSongFocused: boolean;
	volume: number;
	searchedValue: string;
	recommended: boolean;
	isModalShowed: boolean;
	currentTrack: number | null;
	listOfTracks: SongInterface[];
};

type SongContextProviderProps = {
	children: ReactNode;
};

export const SongContext = createContext<SongContext | undefined>(undefined);

export const SongContextProvider = ({ children }: SongContextProviderProps) => {
	const [songId, setSongId] = useState<null | number>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isSongFocused, setIsSongFocused] = useState(false);
	const [volume, setVolume] = useState(70);
	const [searchedValue, setSearchedValue] = useState("");
	const [recommended, setRecommended] = useState(false);
	const [isModalShowed, setIsModalShowed] = useState(false);
	const [currentTrack, setCurrentTrack] = useState<null | number>(null);
	const [listOfTracks, setListOfTracks] = useState(tracks);

	const showModal = useCallback(() => {
		document.body.style.overflow = "hidden";
		setIsModalShowed(true);
	}, []);

	const hideModal = useCallback(() => {
		document.body.style.overflow = "visible";
		setIsModalShowed(false);
	}, []);

	const handleSongId = useCallback((number: number | null) => {
		setSongId(number);
	}, []);

	const handleIsPlaying = useCallback((isPlaying: boolean) => {
		setIsPlaying(isPlaying);
	}, []);

	const handleIsSongFocused = useCallback((isFocused: boolean) => {
		setIsSongFocused(isFocused);
	}, []);

	const handleVolume = useCallback((volume: number) => {
		setVolume(volume);
	}, []);

	const handleSearchedValue = useCallback((value: string) => {
		setSearchedValue(value);
	}, []);

	const handleIsRecommended = useCallback((isRecommended: boolean) => {
		setRecommended(isRecommended);
	}, []);

	const handleCurrentTrack = useCallback((currentTrack: number) => {
		setCurrentTrack(currentTrack);
	}, []);

	const handleListOfTracks = useCallback((list: SongInterface[]) => {
		setListOfTracks(list);
	}, []);

	const showRecommended = useCallback(() => {
		handleIsRecommended(true);
	}, []);

	const showAll = useCallback(() => {
		handleIsRecommended(false);
	}, []);

	const value: SongContext = useMemo(() => {
		return {
			handleSongId,
			handleIsPlaying,
			handleIsSongFocused,
			handleVolume,
			handleSearchedValue,
			handleIsRecommended,
			handleCurrentTrack,
			handleListOfTracks,
			songId,
			isPlaying,
			isSongFocused,
			volume,
			searchedValue,
			recommended,
			isModalShowed,
			showModal,
			hideModal,
			currentTrack,
			listOfTracks,
			showRecommended,
			showAll,
		};
	}, [
		handleSongId,
		handleIsPlaying,
		handleIsSongFocused,
		handleVolume,
		handleSearchedValue,
		handleIsRecommended,
		handleCurrentTrack,
		handleListOfTracks,
		songId,
		isPlaying,
		isSongFocused,
		volume,
		searchedValue,
		recommended,
		isModalShowed,
		showModal,
		hideModal,
		currentTrack,
		listOfTracks,
		showRecommended,
		showAll,
	]);

	return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};
