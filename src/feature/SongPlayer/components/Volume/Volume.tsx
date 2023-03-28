import { useSongContext } from "hooks/useSongContext";
import styles from "./Volume.module.scss";
import { ChangeEvent, useEffect } from "react";
import { MutableRefObject } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faVolumeXmark,
	faVolumeLow,
	faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

type VolumeProps = {
	audioRef: MutableRefObject<HTMLAudioElement | null>;
};

export const Volume = ({ audioRef }: VolumeProps) => {
	const { volume, setVolume, isSongFocused } = useSongContext();

	useEffect(() => {
		if (audioRef.current !== null) {
			audioRef.current.volume = volume / 100;
		}
	}, [volume, audioRef]);

	console.log(audioRef);

	return (
		<div className={isSongFocused ? styles["volume-focused"] : styles.volume}>
			<input
				type="range"
				min={0}
				max={100}
				value={volume}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					setVolume(Number(event.target.value));
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
						case volume < 40:
							return faVolumeLow;
						default:
							return faVolumeHigh;
					}
				})()}
			/>
		</div>
	);
};
