import { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	children: ReactNode;
	type: "button" | "submit";
	disabled?: boolean;
};

export const Button = ({ children, type, disabled }: ButtonProps) => {
	return (
		<button className={styles.button} type={type} disabled={disabled}>
			{children}
		</button>
	);
};
