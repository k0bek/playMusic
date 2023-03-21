import React from "react";
import styles from "./Menu.module.scss";

export const Menu = () => {
	return (
		<ul className={styles.menu}>
			<li className={styles.item}>
				<h2>Recommendation</h2>
			</li>
			<li className={styles.item}>
				<h2>All</h2>
			</li>
		</ul>
	);
};
