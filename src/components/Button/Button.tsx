import { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	children: ReactNode;
	type: "button" | "submit";
	disabled: boolean;
	className: string;
	onClick?: () => void;
};

export const Button = ({
	children,
	type,
	disabled,
	className,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={styles[className]}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
