import { Outlet } from "react-router";
import { useAuthContext } from "hooks/useAuthContext";
import { LoginLogutPanel } from "feature/LoginLogoutPanel/LoginLogoutPanel";
import { Navbar } from "feature/Navbar/Navbar";
import { PreviewBar } from "feature/PreviewBar/PreviewBar";
import { SongPlayer } from "feature/SongPlayer/SongPlayer";
import { Layout } from "components/Layout/Layout";
import { CircularProgress } from "@mui/material";
import styles from "./MainContentPage.module.scss";

export const MainContentPage = () => {
	const { isUserLoading } = useAuthContext();
	const { user } = useAuthContext();

	return (
		<>
			{!isUserLoading && (
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
			{isUserLoading && (
				<Layout>
					<CircularProgress color="secondary" size={60} />
				</Layout>
			)}
		</>
	);
};
