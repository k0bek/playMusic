import React from "react";
import { Input } from "../../components";
import styles from "./Search.module.scss";

export const Search = () => {
	return (
		<>
			<div className={styles["search-box"]}>
				<p className={styles.name}>Hello Kuba,</p>
				<p className={styles.question}>What do you want to hear today?</p>
				<Input type="text" placeholder="Search music" />
			</div>
		</>
	);
};
