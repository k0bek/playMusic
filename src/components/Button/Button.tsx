import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonAttrs = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonPickedAttrs = "type" | "disabled" | "className" | "onClick";

interface ButtonProps extends Pick<ButtonAttrs, ButtonPickedAttrs> {
	children: ReactNode;
}

export const Button = ({
	children,
	type,
	disabled,
	className,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={classNames({
				[styles["main-button"]]: className === "main-button",
				[styles["rounded-button"]]: className === "rounded-button",
				[styles["rounded-button-play"]]: className === "rounded-button-play",
				[styles["secondary-button"]]: className === "secondary-button",
			})}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
