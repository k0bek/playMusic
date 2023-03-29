import styles from "./ButtonLoginLogut.module.scss";

type ButtonLoginLogutType = {
	children: string;
	className: string;
};

export const ButtonLoginLogut = ({
	children,
	className,
}: ButtonLoginLogutType) => {
	return (
		<button className={`${styles["login-logout"]} ${className}`}>
			{children}
		</button>
	);
};
