import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModalBackdrop } from "feature/LoginModal/LoginModal";
import { NavItem } from "./components/NavItem/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faLongArrowRight,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";
import { useSongContext } from "hooks/useSongContext";

export const Navbar = () => {
	const [isNavbarShowed, setIsNavbarShowed] = useState(false);
	const { isModalShowed } = useSongContext();
	const toggleNav = () => {
		setIsNavbarShowed((prev) => {
			return !prev;
		});
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 600) {
				setIsNavbarShowed(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		isNavbarShowed
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");
	}, [isNavbarShowed]);

	return (
		<>
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

				{!isModalShowed && (
					<button className={styles["arrow"]} onClick={toggleNav}>
						<FontAwesomeIcon icon={faLongArrowRight} />
					</button>
				)}

				<ul className={`${styles["nav-items"]} `}>
					<NavItem icon={faHouse} destination="/" onClick={toggleNav}>
						Discover
					</NavItem>

					<NavItem icon={faHeart} destination="/favourite" onClick={toggleNav}>
						Your favourite
					</NavItem>
				</ul>
			</nav>
			{isNavbarShowed && window.innerWidth <= 600 && (
				<ModalBackdrop onClick={toggleNav} />
			)}
		</>
	);
};
