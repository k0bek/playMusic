import React, { useEffect, useRef, useCallback, MutableRefObject } from "react";
import { useSongContext } from "hooks/useSongContext";
import { Button } from "components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faBackwardStep,
	faForwardStep,
	faPause,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Controls.module.scss";

type ControlsProps = {
	audioRef: MutableRefObject<HTMLAudioElement | null>;
	progressBarRef: MutableRefObject<HTMLInputElement | null>;
	setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
	duration: number;
	goToThePreviousSong: () => void;
	goToTheNextSong: () => void;
};

export const Controls = ({
	audioRef,
	progressBarRef,
	duration,
	setTimeProgress,
	goToTheNextSong,
	goToThePreviousSong,
}: ControlsProps) => {
	const { isPlaying, handleIsPlaying, isSongFocused, songId, volume } =
		useSongContext();

	const playAnimationRef = useRef<number>();

	const togglePlayPause = () => {
		handleIsPlaying(!isPlaying);
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

			<Button
				type="submit"
				className="rounded-button"
				disabled={false}
				onClick={togglePlayPause}
			>
				{!isPlaying ? (
					<FontAwesomeIcon icon={faPlay} />
				) : (
					<FontAwesomeIcon icon={faPause} />
				)}
			</Button>

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
