import styles from "./Item.module.scss";
import martin from "assets/therapy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import { RoundedButton } from "components/RoundedButton/RoundedButton";

export const Item = () => {
	return (
		<div className={styles.item}>
			<img src={martin} />
			<button className={styles["heart"]}>
				<FontAwesomeIcon icon={faHeart} />
			</button>
			<div className={styles["item-info"]}>
				<p className={styles["item-author"]}>Martin Garrix</p>
				<p className={styles["item-title"]}>Used to love me</p>
			</div>
			<RoundedButton className={styles.play}>
				<FontAwesomeIcon icon={faPlay} />
			</RoundedButton>
			<div className={styles.recommendation}>
				<span>Recommendation</span>
			</div>
		</div>
	);
};
