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
				<button onClick={showRecommended}>
					<h2>Recommended</h2>
				</button>
			</li>
			<li className={styles.item}>
				<button onClick={showAll}>
					<h2>All</h2>
				</button>
			</li>
		</ul>
	);
};
