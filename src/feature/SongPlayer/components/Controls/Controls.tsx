import { RoundedButton } from "components";
import React, {
	useEffect,
	useState,
	useRef,
	useCallback,
	MutableRefObject,
} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faBackwardStep,
	faForwardStep,
	faPause,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Controls.module.scss";
import { useSongContext } from "hooks/useSongContext";

type ControlsProps = {
	audioRef: MutableRefObject<HTMLAudioElement | null>;
	progressBarRef: MutableRefObject<HTMLInputElement | null>;
	setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
	duration: number;
};

export const Controls = ({
	audioRef,
	progressBarRef,
	duration,
	setTimeProgress,
}: ControlsProps) => {
	const { isPlaying, setIsPlaying, isSongFocused, songId, setSongId, volume } =
		useSongContext();

	const playAnimationRef = useRef<number>();

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};
	const repeat = useCallback(() => {
		if (progressBarRef.current && audioRef.current) {
			const currentTime = audioRef.current.currentTime;
			setTimeProgress(currentTime);

			progressBarRef.current.value = currentTime.toString();
			progressBarRef.current.style.setProperty(
				"--range-progress",
				`${(Number(progressBarRef.current.value) / duration) * 100}%`
			);
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	const goToThePreviousSong = () => {
		setSongId((prev) => {
			if (prev) {
				return prev - 1;
			} else {
				return 0;
			}
		});
	};

	const goToTheNextSong = () => {
		setSongId((prev) => {
			if (prev.length - 1 !== 8 && prev) {
				return prev + 1;
			} else {
				return 0;
			}
		});
	};

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, songId]);

	useEffect(() => {
		if (audioRef.current) {
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
