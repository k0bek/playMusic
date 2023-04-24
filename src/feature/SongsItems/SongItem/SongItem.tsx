import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import { useSongContext } from "hooks/useSongContext";
import { Button } from "components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import { SongInterface, tracks } from "data/tracks";
import { CircularProgress } from "@mui/material";
import styles from "./SongItem.module.scss";
import { handleFavouriteSongs } from "./hooks/handleFavouriteSongs";

interface renderAgainInterface {
	renderAgain: () => void;
}

export const SongItem = ({
	author,
	title,
	picture,
	recommended,
	id,
	source,
	currentTracksList,
	isFavourite,
	renderAgain,
}: SongInterface & renderAgainInterface) => {
	const { user } = useAuthContext();
	const {
		handleSongId,
		handleCurrentTrack,
		handleListOfTracks,
		handleIsPlaying,
		isSongFocused,
		showModal,
	} = useSongContext();

	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = useCallback(() => {
		setImageLoaded(true);
	}, []);

	const getSongId = () => {
		if (!user) {
			handleCurrentTrack(id);
			showModal();
			return;
		} else {
			handleSongId(id);
		}

		if (currentTracksList) {
			handleListOfTracks(currentTracksList);
		}
	};

	useEffect(() => {
		isSongFocused
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");
	}, [isSongFocused]);

	return (
		<div className={styles.item}>
			{!imageLoaded && (
				<div className={styles.loader}>
					<CircularProgress color="secondary" size={60} />
				</div>
			)}
			<img
				src={picture}
				alt={title}
				onLoad={handleImageLoad}
				style={{ display: imageLoaded ? "block" : "none" }}
			/>
			<button
				className={
					isFavourite && user ? styles["heart-favourite"] : styles.heart
				}
				onClick={() => {
					handleFavouriteSongs({
						user,
						handleCurrentTrack,
						showModal,
						title,
						id,
						author,
						recommended,
						picture,
						source,
						renderAgain,
					});
				}}
			>
				<FontAwesomeIcon icon={faHeart} />
			</button>
			<div className={styles["item-info"]}>
				<p className={styles["item-author"]}>{author}</p>
				<p className={styles["item-title"]}>{title}</p>
			</div>
			<Button
				className={`rounded-button-play`}
				type="button"
				disabled={false}
				onClick={() => {
					getSongId();
					handleIsPlaying(true);
				}}
			>
				<FontAwesomeIcon icon={faPlay} />
			</Button>
			{recommended && (
				<div className={styles.recommendation}>
					<span>Recommendation</span>
				</div>
			)}
		</div>
	);
};
