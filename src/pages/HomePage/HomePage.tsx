import { Search } from "feature/Search";
import { Menu } from "feature/Menu";
import { SongsItems } from "feature/SongsItems";
import { tracks } from "data/tracks";
import { useSongContext } from "hooks/useSongContext";
import { SongInterface } from "data/tracks";

export const HomePage = () => {
	const { searchedValue, recommended } = useSongContext();

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
			<SongsItems tracks={filteredTracks} />
		</>
	);
};
