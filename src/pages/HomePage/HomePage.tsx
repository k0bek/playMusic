import { useSongContext } from "hooks/useSongContext";
import { Search } from "feature/Search/Search";
import { Menu } from "feature/Menu/Menu";
import { SongsItems } from "feature/SongsItems/SongsItems";
import { tracks } from "data/tracks";
import { SongInterface } from "data/tracks";
import { useState, useEffect } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import getQuerySnapshot from "hooks/getQuerySnapshot";

export const HomePage = () => {
	const [renderedAgain, setRederedAgain] = useState(true);
	const [favouriteTracks, setFavouriteTracks] = useState<SongInterface[]>([]);

	const { searchedValue, recommended } = useSongContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				const querySnapshot = await getQuerySnapshot(user.uid);

				const data = querySnapshot.docs.map(
					(doc) => doc.data() as SongInterface
				);
				setFavouriteTracks(data);
			}
		};

		fetchData();
	}, [renderedAgain, favouriteTracks]);

	const updatedTracks = tracks.map((track) => {
		const isFavourite = favouriteTracks.some(
			(favouriteTrack) => favouriteTrack.id === track.id
		);

		return { ...track, isFavourite };
	});

	const renderAgain = () => {
		setRederedAgain((prev) => {
			return !prev;
		});
	};

	let filteredTracks = updatedTracks.filter((track: SongInterface) => {
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
			<SongsItems tracks={filteredTracks} renderAgain={renderAgain} />
		</>
	);
};
