import { Item } from ".";
import { Wrapper } from "../../components/Wrapper";
import { useSongContext } from "hooks/useSongContext";
import { SongInterface } from "data/tracks";

import styles from "./SongsItems.module.scss";

type SongItemsProps = {
	tracks: SongInterface[];
};

export const SongsItems = ({ tracks }: SongItemsProps) => {
	const { searchValue, setSearchValue } = useSongContext();

	const filteredTracks = tracks.filter((track: SongInterface) => {
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
				{filteredTracks.map((track: SongInterface) => {
					return (
						<Item
							author={track.author}
							title={track.title}
							picture={track.picture}
							recommended={track.recommended}
							id={track.id}
							source={track.source}
						/>
					);
				})}
			</div>
		</Wrapper>
	);
};
