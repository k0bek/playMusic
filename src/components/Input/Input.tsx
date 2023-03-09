import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";

type InputProps = {
	type: string;
	id?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
};

export const Input = ({ type, id, onChange, placeholder }: InputProps) => {
	return (
		<input
			type={type}
			id={id}
			className={styles.input}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};
