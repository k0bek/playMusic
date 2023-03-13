import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./InputError.module.scss";

type InputErrorProps = {
	children: ReactNode;
};

export const InputError = ({ children }: InputErrorProps) => {
	return (
		<p className={styles["password-error"]}>
			<FontAwesomeIcon icon={faCircleExclamation} />
			{children}
		</p>
	);
};
