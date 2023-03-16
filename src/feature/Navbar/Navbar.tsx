import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Navbar.module.scss";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
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
				<p className={styles["company-name"]}>
					play<b className={styles.bolded}>M</b>usic
				</p>
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
