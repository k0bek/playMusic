import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.scss";

interface InputProps {
	type: string;
	placeholder?: string;
	register?: UseFormRegisterReturn<"email" | "password" | "name">;
	value?: string;
	id: "email" | "name" | "password";
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ register, ...rest }, ref) => {
		return (
			<input
				className={styles.input}
				{...register}
				{...rest}
				onKeyDown={(event) => {
					if (event.key === " ") {
						event.preventDefault();
					}
				}}
			/>
		);
	}
);
