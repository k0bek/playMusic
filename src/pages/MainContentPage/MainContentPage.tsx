import { Outlet } from "react-router";
import { useAuthContext } from "hooks/useAuthContext";
import { LoginLogutPanel } from "feature";
import { Navbar } from "feature/Navbar";
import { PreviewBar } from "feature/PreviewBar";
import { SongPlayer } from "feature/SongPlayer";
import { Layout } from "components/Layout";
import { CircularProgress } from "@mui/material";
import styles from "./MainContentPage.module.scss";

export const MainContentPage = () => {
	const { initUserLoggedLoading } = useAuthContext();
	const { user } = useAuthContext();

	return (
		<>
			{!initUserLoggedLoading && (
				<div className={styles.homepage}>
					<LoginLogutPanel />
					<Navbar />
					<main className={styles["main"]}>
						<Outlet />
					</main>

					{!user && <PreviewBar />}
					<SongPlayer />
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
