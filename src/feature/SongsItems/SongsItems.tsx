import { Item } from ".";
import { Wrapper } from "../../components/Wrapper";
import { tracks } from "data/tracks";
import { useSongContext } from "hooks/useSongContext";

import styles from "./SongsItems.module.scss";

export const SongsItems = () => {
	const { searchValue, setSearchValue } = useSongContext();

	const filteredTracks = tracks.filter((track) => {
		return (
			track.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			track.author.toLowerCase().includes(searchValue.toLowerCase())
		);
	});

	if (filteredTracks.length === 0) {
		return <p className={styles["error-info"]}>No results found</p>;
	}

	return (
		<Wrapper>
			<div className={styles.items}>
				{filteredTracks.map((track) => {
					return (
						<Item
							author={track.author}
							title={track.title}
							picture={track.picture}
							recommended={track.recommended}
							id={track.id}
						/>
					);
				})}
			</div>
		</Wrapper>
	);
};
