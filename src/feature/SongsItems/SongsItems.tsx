import { Item } from ".";
import { Wrapper } from "../../components/Wrapper";
import { tracks } from "data/tracks";

import styles from "./SongsItems.module.scss";

export const SongsItems = () => {
	return (
		<Wrapper>
			<div className={styles.items}>
				{tracks.map((track) => {
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
