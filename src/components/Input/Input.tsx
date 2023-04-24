import {
	forwardRef,
	HTMLInputTypeAttribute,
	KeyboardEvent,
	ChangeEventHandler,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.scss";

interface InputProps {
	type: HTMLInputTypeAttribute;
	placeholder?: string;
	register?: UseFormRegisterReturn<"email" | "password" | "name">;
	value?: string;
	id?: string;
	onChange?: ChangeEventHandler<HTMLInputElement | undefined>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ register, ...rest }) => {
		const spaceSignBlocker = (event: KeyboardEvent<HTMLInputElement>) => {
			if (event.key === " ") {
				event.preventDefault();
			}
		};
		return (
			<input
				className={styles.input}
				{...register}
				{...rest}
				onKeyDown={spaceSignBlocker}
			/>
		);
	}
);
