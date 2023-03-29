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
import { LoginModal } from "feature/LoginModal/LoginModal";

export const Item = ({
	author,
	title,
	picture,
	recommended,
	id,
	source,
}: SongInterface) => {
	const { user } = useAuthContext();
	const { setSongId, setIsPlaying, isSongFocused, showModal } =
		useSongContext();

	const getSongId = () => {
		if (!user) {
			showModal();
			return;
		} else {
			setSongId(id);
		}
	};

	const addToFavourites = async () => {
		if (!user) {
			showModal();
			return;
		} else {
			const reference = collection(db, "favourites");

			const querySnapshot = await getDocs(
				query(collection(db, "favourites"), where("id", "==", id))
			);

			if (querySnapshot.docs.length > 0) {
				return;
			}

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
	};

	useEffect(() => {
		if (isSongFocused) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [isSongFocused]);

	return (
		<div className={styles.item}>
			<img src={picture} />
			<button className={styles["heart"]} onClick={addToFavourites}>
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
