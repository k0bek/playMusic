import React from "react";

import styles from "./RecommendedItem.module.scss";
import background from "./../../../assets/maxresdefault.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const RecommendedItem = () => {
	return (
		<div className={styles.item}>
			<img src={background}></img>
			<div className={styles["background-items"]}>
				<div className={styles.recommended}>
					<p>Recommended!</p>
				</div>
				<button className={styles.play}>
					<FontAwesomeIcon icon={faPlay} />
				</button>
			</div>
		</div>
	);
};
