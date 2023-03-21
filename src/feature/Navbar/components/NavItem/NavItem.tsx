import styles from "./NavItem.module.scss";

type NavItemProps = {
	children: Array<JSX.Element> | JSX.Element;
};

export const NavItem = ({ children }: NavItemProps) => {
	return <li className={styles["nav-item"]}>{children}</li>;
};
