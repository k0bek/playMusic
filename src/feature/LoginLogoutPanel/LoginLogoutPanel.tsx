import { Link } from "react-router-dom";
import { useAuthContext } from "hooks/useAuthContext";
import styles from "./LoginLogoutPanel.module.scss";
import { useLogout } from "hooks/useLogout";
import { SecondaryButton } from "components/SecondaryButton/SecondaryButton";
import { useSongContext } from "hooks/useSongContext";

export const LoginLogutPanel = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	const { setIsPlaying, setSongId } = useSongContext();

	const handleLoginAndLogout = () => {
		if (user) {
			logout();
		}

		setIsPlaying(false);
		setSongId(null);
	};
	return (
		<div className={styles.panel}>
			<div className={styles["panel-box"]}>
				{!user && (
					<Link to={!user ? "signup" : "/"} className={styles.signup}>
						Signup
					</Link>
				)}
				<Link to={!user ? "login" : "/"} onClick={handleLoginAndLogout}>
					<SecondaryButton>{user ? "Logout" : "Login"}</SecondaryButton>
				</Link>
			</div>
		</div>
	);
};
