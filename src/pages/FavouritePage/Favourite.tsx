import styles from "./FavouritePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { db } from "firebase/config";
import { SongsItems } from "feature";
import { CircularProgress } from "@mui/material";
import { useAuthContext } from "hooks/useAuthContext";
import { SongInterface } from "data/tracks";

export const Favourite = () => {
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
		});

		setIsPending(false);
	};

	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<>
			<header className={styles.header}>
				<FontAwesomeIcon icon={faHeart} className={styles.heart} />
				<h1 className={styles.liked}>Liked Songs</h1>
				<p>{user?.displayName} playlist</p>
			</header>
			<SongsItems tracks={tracks} />
			{isPending && <CircularProgress color="secondary" size={60} />}
		</>
	);
};
