import React, { useState } from "react";
import { NavItem } from "./components/NavItem";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faMusic,
	faUser,
	faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components";

export const Navbar = () => {
	const [isNavbarShowed, setIsNavbarShowed] = useState(false);
	const showNavbar = () => {
		setIsNavbarShowed((prev) => {
			return !prev;
		});
	};

	return (
		<nav
			className={`${styles["navbar"]} ${
				isNavbarShowed ? styles["navbar-showed"] : ""
			}`}
		>
			<p className={styles["heading"]}>
				play<span className={styles["bolded"]}>M</span>usic
			</p>

			<button className={styles["arrow"]} onClick={showNavbar}>
				<FontAwesomeIcon icon={faLongArrowRight} />
			</button>

			<ul className={`${styles["nav-items"]} `}>
				<NavItem>
					<span>
						<FontAwesomeIcon icon={faHouse} />
					</span>
					<p>Discover</p>
				</NavItem>
				<NavItem>
					<span>
						<FontAwesomeIcon icon={faUser} />
					</span>
					<p>Top Artists</p>
				</NavItem>
				<NavItem>
					<span>
						<FontAwesomeIcon icon={faMusic} />
					</span>
					<p>Top Charts</p>
				</NavItem>
			</ul>
		</nav>
	);
};
