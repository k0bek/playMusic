import React from "react";

import styles from "./ButtonLoginLogut.module.scss";

type ButtonLoginLogutType = {
	children: string;
};

export const ButtonLoginLogut = ({ children }: ButtonLoginLogutType) => {
	return <button className={styles["login-logout"]}>{children}</button>;
};
