import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./LoginLogoutPanel.module.scss";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export const LoginLogutPanel = () => {
	const { user } = useAuthContext();
	const { logout, error, isPending } = useLogout();
	const navigate = useNavigate();

	const handleLoginAndLogout = () => {
		if (user) {
			logout();
		}
	};
	return (
		<nav className={styles.navbar}>
			<div className={styles["navbar-box"]}>
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
		</nav>
	);
};
