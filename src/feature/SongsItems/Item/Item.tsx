import styles from "./Item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import { RoundedButton } from "components/RoundedButton/RoundedButton";
import { useSongContext } from "hooks/useSongContext";

export const Item = ({ author, title, picture, recommended, id }) => {
	const { setSongId } = useSongContext();

	const getSongId = () => {
		console.log("calypso");
		setSongId(id);
	};

	return (
		<div className={styles.item}>
			<img src={picture} />
			<button className={styles["heart"]}>
				<FontAwesomeIcon icon={faHeart} />
			</button>
			<div className={styles["item-info"]}>
				<p className={styles["item-author"]}>{author}</p>
				<p className={styles["item-title"]}>{title}</p>
			</div>
			<RoundedButton className={styles.play} onClick={getSongId}>
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
