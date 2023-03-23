import { useState, useRef, useEffect } from "react";
import { tracks } from "data/tracks";

import { Controls } from "./components/Controls";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { DisplayTrack } from "./components/DisplayTrack";

import styles from "./SongPlayer.module.scss";
import { useSongContext } from "hooks/useSongContext";

export const SongPlayer = () => {
	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState(0);

	const audioRef = useRef();
	const progressBarRef = useRef();

	const { songId } = useSongContext();

	return (
		<div className={styles["audio-player"]}>
			<div className={styles["song-info"]}>
				<img className={styles.picture} src={tracks[songId].picture}></img>
				<div>
					<p className={styles["author"]}>{tracks[songId].author}</p>
					<p className={styles.title}>{tracks[songId].title}</p>
				</div>
			</div>
			<div className={styles["song-player"]}>
				<ProgressBar
					progressBarRef={progressBarRef}
					audioRef={audioRef}
					duration={duration}
					timeProgress={timeProgress}
				/>

				<Controls
					audioRef={audioRef}
					setTimeProgress={setTimeProgress}
					progressBarRef={progressBarRef}
					duration={duration}
				/>
				<DisplayTrack
					currentTrack={tracks[songId]}
					audioRef={audioRef}
					progressBarRef={progressBarRef}
					setDuration={setDuration}
					setTimeProgress={setTimeProgress}
				/>
			</div>

			<div>
				<p>xddd</p>
			</div>
		</div>
	);
};
