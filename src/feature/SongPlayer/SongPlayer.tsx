import { useState, useRef } from "react";
import { useSongContext } from "hooks/useSongContext";
import { Volume } from "./components/Volume/Volume";
import { Controls } from "./components/Controls/Controls";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { DisplayTrack } from "./components/DisplayTrack/DisplayTrack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./SongPlayer.module.scss";

export const SongPlayer = () => {
	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState<number>(0);

	const audioRef = useRef<HTMLAudioElement | null>(null);
	const progressBarRef = useRef<HTMLInputElement | null>(null);

	const { songId, isSongFocused, setIsSongFocused, listOfTracks, setSongId } =
		useSongContext();

	const handleFocusShowed = () => {
		setIsSongFocused(!isSongFocused);
	};

	const goToThePreviousSong = () => {
		setSongId((prev) => {
			if (prev) {
				return prev - 1;
			} else {
				return listOfTracks.length - 1;
			}
		});
	};

	const goToTheNextSong = () => {
		setSongId((prev) => {
			if (prev !== listOfTracks.length - 1 && prev !== null) {
				return prev + 1;
			} else {
				return 0;
			}
		});
	};

	return (
		<section>
			{songId !== null && (
				<div
					className={
						isSongFocused
							? styles["audio-player-focused"]
							: styles["audio-player"]
					}
				>
					<div
						className={
							isSongFocused ? styles["song-info-focused"] : styles["song-info"]
						}
					>
						<img
							className={
								isSongFocused ? styles["picture-focused"] : styles.picture
							}
							src={listOfTracks[songId].picture}
							onClick={handleFocusShowed}
							alt={listOfTracks[songId].title}
						/>
						<div className={styles["info-text"]}>
							<p
								className={
									isSongFocused ? styles["title-focused"] : styles.title
								}
							>
								{listOfTracks[songId].title}
							</p>
							<p
								className={
									isSongFocused ? styles["author-focused"] : styles["author"]
								}
							>
								{listOfTracks[songId].author}
							</p>
						</div>
					</div>
					<div
						className={
							isSongFocused
								? styles["song-player-focused"]
								: styles["song-player"]
						}
					>
						<Controls
							audioRef={audioRef}
							setTimeProgress={setTimeProgress}
							progressBarRef={progressBarRef}
							duration={duration}
							goToThePreviousSong={goToThePreviousSong}
							goToTheNextSong={goToTheNextSong}
						/>

						<ProgressBar
							progressBarRef={progressBarRef}
							audioRef={audioRef}
							duration={duration}
							timeProgress={timeProgress}
						/>

						<DisplayTrack
							currentTrack={listOfTracks[songId]}
							audioRef={audioRef}
							progressBarRef={progressBarRef}
							setDuration={setDuration}
							setTimeProgress={setTimeProgress}
							goToTheNextSong={goToTheNextSong}
						/>
					</div>
					<Volume audioRef={audioRef} />

					{isSongFocused && (
						<button
							className={styles["close-button-focused"]}
							onClick={handleFocusShowed}
						>
							<FontAwesomeIcon icon={faXmark} />
						</button>
					)}
				</div>
			)}
		</section>
	);
};
