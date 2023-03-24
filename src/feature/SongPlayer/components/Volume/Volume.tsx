import { useSongContext } from "hooks/useSongContext";
import styles from "./Volume.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faVolumeXmark,
	faVolumeLow,
	faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

export const Volume = () => {
	const { volume, setVolume, isSongFocused } = useSongContext();

	console.log(volume);

	return (
		<div className={isSongFocused ? styles["volume-focused"] : styles.volume}>
			<input
				type="range"
				min={0}
				max={100}
				value={volume}
				onChange={(event) => {
					setVolume(event.target.value);
				}}
				className={
					isSongFocused
						? styles["volume-input-focused"]
						: styles["volume-input"]
				}
			/>
			<FontAwesomeIcon icon={volume == 0 ? faVolumeXmark : faVolumeHigh} />
		</div>
	);
};
