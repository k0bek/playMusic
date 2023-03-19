import React from "react";
import { RecommendedItem } from "./RecommendedItem/RecommendedItem";
import styles from "./RecommendedItems.module.scss";

import image from "./../../assets/maxresdefault.jpg";
import { AuthContext } from "../../context/AuthContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Wrapper } from "../../components/Wrapper";

export const RecommendedItems = () => {
	return (
		<Wrapper>
			<div className={styles.items}>
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
				<RecommendedItem />
			</div>
		</Wrapper>
	);
};
