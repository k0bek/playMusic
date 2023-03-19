import React from "react";
import { QuickSelection, Search } from "../../feature";
import { Menu } from "../../feature";
import { RecommendedItems } from "../../feature/RecommendedItems";
import styles from "./HomePage.module.scss";
import { Wrapper } from "../../components/Wrapper";
import { LoginLogutPanel } from "../../feature/LoginLogoutPanel";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CircularProgress } from "@mui/material";
import { Navbar } from "../../feature/Navbar/Navbar";
import { Layout } from "../../components/Layout/Layout";

export const HomePage = () => {
	const { user, initUserLoggedLoading } = useAuthContext();

	return (
		<>
			{!initUserLoggedLoading && (
				<div className={styles.homepage}>
					<LoginLogutPanel />
					<Navbar />
					<main className={styles["main"]}>
						<Search />
						<Menu />
						<RecommendedItems />
					</main>
				</div>
			)}

			{initUserLoggedLoading && (
				<Layout>
					<CircularProgress color="secondary" size={60} />
				</Layout>
			)}
		</>
	);
};
