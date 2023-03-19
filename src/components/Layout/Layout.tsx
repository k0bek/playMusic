import styles from "./Layout.module.scss";

type ChildrenType = {
	children: JSX.Element;
};

export const Layout = ({ children }: ChildrenType) => {
	return <div className={styles.layout}>{children}</div>;
};
