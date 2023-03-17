import React from "react";
import { RecommendedItem } from "./RecommendedItem/RecommendedItem";
import styles from "./RecommendedItems.module.scss";

import image from "./../../assets/maxresdefault.jpg";
import { AuthContext } from "../../context/AuthContext";
import { useAuthContext } from "../../hooks/useAuthContext";

export const RecommendedItems = () => {
	return (
		<div className={styles.items}>
			<RecommendedItem />
			<RecommendedItem />
			<RecommendedItem />
		</div>
	);
};
