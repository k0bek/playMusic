import { useSongContext } from "hooks/useSongContext";
import { ReactNode } from "react";
import styles from "./RoundedButton.module.scss";

type RoundedButtonProps = {
	children: ReactNode;
	className: string;
	onClick: () => void;
};

export const RoundedButton = ({
	children,
	className,
	onClick,
}: RoundedButtonProps) => {
	return (
		<button
			className={`${styles["rounded-button"]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
