import { useState, useRef, useEffect } from "react";
import { tracks } from "data/tracks";

import { Controls } from "./components/Controls";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { DisplayTrack } from "./components/DisplayTrack";

import styles from "./SongPlayer.module.scss";
import { useSongContext } from "hooks/useSongContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const SongPlayer = () => {
	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState(0);

	const audioRef = useRef();
	const progressBarRef = useRef();

	const { songId, isSongFocused, setIsSongFocused } = useSongContext();

	const handleFocusShowed = () => {
		setIsSongFocused((prev) => {
			return !prev;
		});
	};

	return (
		<div
			className={
				isSongFocused ? styles["audio-player-focused"] : styles["audio-player"]
			}
		>
			<div
				className={
					isSongFocused ? styles["song-info-focused"] : styles["song-info"]
				}
			>
				<img
					className={isSongFocused ? styles["picture-focused"] : styles.picture}
					src={tracks[songId].picture}
					onClick={handleFocusShowed}
				/>
				<div className={styles["info-text"]}>
					<p className={isSongFocused ? styles["title-focused"] : styles.title}>
						{tracks[songId].title}
					</p>
					<p
						className={
							isSongFocused ? styles["author-focused"] : styles["author"]
						}
					>
						{tracks[songId].author}
					</p>
				</div>
			</div>
			<div
				className={
					isSongFocused ? styles["song-player-focused"] : styles["song-player"]
				}
			>
				<Controls
					audioRef={audioRef}
					setTimeProgress={setTimeProgress}
					progressBarRef={progressBarRef}
					duration={duration}
				/>

				<ProgressBar
					progressBarRef={progressBarRef}
					audioRef={audioRef}
					duration={duration}
					timeProgress={timeProgress}
				/>

				<DisplayTrack
					currentTrack={tracks[songId]}
					audioRef={audioRef}
					progressBarRef={progressBarRef}
					setDuration={setDuration}
					setTimeProgress={setTimeProgress}
				/>
			</div>
			{isSongFocused && (
				<button
					className={styles["close-button-focused"]}
					onClick={handleFocusShowed}
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			)}
		</div>
	);
};
