import { useSongContext } from "hooks/useSongContext";
import { ReactNode } from "react";
import styles from "./RoundedButton.module.scss";

type RoundedButtonType = {
	children: ReactNode;
	className: string;
	onClick: () => void;
};

export const RoundedButton = ({
	children,
	className,
	onClick,
}: RoundedButtonType) => {
	return (
		<button
			className={`${styles["rounded-button"]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
