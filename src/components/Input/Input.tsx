import React, { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	register: any;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ register, ...rest }, ref) => {
		return <input className={styles.input} ref={ref} {...register} {...rest} />;
	}
);
