import { useSongContext } from "hooks/useSongContext";
import styles from "./Menu.module.scss";

export const Menu = () => {
	const { handleIsRecommended } = useSongContext();

	const showRecommended = () => {
		handleIsRecommended(true);
	};

	const showAll = () => {
		handleIsRecommended(false);
	};

	return (
		<ul className={styles.menu}>
			<li className={styles.item}>
				<button onClick={showRecommended} className={styles.button}>
					<h2>Recommended</h2>
				</button>
			</li>
			<li className={styles.item}>
				<button onClick={showAll} className={styles.button}>
					<h2>All</h2>
				</button>
			</li>
		</ul>
	);
};
