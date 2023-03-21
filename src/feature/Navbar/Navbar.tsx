import { useState } from "react";
import { NavItem } from "./components/NavItem/NavItem";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faMusic,
	faLongArrowRight,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
			<Link to="/" className={styles["heading"]}>
				<p>
					play<span className={styles["bolded"]}>M</span>usic
				</p>
			</Link>

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
						<FontAwesomeIcon icon={faHeart} />
					</span>
					<p>Your favourite</p>
				</NavItem>
				<NavItem>
					<span>
						<FontAwesomeIcon icon={faMusic} />
					</span>
					<p>Recently Listened</p>
				</NavItem>
			</ul>
		</nav>
	);
};
