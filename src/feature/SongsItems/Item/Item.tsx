import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import { RoundedButton } from "components/RoundedButton/RoundedButton";
import { useSongContext } from "hooks/useSongContext";
import { useEffect, useState } from "react";
import { db } from "firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useAuthContext } from "hooks/useAuthContext";
import { SongInterface, tracks } from "data/tracks";
import { doc, deleteDoc } from "firebase/firestore";

export const Item = ({
	author,
	title,
	picture,
	recommended,
	id,
	source,
	currentTracksList,
}: SongInterface) => {
	const { user } = useAuthContext();
	const {
		setSongId,
		setIsPlaying,
		isSongFocused,
		showModal,
		setCurrentTrack,
		setListOfTracks,
	} = useSongContext();
	const [isDuplicate, setIsDuplicate] = useState(false);

	const getSongId = () => {
		if (!user) {
			setCurrentTrack(id);
			showModal();
			return;
		} else {
			setSongId(id);
		}

		if (currentTracksList) {
			setListOfTracks(currentTracksList);
		}
	};

	const addToFavourites = async () => {
		if (!user) {
			setCurrentTrack(id);
			showModal();
			return;
		} else {
			const reference = collection(db, "favourites");

			const querySnapshot = await getDocs(
				query(
					collection(db, "favourites"),
					where("title", "==", title),
					where("uid", "==", user.uid)
				)
			);

			if (querySnapshot.docs.length > 0) {
				return;
			} else {
				await addDoc(reference, {
					id,
					title,
					author,
					recommended,
					picture,
					source,
					uid: user?.uid,
				});
			}
		}

		checkIsSongFavouriteDuplicate(title);
	};

	const checkIsSongFavouriteDuplicate = async (title: string) => {
		const querySnapshot = await getDocs(
			query(
				collection(db, "favourites"),
				where("title", "==", title),
				where("uid", "==", user?.uid)
			)
		);

		if (!isDuplicate) {
			setIsDuplicate(querySnapshot.docs.length > 0);
		}

		return querySnapshot.docs.length > 0;
	};

	const deleteFavouriteSong = async () => {
		const querySnapshot = await getDocs(
			query(
				collection(db, "favourites"),
				where("title", "==", title),
				where("uid", "==", user?.uid)
			)
		);
		if (isDuplicate) {
			querySnapshot.forEach((doc) => {
				deleteDoc(doc.ref);
			});
			setIsDuplicate(false);
		}
	};

	console.log(isDuplicate);

	useEffect(() => {
		async function checkDuplicates() {
			const isDuplicate = await checkIsSongFavouriteDuplicate(title);
			setIsDuplicate(isDuplicate);
		}
		checkDuplicates();
	}, []);

	useEffect(() => {
		isSongFocused
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");
	}, [isSongFocused]);

	useEffect(() => {
		setIsDuplicate(false);
	}, [user, setIsDuplicate]);

	return (
		<div className={styles.item}>
			<img src={picture} alt={title} />
			<button
				className={isDuplicate ? styles["heart-favourite"] : styles.heart}
				onClick={() => {
					addToFavourites();
					deleteFavouriteSong();
				}}
			>
				<FontAwesomeIcon icon={faHeart} />
			</button>
			<div className={styles["item-info"]}>
				<p className={styles["item-author"]}>{author}</p>
				<p className={styles["item-title"]}>{title}</p>
			</div>
			<RoundedButton
				className={styles.play}
				onClick={() => {
					getSongId();
					setIsPlaying(true);
				}}
			>
				<FontAwesomeIcon icon={faPlay} />
			</RoundedButton>
			{recommended && (
				<div className={styles.recommendation}>
					<span>Recommendation</span>
				</div>
			)}
		</div>
	);
};
