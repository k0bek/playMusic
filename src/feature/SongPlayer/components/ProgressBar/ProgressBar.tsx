import { style } from "@mui/system";
import React from "react";
import { useSongContext } from "hooks/useSongContext";

import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({
	progressBarRef,
	audioRef,
	timeProgress,
	duration,
}) => {
	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
	};

	const formatTime = (time) => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const seconds = Math.floor(time % 60);
			const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${formatMinutes}:${formatSeconds}`;
		}
		return "00:00";
	};

	const { isSongFocused, setIsSongFocused } = useSongContext();

	return (
		<div className={isSongFocused ? styles.progress : styles["range-normal"]}>
			<span
				className={isSongFocused ? styles.current : styles["current-normal"]}
			>
				{formatTime(timeProgress)}
			</span>
			<input
				type="range"
				className={styles.range}
				ref={progressBarRef}
				defaultValue="0"
				onChange={handleProgressChange}
			/>
			<span className={isSongFocused ? styles.end : styles["end-normal"]}>
				{formatTime(duration)}
			</span>
		</div>
	);
};
