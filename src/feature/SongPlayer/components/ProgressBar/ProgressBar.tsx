import { MutableRefObject, useEffect } from "react";
import { useSongContext } from "hooks/useSongContext";

import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
	audioRef: MutableRefObject<HTMLAudioElement | null>;
	progressBarRef: MutableRefObject<HTMLInputElement | null>;
	timeProgress: number;
	duration: number;
};

export const ProgressBar = ({
	progressBarRef,
	audioRef,
	timeProgress,
	duration,
}: ProgressBarProps) => {
	const { setSongId } = useSongContext();

	const handleProgressChange = () => {
		if (audioRef.current && progressBarRef.current) {
			audioRef.current.currentTime = Number(progressBarRef.current.value);
			progressBarRef.current.style.setProperty(
				"--range-progress",
				`${
					(Number(progressBarRef.current.value) / audioRef.current.duration) *
					100
				}%`
			);
		}
	};

	const formatTime = (time: number) => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const seconds = Math.floor(time % 60);
			const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${formatMinutes}:${formatSeconds}`;
		}
		return "00:00";
	};

	const { isSongFocused } = useSongContext();

	return (
		<div
			className={
				isSongFocused ? styles["range-focused"] : styles["range-normal"]
			}
		>
			<span
				className={isSongFocused ? styles.current : styles["current-normal"]}
			>
				{formatTime(timeProgress)}
			</span>

			<input
				type="range"
				className={styles.range}
				ref={progressBarRef}
				defaultValue={0}
				onChange={handleProgressChange}
			/>
			<span className={isSongFocused ? styles.end : styles["end-normal"]}>
				{formatTime(duration)}
			</span>
		</div>
	);
};
