import { ReactNode } from "react";
import styles from "./SecondaryButton.module.scss";

type SecondaryButtonProps = {
	children: ReactNode;
	className?: string;
};

export const SecondaryButton = ({
	children,
	className,
}: SecondaryButtonProps) => {
	return (
		<button className={`${styles["login-logout"]} ${className}`}>
			{children}
		</button>
	);
};
