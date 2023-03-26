import { Search } from "feature/Search";
import { Menu } from "feature/Menu";
import { SongsItems } from "feature/SongsItems";

export const HomePage = () => {
	return (
		<>
			<Search />
			<Menu />
			<SongsItems />
		</>
	);
};
