import React from "react";
import { QuickSelection, Search } from "../../feature";
import { Menu } from "../../feature";
import { RecommendedItems } from "../../feature/RecommendedItems";
import styles from "./HomePage.module.scss";
import { Wrapper } from "../../components/Wrapper";
import { LoginLogutPanel } from "../../feature/LoginLogoutPanel";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CircularProgress } from "@mui/material";

export const HomePage = () => {
	const { user, initUserLoggedLoading } = useAuthContext();

	return (
		<Wrapper>
			{!initUserLoggedLoading && (
				<div className={styles.homepage}>
					<LoginLogutPanel />
					<Search />
					<Menu />
					<RecommendedItems />
					{/* <QuickSelection /> */}
				</div>
			)}

			{initUserLoggedLoading && (
				<CircularProgress color="secondary" size={60} />
			)}
		</Wrapper>
	);
};
