import { useSongContext } from "hooks/useSongContext";
import styles from "./Volume.module.scss";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faVolumeXmark,
	faVolumeLow,
	faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

export const Volume = () => {
	const { volume, setVolume, isSongFocused, audioRef } = useSongContext();

	useEffect(() => {
		if (audioRef) {
			audioRef.current.volume = volume / 100;
		}
	}, [volume, audioRef]);

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
				style={{
					background: `linear-gradient(to right, rgb(143, 42, 232) ${volume}%, #ccc ${volume}%)`,
				}}
			/>
			<FontAwesomeIcon
				className={styles.icon}
				icon={(() => {
					switch (true) {
						case volume === 0:
							return faVolumeXmark;
						case volume < 30:
							return faVolumeLow;
						default:
							return faVolumeHigh;
					}
				})()}
			/>
		</div>
	);
};
