import styles from "./MainContentPage.module.scss";
import { LoginLogutPanel } from "feature/LoginLogoutPanel";
import { useAuthContext } from "hooks/useAuthContext";
import { CircularProgress } from "@mui/material";
import { Navbar } from "feature/Navbar";
import { Layout } from "components/Layout";
import { PreviewBar } from "feature/PreviewBar";
import { SongPlayer } from "feature/SongPlayer/SongPlayer";
import { Outlet } from "react-router";

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
