import { RoundedButton } from "components";
import React, { useEffect, useState, useRef, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faBackwardStep,
	faForwardStep,
	faPause,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Controls.module.scss";
import { useSongContext } from "hooks/useSongContext";
export const Controls = ({
	audioRef,
	progressBarRef,
	duration,
	setTimeProgress,
}) => {
	const { isPlaying, setIsPlaying, isSongFocused, setIsSongFocused } =
		useSongContext();

	const { songId } = useSongContext();
	const playAnimationRef = useRef();

	const togglePlayPause = () => {
		setIsPlaying((prev) => {
			return !prev;
		});
	};

	const repeat = useCallback(() => {
		const currentTime = audioRef.current.currentTime;
		setTimeProgress(currentTime);
		progressBarRef.current.value = currentTime;
		progressBarRef.current.style.setProperty(
			"--range-progress",
			`${(progressBarRef.current.value / duration) * 100}%`
		);

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, songId]);
	return (
		<div className={styles.controls}>
			<button
				className={
					isSongFocused ? styles["backward-btn"] : styles["backward-btn-normal"]
				}
			>
				<FontAwesomeIcon icon={faBackwardStep} />
			</button>
			<RoundedButton
				className={styles["play-stop-button"]}
				onClick={togglePlayPause}
			>
				{!isPlaying ? (
					<FontAwesomeIcon icon={faPlay} />
				) : (
					<FontAwesomeIcon icon={faPause} />
				)}
			</RoundedButton>

			<button
				className={
					isSongFocused ? styles["forward-btn"] : styles["forward-btn-normal"]
				}
			>
				<FontAwesomeIcon icon={faForwardStep} />
			</button>
		</div>
	);
};
