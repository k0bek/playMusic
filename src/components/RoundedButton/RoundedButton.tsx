import React, { ReactNode } from "react";
import styles from "./RoundedButton.module.scss";

type RoundedButtonType = {
	children: ReactNode;
	className: string;
};

export const RoundedButton = ({ children, className }: RoundedButtonType) => {
	return (
		<button className={`${styles["rounded-button"]} ${className}`}>
			{children}
		</button>
	);
};
