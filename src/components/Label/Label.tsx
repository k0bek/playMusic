import React, { ReactNode } from "react";
import styles from "./Label.module.scss";

type LabelProps = {
	type: string;
	children: ReactNode;
};

export const Label = ({ type, children }: LabelProps) => {
	return (
		<label htmlFor="email" className={styles.label}>
			{children}:
		</label>
	);
};
