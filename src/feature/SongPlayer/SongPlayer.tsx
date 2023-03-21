import { useState } from "react";
import { RoundedButton } from "../../components/RoundedButton/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faBackwardStep,
	faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

import therapy from "./../../assets/therapy.jpg";

import styles from "./SongPlayer.module.scss";

export const SongPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div className={styles["song-player"]}>
			<div className={styles["song-player-info"]}>
				<img src={therapy} className={styles["song-img"]} />
				<div>
					<p className={styles["song-name"]}>My Heart My head</p>
					<p className={styles.author}>Ava Max</p>
				</div>
			</div>
			<div className={styles["song-player-action"]}>
				<div className={styles.buttons}>
					<FontAwesomeIcon icon={faBackwardStep} />
					<RoundedButton className={styles["play-button"]}>
						<FontAwesomeIcon icon={faPlay} />
					</RoundedButton>
					<FontAwesomeIcon icon={faForwardStep} />
				</div>
				<div className={styles["song-player-time"]}>
					<input
						type="range"
						min="0"
						defaultValue="0"
						className={styles.input}
					/>
				</div>
			</div>
		</div>
	);
};
