import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./LoginLogoutPanel.module.scss";
import { useLogout } from "../../hooks/useLogout";

export const LoginLogutPanel = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();

	const handleLoginAndLogout = () => {
		if (user) {
			logout();
		}
	};
	return (
		<div className={styles.panel}>
			<div className={styles["panel-box"]}>
				{!user && (
					<Link to={!user ? "signup" : "/"} className={styles["signup"]}>
						Signup
					</Link>
				)}
				<Link
					to={!user ? "login" : "/"}
					className={styles["login-logout"]}
					onClick={handleLoginAndLogout}
				>
					{user ? "Logout" : "Login"}
				</Link>
			</div>
		</div>
	);
};
