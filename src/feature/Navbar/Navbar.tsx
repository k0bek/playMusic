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
import { Link, NavLink } from "react-router-dom";

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
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending
							? "pending"
							: isActive
							? styles["nav-item-active"]
							: styles["nav-item"]
					}
				>
					<span>
						<FontAwesomeIcon icon={faHouse} />
					</span>
					<p>Discover</p>
				</NavLink>
				<NavLink
					to="favourite"
					className={({ isActive, isPending }) =>
						isPending
							? "pending"
							: isActive
							? styles["nav-item-active"]
							: styles["nav-item"]
					}
				>
					<span>
						<FontAwesomeIcon icon={faHeart} />
					</span>
					<p>Your favourite</p>
				</NavLink>
				<NavLink
					to="recently-listened"
					className={({ isActive, isPending }) =>
						isPending
							? "pending"
							: isActive
							? styles["nav-item-active"]
							: styles["nav-item"]
					}
				></NavLink>
			</ul>
		</nav>
	);
};
