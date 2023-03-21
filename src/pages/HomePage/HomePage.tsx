import React from "react";
import { Search } from "../../feature";
import { Menu } from "../../feature";
import styles from "./HomePage.module.scss";
import { LoginLogutPanel } from "../../feature/LoginLogoutPanel";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CircularProgress } from "@mui/material";
import { Navbar } from "../../feature/Navbar/Navbar";
import { Layout } from "../../components/Layout/Layout";
import { SongsItems } from "./../../feature/SongsItems";
import { PreviewBar } from "../../feature/PreviewBar/PreviewBar";

export const HomePage = () => {
	const { initUserLoggedLoading } = useAuthContext();
	const { user } = useAuthContext();

	return (
		<>
			{!initUserLoggedLoading && (
				<div className={styles.homepage}>
					<LoginLogutPanel />
					<Navbar />
					<main className={styles["main"]}>
						<Search />
						<Menu />
						<SongsItems />
					</main>

					{!user && <PreviewBar />}
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
