import React from "react";
import { Link } from "react-router-dom";
import { ButtonLoginLogut } from "../../components/ButtonLoginLogout/ButtonLoginLogut";
import { RoundedButton } from "../../components/RoundedButton/RoundedButton";

import styles from "./PreviewBar.module.scss";

export const PreviewBar = () => {
	return (
		<Link to="/signup">
			<div className={styles["preview-bar"]}>
				<div className={styles["text-box"]}>
					<p className={styles["title"]}>Preview of playMusic</p>
					<p className={styles["desc"]}>
						Sign up up get unlimited songs. No credit card needed.
					</p>
				</div>
				<ButtonLoginLogut>Sign up free </ButtonLoginLogut>
			</div>
		</Link>
	);
};
