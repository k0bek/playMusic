import { useSongContext } from "hooks/useSongContext";
import { Search } from "feature/Search";
import { Menu } from "feature/Menu";
import { SongsItems } from "feature/SongsItems";
import { tracks } from "data/tracks";
import { SongInterface } from "data/tracks";
import { useState } from "react";

export const HomePage = () => {
	const { searchedValue, recommended } = useSongContext();
	const [isHomePage, setIsHomePage] = useState(true);

	let filteredTracks = tracks.filter((track: SongInterface) => {
		return (
			track.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
			track.author.toLowerCase().includes(searchedValue.toLowerCase())
		);
	});

	filteredTracks = recommended
		? filteredTracks.filter((track) => track.recommended)
		: filteredTracks;

	return (
		<>
			<Search />
			<Menu />
			<SongsItems tracks={filteredTracks} isHomePage={isHomePage} />
		</>
	);
};
