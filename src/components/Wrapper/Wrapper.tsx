import React from "react";
import styles from "./Wrapper.module.scss";
import { ReactNode } from "react";

type WrapperProps = {
	children: JSX.Element;
};

export const Wrapper = ({ children }: WrapperProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};
