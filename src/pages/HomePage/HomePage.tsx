import { Search } from "feature/Search";
import { Menu } from "feature/Menu";
import { SongsItems } from "feature/SongsItems";
import { tracks } from "data/tracks";

export const HomePage = () => {
	return (
		<>
			<Search />
			<Menu />
			<SongsItems tracks={tracks} />
		</>
	);
};
