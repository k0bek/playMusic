import React from "react";
import { QuickSelection, Search } from "../../feature";
import { Menu } from "../../feature";
import { RecommendedItems } from "../../feature/RecommendedItems";
import styles from "./HomePage.module.scss";
import { Wrapper } from "../../components/Wrapper";
import { Navbar } from "../../feature/Navbar";

export const HomePage = () => {
	return (
		<Wrapper>
			<div className={styles.homepage}>
				<Navbar />
				<Search />
				<Menu />
				<RecommendedItems />
				<QuickSelection />
			</div>
		</Wrapper>
	);
};
