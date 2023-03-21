import { Link } from "react-router-dom";
import { useAuthContext } from "hooks/useAuthContext";
import styles from "./LoginLogoutPanel.module.scss";
import { useLogout } from "hooks/useLogout";
import { ButtonLoginLogut } from "components/ButtonLoginLogout/ButtonLoginLogut";

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
				<Link to={!user ? "login" : "/"} onClick={handleLoginAndLogout}>
					<ButtonLoginLogut>{user ? "Logout" : "Login"}</ButtonLoginLogut>
				</Link>
			</div>
		</div>
	);
};
