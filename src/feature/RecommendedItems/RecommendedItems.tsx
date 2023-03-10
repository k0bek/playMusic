import React from "react";
import { RecommendedItem } from "./RecommendedItem/RecommendedItem";
import styles from "./RecommendedItems.module.scss";

import image from "./../../assets/maxresdefault.jpg";

export const RecommendedItems = () => {
	return (
		<div className={styles.items}>
			<RecommendedItem />
			<RecommendedItem />
			<RecommendedItem />
		</div>
	);
};
