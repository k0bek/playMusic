import { Item } from ".";
import { Wrapper } from "../../components/Wrapper";
import { useSongContext } from "hooks/useSongContext";
import { SongInterface } from "data/tracks";

import styles from "./SongsItems.module.scss";
import { useEffect } from "react";

type SongItemsProps = {
	tracks: SongInterface[];
};

export const SongsItems = ({ tracks }: SongItemsProps) => {
	console.log(tracks);
	return (
		<Wrapper>
			<div className={styles.items}>
				{tracks.map((track: SongInterface, index) => {
					return (
						<Item
							author={track.author}
							title={track.title}
							picture={track.picture}
							recommended={track.recommended}
							id={index}
							source={track.source}
							currentTracksList={tracks}
							isFavourite={track.isFavourite}
						/>
					);
				})}
				{tracks.length === 0 && <p>No results found.</p>}
			</div>
		</Wrapper>
	);
};
