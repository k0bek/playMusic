import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "firebase/config";
import { useAuthContext } from "hooks/useAuthContext";
import { SongsItems } from "feature/SongsItems/SongsItems";
import { CircularProgress } from "@mui/material";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SongInterface } from "data/tracks";
import styles from "./FavouritePage.module.scss";

export const FavouritePage = () => {
	const [tracks, setTracks] = useState<SongInterface[]>([]);
	const [isPending, setIsPending] = useState(false);
	const { user } = useAuthContext();

	const fetchPost = async () => {
		setIsPending(true);

		const q = query(
			collection(db, "favourites"),
			where("uid", "==", user?.uid)
		);

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let results: SongInterface[] = [];
			querySnapshot.forEach((doc) => {
				results.push(doc.data() as SongInterface);
			});

			setTracks(results);
			setIsPending(false);
		});
	};

	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<>
			<header className={styles.header}>
				<FontAwesomeIcon icon={faHeart} className={styles.heart} />
				<div className={styles["header-box"]}>
					<p>playlist</p>
					<h1 className={styles.liked}>Liked Songs</h1>
					{tracks.length > 0 && (
						<div className={styles["user-playlist"]}>
							<p>{user?.displayName}</p>
							<p>{tracks.length} songs</p>
						</div>
					)}
				</div>
			</header>
			<SongsItems isHomePage={false} tracks={tracks} />
			{isPending && <CircularProgress color="secondary" size={60} />}
		</>
	);
};
