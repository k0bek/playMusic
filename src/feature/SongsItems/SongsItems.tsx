import { SongItem } from ".";
import { Wrapper } from "../../components/Wrapper";
import { SongInterface } from "data/tracks";
import styles from "./SongsItems.module.scss";

type SongItemsProps = {
	tracks: SongInterface[];
};

export const SongsItems = ({ tracks }: SongItemsProps) => {
	return (
		<Wrapper>
			<div className={styles.items}>
				{tracks.map((track: SongInterface, index) => {
					return (
						<SongItem
							author={track.author}
							title={track.title}
							picture={track.picture}
							recommended={track.recommended}
							id={index}
							source={track.source}
							currentTracksList={tracks}
							isFavourite={track.isFavourite}
							key={index}
						/>
					);
				})}
				{tracks.length === 0 && <p>No results found.</p>}
			</div>
		</Wrapper>
	);
};
