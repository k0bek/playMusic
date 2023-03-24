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
	const {
		isPlaying,
		setIsPlaying,
		isSongFocused,
		setIsSongFocused,
		songId,
		setSongId,
		volume,
		setVolume,
	} = useSongContext();

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

	const goToThePreviousSong = () => {
		setSongId((prev) => {
			if (prev !== 0) {
				return prev - 1;
			} else {
				return 8;
			}
		});
	};

	const goToTheNextSong = () => {
		setSongId((prev) => {
			if (prev !== 8) {
				return prev + 1;
			} else {
				return 0;
			}
		});
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, songId]);

	useEffect(() => {
		if (audioRef) {
			audioRef.current.volume = volume / 100;
		}
	}, [volume, audioRef]);

	return (
		<div className={styles.controls}>
			<button
				className={
					isSongFocused ? styles["backward-btn"] : styles["backward-btn-normal"]
				}
				onClick={goToThePreviousSong}
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
				onClick={goToTheNextSong}
			>
				<FontAwesomeIcon icon={faForwardStep} />
			</button>
		</div>
	);
};
