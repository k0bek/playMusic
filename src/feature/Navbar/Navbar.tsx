import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles["navbar-box"]}>
				<p className={styles["company-name"]}>
					play<b className={styles.bolded}>M</b>usic
				</p>
				<Link to="login" className={styles["login-logout"]}>
					Login
				</Link>
			</div>
		</nav>
	);
};
