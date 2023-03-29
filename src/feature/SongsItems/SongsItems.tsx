import { Item } from ".";
import { Wrapper } from "../../components/Wrapper";
import { useSongContext } from "hooks/useSongContext";
import { SongInterface } from "data/tracks";

import styles from "./SongsItems.module.scss";

type SongItemsProps = {
	tracks: SongInterface[];
};

export const SongsItems = ({ tracks }: SongItemsProps) => {
	return (
		<Wrapper>
			<div className={styles.items}>
				{tracks.map((track: SongInterface) => {
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
				{tracks.length === 0 && <p>No results found.</p>}
			</div>
		</Wrapper>
	);
};
