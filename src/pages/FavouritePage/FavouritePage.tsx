import { useEffect, useState } from "react";
import { useAuthContext } from "hooks/useAuthContext";
import { SongsItems } from "feature/SongsItems/SongsItems";
import { CircularProgress } from "@mui/material";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SongInterface } from "data/tracks";
import getQuerySnapshot from "hooks/getQuerySnapshot";
import styles from "./FavouritePage.module.scss";

export const FavouritePage = () => {
	const [favouriteTracks, setFavouriteTracks] = useState<SongInterface[]>([]);
	const [isPending, setIsPending] = useState(false);
	const [renderedAgain, setRederedAgain] = useState(true);

	const { user } = useAuthContext();

	useEffect(() => {
		const fetchData = async () => {
			if (user) {
				const querySnapshot = await getQuerySnapshot(user.uid);

				const data = querySnapshot.docs.map((doc) => ({
					...(doc.data() as SongInterface),
					isFavourite: true,
				}));

				setFavouriteTracks(data);
			}
		};

		fetchData();
	}, [renderedAgain, favouriteTracks]);

	const renderAgain = () => {
		setRederedAgain((prev) => {
			return !prev;
		});
	};
	return (
		<>
			<header className={styles.header}>
				<FontAwesomeIcon icon={faHeart} className={styles.heart} />
				<div className={styles["header-box"]}>
					<p>playlist</p>
					<h1 className={styles.liked}>Liked Songs</h1>
					{favouriteTracks.length > 0 && (
						<div className={styles["user-playlist"]}>
							<p>{user?.displayName}</p>
							<p>{favouriteTracks.length} songs</p>
						</div>
					)}
				</div>
			</header>
			<SongsItems tracks={favouriteTracks} renderAgain={renderAgain} />
			{isPending && <CircularProgress color="secondary" size={60} />}
		</>
	);
};
