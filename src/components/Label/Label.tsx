import { ReactNode } from "react";
import styles from "./Label.module.scss";

type LabelProps = {
	children: ReactNode;
	htmlFor: string;
};

export const Label = ({ children, htmlFor }: LabelProps) => {
	return (
		<label htmlFor={htmlFor} className={styles.label}>
			{children}:
		</label>
	);
};
