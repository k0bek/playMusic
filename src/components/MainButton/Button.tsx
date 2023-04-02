import { ReactNode } from "react";
import styles from "./MainButton.module.scss";

type MainButtonProps = {
	children: ReactNode;
	type: "button" | "submit";
	disabled?: boolean;
};

export const MainButton = ({ children, type, disabled }: MainButtonProps) => {
	return (
		<button className={styles.button} type={type} disabled={disabled}>
			{children}
		</button>
	);
};
