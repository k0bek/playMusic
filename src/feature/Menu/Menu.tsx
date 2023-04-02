import { useSongContext } from "hooks/useSongContext";
import styles from "./Menu.module.scss";

export const Menu = () => {
	const { setRecommended } = useSongContext();

	const showRecommended = () => {
		setRecommended(true);
	};

	const showAll = () => {
		setRecommended(false);
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
