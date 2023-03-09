import React from "react";
import styles from "./Menu.module.scss";

export const Menu = () => {
	return (
		<ul className={styles.menu}>
			<li className={styles.item}>Recommendation</li>
			<li className={styles.item}>All</li>
		</ul>
	);
};
