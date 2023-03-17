import React from "react";
import classes from "./Wrapper.module.scss";
import { ReactNode } from "react";

type WrapperProps = {
	children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
	return <div className={classes.wrapper}>{children}</div>;
};
